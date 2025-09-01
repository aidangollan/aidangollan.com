const fs = require('fs');
const path = require('path');

const thoughtsDir = './thoughts';
const outputDir = '.';
const quotesFile = './quotes.txt';

// HTML template for articles
const getArticleTemplate = (title, content, slug) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>aidan gollan | ${title}</title>
    <link rel="icon" type="image/x-icon" href="assets/galaxy.ico">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
</head>
<body>
    <nav class="navigation">
        <div class="nav-left">
            <a href="https://github.com/aidangollan" target="_blank"><i class="fab fa-github"></i></a>
            <a href="https://linkedin.com/in/aidangollan" target="_blank"><i class="fab fa-linkedin"></i></a>
        </div>
        <div class="nav-right">
            <a href="index.html">home</a>
            <a href="projects.html">projects</a>
            <a href="quotes.html">quotes</a>
            <a href="links.html">important links</a>
        </div>
    </nav>
    <main>
        <article class="main-content">
            <h1>${title}</h1>
            
            <section class="article-section">
                ${content}
            </section>
        </article>
    </main>
    <script src="js/links.js"></script>
</body>
</html>`;

// Function to generate slug from title
function generateSlug(title) {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
}

// Function to convert markdown links to HTML links
function convertMarkdownLinks(text) {
    return text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
}

// Function to process txt file and generate HTML
function processTxtFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n').filter(line => line.trim() !== '');
    
    if (lines.length === 0) return null;
    
    const title = lines[0].trim();
    const slug = generateSlug(title);
    
    // Convert remaining lines to paragraphs, handling markdown links
    const paragraphs = lines.slice(1).map(line => {
        const processedLine = convertMarkdownLinks(line.trim());
        return `                <p>${processedLine}</p>`;
    }).join('\n\n');
    
    const htmlContent = getArticleTemplate(title, paragraphs, slug);
    
    return {
        title,
        slug,
        filename: `${slug}.html`,
        content: htmlContent
    };
}

// Function to update thoughts.html with generated articles
function updateThoughtsHtml(articles) {
    const thoughtsPath = './thoughts.html';
    let thoughtsContent = fs.readFileSync(thoughtsPath, 'utf-8');
    
    // Generate the list items for articles
    const listItems = articles.map(article => 
        `                <li>
                    <a 
                    href="${article.filename}" 
                    >
                    ${article.title}
                    </a>
                </li>`
    ).join('\n');
    
    // Replace the existing list content
    const listStart = '<ul class="links-list">';
    const listEnd = '</ul>';
    const startIndex = thoughtsContent.indexOf(listStart);
    const endIndex = thoughtsContent.indexOf(listEnd, startIndex) + listEnd.length;
    
    const newListSection = `${listStart}
${listItems}
            ${listEnd}`;
    
    thoughtsContent = thoughtsContent.substring(0, startIndex) + newListSection + thoughtsContent.substring(endIndex);
    
    fs.writeFileSync(thoughtsPath, thoughtsContent);
}

// Function to process quotes.txt and update quotes.html
function processQuotes() {
    if (!fs.existsSync(quotesFile)) {
        console.log('No quotes.txt found, skipping quotes processing');
        return;
    }
    
    const content = fs.readFileSync(quotesFile, 'utf-8');
    const lines = content.split('\n').map(line => line.trim()).filter(line => line !== '');
    
    const quotes = [];
    for (let i = 0; i < lines.length; i += 2) {
        if (i + 1 < lines.length) {
            quotes.push({
                quote: lines[i],
                author: lines[i + 1]
            });
        }
    }
    
    // Generate quotes HTML
    const quotesHtml = quotes.map(q => 
        `                <blockquote class="quote">
                    <p>"${q.quote}"</p>
                    <footer>— ${q.author}</footer>
                </blockquote>`
    ).join('\n\n');
    
    // Update quotes.html
    const quotesPath = './quotes.html';
    let quotesContent = fs.readFileSync(quotesPath, 'utf-8');
    
    const containerStart = '<div class="quotes-container">';
    const containerEnd = '</div>';
    const startIndex = quotesContent.indexOf(containerStart);
    const endIndex = quotesContent.indexOf(containerEnd, startIndex) + containerEnd.length;
    
    const newContainer = `${containerStart}
${quotesHtml}
            ${containerEnd}`;
    
    quotesContent = quotesContent.substring(0, startIndex) + newContainer + quotesContent.substring(endIndex);
    fs.writeFileSync(quotesPath, quotesContent);
    
    console.log(`Updated quotes.html with ${quotes.length} quotes`);
}

// Main execution
function buildThoughts() {
    if (!fs.existsSync(thoughtsDir)) {
        console.log('Creating thoughts directory...');
        fs.mkdirSync(thoughtsDir);
        return;
    }
    
    const files = fs.readdirSync(thoughtsDir).filter(file => file.endsWith('.txt'));
    const articles = [];
    
    console.log(`Processing ${files.length} txt files...`);
    
    for (const file of files) {
        const filePath = path.join(thoughtsDir, file);
        const article = processTxtFile(filePath);
        
        if (article) {
            // Write HTML file
            fs.writeFileSync(article.filename, article.content);
            articles.push(article);
            console.log(`Generated: ${article.filename}`);
        }
    }
    
    // Update thoughts.html with new articles
    if (articles.length > 0) {
        updateThoughtsHtml(articles);
        console.log(`Updated thoughts.html with ${articles.length} articles`);
    }
    
    // Process quotes
    processQuotes();
    
    console.log('Build complete!');
}

buildThoughts();

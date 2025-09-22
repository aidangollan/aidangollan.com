async function loadQuotes() {
  const container = document.querySelector('.quotes-container');
  if (!container) return;

  // Helper: split text into groups separated by blank lines
  function parseQuotes(text) {
    const lines = text.replace(/\r\n?/g, '\n').split('\n').map(l => l.trim());
    const hasBlank = lines.some(l => l === '');

    const entries = [];

    if (hasBlank) {
      // Paragraph mode: groups separated by blank lines
      let group = [];
      const flush = () => {
        if (!group.length) return;
        if (group.length >= 2) {
          entries.push({ quote: group[0], author: group.slice(1).join(' ') });
        } else {
          entries.push({ quote: group[0], author: '' });
        }
        group = [];
      };
      for (const line of lines) {
        if (line === '') flush(); else group.push(line);
      }
      flush();
    } else {
      // Pair mode: every two lines = quote, author
      for (let i = 0; i < lines.length; i += 2) {
        const quote = lines[i];
        const author = lines[i + 1] || '';
        if ((quote && quote.length) || (author && author.length)) {
          entries.push({ quote, author });
        }
      }
    }

    return entries;
  }

  try {
    const res = await fetch('quotes.txt', { cache: 'no-store' });
    if (!res.ok) throw new Error(`Failed to load quotes.txt (${res.status})`);
    const text = await res.text();
    const entries = parseQuotes(text);

    container.innerHTML = '';
    if (!entries.length) {
      const p = document.createElement('p');
      p.textContent = 'No quotes found.';
      container.appendChild(p);
      return;
    }

    for (const { quote, author } of entries) {
      const p = document.createElement('p');
      p.textContent = author ? `${quote} — ${author}` : quote;
      container.appendChild(p);
    }
  } catch (err) {
    const p = document.createElement('p');
    p.textContent = 'Failed to load quotes.';
    container.appendChild(p);
    // Optionally log for debugging
    console.error(err);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadQuotes, { once: true });
} else {
  loadQuotes();
}

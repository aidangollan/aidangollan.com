let secretCode = '';

document.addEventListener('keydown', (event) => {
    secretCode += event.key.toLowerCase();
    
    if (secretCode.length > 9) {
        secretCode = secretCode.slice(-9);
    }
    
    if (secretCode === 'giveyouup') {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
        secretCode = '';
    }
});
document.addEventListener('mousedown', (event) => {
    const link = event.target.closest('a');
    if (link) {
        event.preventDefault();
        const href = link.getAttribute('href');
        const target = link.getAttribute('target');
        if (target === '_blank') {
            window.open(href, '_blank');
        } else {
            window.location.href = href;
        }
    }
});
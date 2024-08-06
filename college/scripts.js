document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search-input').addEventListener('keyup', function() {
        searchLinks();
    });
});

function searchLinks() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const links = document.querySelectorAll('a');
    
    links.forEach(link => {
        if (link.innerText.toLowerCase().includes(input)) {
            link.style.display = '';
        } else {
            link.style.display = 'none';
        }
    });
}

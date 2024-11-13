// Obtener los elementos
const searchInput = document.getElementById('search-input');
const contextMenu = document.getElementById('context-menu');

// Mostrar el menú contextual cuando el mouse pasa sobre la barra de búsqueda
searchInput.addEventListener('mouseenter', () => {
    contextMenu.style.display = 'block';
    const rect = searchInput.getBoundingClientRect();
    contextMenu.style.top = `${rect.bottom + window.scrollY + 5}px`;
    contextMenu.style.left = `${rect.left + window.scrollX}px`;
});

// Ocultar el menú contextual cuando el mouse sale
searchInput.addEventListener('mouseleave', () => {
    contextMenu.style.display = 'none';
});

// Evitar que el menú desaparezca si se hace clic en él
contextMenu.addEventListener('mouseleave', () => {
    contextMenu.style.display = 'none';
});

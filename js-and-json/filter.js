async function loadDatabase() {
    const response = await fetch('/js-and-json/database.json') // Go get it
    const database = await response.json(); // Decode it into JS
    renderItems(database); // Show It
    setupFilters(database); // Let user filter it
}

function renderItems(items) { // "items" is now holding the data from "database"; it's essentially a nickname here
    const container = document.getElementById('content');
    container.innerHTML = '';

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card'; // asigning a CSS class to a new HTML element (the "card"); the class name will help you style this piece of content using CSS ("When we get to styling, this div is gonna be treated like a card.")

        card.innerHTML = `
            <img src="${item.thumbnail}" alt="${item.title} thumbnail">
            <h2>${item.title}</h2>
            <p><strong>Type:</strong> ${item.type}</p>
            <p>${item.summary}</p>
            <a href="${item.filepath}">View Full</a>
            ${item.youtube ? `<div class="video"><iframe src="${item.youtube}" frameborder="0" allowfullscreen></iframe></div>` : ''}
        `;

        container.appendChild(card);

    });
}

function setupFilters(database) {
    const filterButtons = document.querySelectorAll('[data-filter]');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tag = button.getAttribute('data-filter');
            const filtered = database.filter(item =>
                item.tags.includes(tag) || item.type === tag
            );
            renderItems(filtered);
        });
    });
}

window.addEventListener('DOMContentLoaded', loadDatabase);
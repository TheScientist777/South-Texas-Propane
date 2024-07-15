document.addEventListener('DOMContentLoaded', function() {
    const accordionButtons = document.querySelectorAll('.accordion-button');
    const itemsContainer = document.getElementById('itemsContainer');

    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.textContent.trim();
            loadItems(category);
        });
    });

    function loadItems(category) {
        // This is where you'd typically make an AJAX call to your server
        // For this example, we'll just use some dummy data
        const items = getDummyItems(category);
        displayItems(items);
    }

    function getDummyItems(category) {
        // Return dummy items based on category
        return [
            { name: `${category} Item 1`, price: '$19.99' },
            { name: `${category} Item 2`, price: '$29.99' },
            { name: `${category} Item 3`, price: '$39.99' },
        ];
    }

    function displayItems(items) {
        itemsContainer.innerHTML = '';
        items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'item';
            itemElement.innerHTML = `<h3>${item.name}</h3><p>${item.price}</p>`;
            itemsContainer.appendChild(itemElement);
        });
    }

    // Load initial items
    loadItems('Tanks');
});

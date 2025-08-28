document.addEventListener('DOMContentLoaded', function() {
    const accordionButtons = document.querySelectorAll('.accordion-button');
    const itemsContainer = document.getElementById('itemsContainer');
    let currentPage = 1;
    let currentCategory = '';
    const itemsPerPage = 7;

    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.textContent.trim();
            currentCategory = category;
            currentPage = 1;
            loadItems(category);
        });
    });

    function loadItems(category) {
        const items = getItemsByCategory(category);
        displayItems(items, category);
    }

    function getItemsByCategory(category) {
        if (category === 'Fastenal') {
            return getFastenalItems();
        } else if (category === 'Screws') {
            return getScrewsItems();
        } else {
            return getDummyItems(category);
        }
    }

    function getFastenalItems() {
        const fastenalItems = [];
        for (let i = 1; i <= 72; i++) {
            if (i === 2) {
                fastenalItems.push({
                    name: '1/4"-20 ASTM A563 Grade A Zinc Finish Steel Jam Nut',
                    price: '15¢',
                    image: 'Fastenal No 1136202.jpg',
                    id: 'fastenal-jam-nut'
                });
            } else 
            if (i === 3) {
                fastenalItems.push({
                    name: '1/4"-20 Grade C Zinc Finish Steel Top Lock Nut',
                    price: '20¢',
                    image: 'Fastenal No 1137260.jpg',
                    id: 'fastenal-jam-nut'
                });
            } else
            if (i === 4) {
                fastenalItems.push({
                    name: '1/4"-28 Zinc Finish Grade A Finished Hex Nut',
                    price: '15¢',
                    image: 'Fastenal No 36152.jpg',
                    id: 'fastenal-jam-nut'
                });
            } else
            if (i === 5) {
                fastenalItems.push({
                    name: '1/4"-28 Grade C Zinc Finish Steel Top Lock Nut',
                    price: '40¢',
                    image: 'Fastenal No 1137300.jpg',
                    id: 'fastenal-jam-nut'
                });
            } else {
                fastenalItems.push({
                    name: `Fastenal Item ${i}`,
                    price: `$${(Math.random() * 50 + 5).toFixed(2)}`,
                    image: 'company-logo.png',
                    id: `fastenal-item-${i}`
                });
            }
        }
        return fastenalItems;
    }

    function getScrewsItems() {
        const screwsItems = [];
        for (let i = 1; i <= 12; i++) {
            if (i === 1) {
                screwsItems.push({
                    name: '#8 x 3/4 in.',
                    price: '1 lb = $8 444pcs and 1/2 lb = $4.50 222pcs',
                    image: 'grip-rite-wood-screws-3_4 22.jpg',
                    id: 'screws-wood-8x1-75'
                });
            } else if (i === 2) {
                screwsItems.push({
                    name: '#6 x 1 in. #2 Phillips',
                    price: '1 lb = $8 364pcs and 1/2 lb = $4.50 182pcs',
                    image: 'grip-rite-drywall-screws-1inch.jpg',
                    id: 'screws-wood-8x1-75'
                });
            } else if (i === 3) {
                screwsItems.push({
                    name: '#9 x 2-1/2 in. #2 Phillips',
                    price: '1 lb = $10 and 1/2 lb = $4',
                    image: 'grip-rite-deck-screws-2 1:2 in.jpg',
                    id: 'screws-wood-8x1-75'
                });
            } else {
                screwsItems.push({
                    name: `Screws Item ${i}`,
                    price: `$${(Math.random() * 15 + 3).toFixed(2)}`,
                    image: 'company-logo.png',
                    id: `screws-item-${i}`
                });
            }
        }
        return screwsItems;
    }

    function getDummyItems(category) {
        return [
            { name: `${category} Item 1`, price: '$19.99', image: 'company-logo.png', id: `${category.toLowerCase()}-item-1` },
            { name: `${category} Item 2`, price: '$29.99', image: 'company-logo.png', id: `${category.toLowerCase()}-item-2` },
            { name: `${category} Item 3`, price: '$39.99', image: 'company-logo.png', id: `${category.toLowerCase()}-item-3` },
        ];
    }

    function displayItems(allItems, category) {
        console.log('displayItems called with:', category, 'items:', allItems.length);
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const itemsToShow = allItems.slice(startIndex, endIndex);
        const totalPages = Math.ceil(allItems.length / itemsPerPage);

        itemsContainer.innerHTML = '';
        
        itemsToShow.forEach(item => {
            console.log('Displaying item:', item.name, 'with image:', item.image);
            const itemElement = document.createElement('div');
            itemElement.className = 'item mb-3 p-3 border rounded product-card';
            itemElement.style.cursor = 'pointer';
            itemElement.innerHTML = `
                <div class="row align-items-center">
                    <div class="col-md-3">
                    <img src="${item.image}" alt="${item.name}" class="img-fluid rounded" style="max-height: 120px; object-fit: cover;" onerror="console.log('Image failed to load:', '${item.image}'); this.src='company-logo.png';">
                    </div>
                    <div class="col-md-9">
                        <h5 class="mb-2">${item.name}</h5>
                        <p class="text-success fw-bold mb-2">${item.price}</p>
                        <button class="btn btn-primary btn-sm">View Details</button>
                    </div>
                </div>
            `;
            
            // Make entire card clickable
            itemElement.onclick = () => {
                window.location.href = `product-detail.html?id=${item.id}&name=${encodeURIComponent(item.name)}&price=${encodeURIComponent(item.price)}&image=${encodeURIComponent(item.image)}`;
            };
            
            itemsContainer.appendChild(itemElement);
        });

        // Add pagination controls if needed
        if (totalPages > 1) {
            const paginationDiv = document.createElement('div');
            paginationDiv.className = 'pagination-controls mt-4 text-center';
            
            const prevButton = document.createElement('button');
            prevButton.className = 'btn btn-outline-primary me-2';
            prevButton.textContent = 'Previous';
            prevButton.disabled = currentPage === 1;
            prevButton.onclick = () => {
                if (currentPage > 1) {
                    currentPage--;
                    loadItems(currentCategory);
                }
            };

            const pageInfo = document.createElement('span');
            pageInfo.className = 'mx-3';
            pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;

            const nextButton = document.createElement('button');
            nextButton.className = 'btn btn-outline-primary ms-2';
            nextButton.textContent = 'Next';
            nextButton.disabled = currentPage === totalPages;
            nextButton.onclick = () => {
                if (currentPage < totalPages) {
                    currentPage++;
                    loadItems(currentCategory);
                }
            };

            paginationDiv.appendChild(prevButton);
            paginationDiv.appendChild(pageInfo);
            paginationDiv.appendChild(nextButton);
            itemsContainer.appendChild(paginationDiv);
        }
    }

    // Load initial items
    loadItems('Tanks');
});

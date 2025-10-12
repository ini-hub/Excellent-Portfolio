const ITEMS_PER_PAGE = 3; // Must be kept consistent with the Astro component

// Global map to store the current page index for each tab: { 'tab-id': pageIndex }
let currentPage = {}; 
let container;
let tabButtons;
let tabContents;

// --- CORE LOGIC FUNCTIONS ---

function renderPagination(tabContent) {
    const tabId = tabContent.id;
    const items = tabContent.querySelectorAll('.page-item');
    const totalItems = items.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    
    if (totalPages <= 1) return;

    const controlsContainer = tabContent.querySelector('[data-pagination-controls]');
    if (!controlsContainer) return;

    controlsContainer.innerHTML = ''; 
    const activePageIndex = currentPage[tabId] || 0; 

    for (let i = 0; i < totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i + 1;
        button.setAttribute('data-page', i);
        button.className = `
            px-4 py-2 rounded-full font-semibold transition duration-200
            ${i === activePageIndex ? 'bg-yellow-accent text-deep-blue' : 'bg-gray-700 text-white hover:bg-gray-600'}
        `;
        button.addEventListener('click', () => {
            goToPage(tabId, i);
        });
        controlsContainer.appendChild(button);
    }
}

function goToPage(tabId, pageIndex) {
    // container is globally available after initialization
    if (!container) return;

    currentPage[tabId] = pageIndex;
    const tabContent = container.querySelector(`#${tabId}`);
    if (!tabContent) return;

    const items = tabContent.querySelectorAll('.page-item');
    
    // 1. Show/Hide items based on pageIndex
    items.forEach(item => {
        const itemPageIndex = parseInt(item.getAttribute('data-page-index'));
        if (itemPageIndex === pageIndex) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
    
    // 2. Re-render pagination controls to highlight the new active page
    renderPagination(tabContent);
    
    // 3. Scroll to the top of the content section
    tabContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function switchTab(targetId) {
    // tabContents and tabButtons are globally available after initialization
    if (!tabContents || !tabButtons) return;

    tabContents.forEach(content => {
        content.classList.add('hidden');
        content.classList.remove('block');
    });
    tabButtons.forEach(button => {
        button.classList.remove('text-yellow-accent', 'border-b-2', 'border-yellow-accent');
        button.classList.add('text-gray-300');
    });

    const activeContent = container.querySelector(`#${targetId}`);
    if (activeContent) {
        activeContent.classList.remove('hidden');
        activeContent.classList.add('block');
        
        // Initialize or re-render pagination for the new active tab
        const initialPageIndex = currentPage[targetId] || 0;
        goToPage(targetId, initialPageIndex);
    }
    
    // Note: Use data-target to find the active link
    const activeLink = container.querySelector(`a[data-target="${targetId}"]`);
    if (activeLink) {
        activeLink.classList.add('text-yellow-accent', 'border-b-2', 'border-yellow-accent');
        activeLink.classList.remove('text-gray-300');
    }
}


// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    container = document.getElementById('visuals-tab-container');
    if (!container) return;

    tabButtons = container.querySelectorAll('.tab-button');
    tabContents = container.querySelectorAll('[data-tab-content]');
    
    // --- FIX: Execute initial pagination immediately for the active tab ---
    const initialActiveContent = container.querySelector('.tab-content.block');
    
    if (initialActiveContent) {
        const initialId = initialActiveContent.id;
        
        // FIX: This call ensures only the first 3 items are visible immediately on load
        // It relies on the component setting the 'block' class initially.
        goToPage(initialId, 0); 
    }


    // Add event listeners to all tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); 
            const targetId = button.getAttribute('data-target'); 

            // window.scrollTo is optional here, depending on final desired UX
            // window.scrollTo({ top: 0, behavior: 'smooth' }); 
            
            switchTab(targetId);
        });
    });

    // We no longer need the complex initialization block that relied on Astro variables, 
    // as the logic for the initial active tab is now handled by finding the '.block' class and calling goToPage(0).
});
export function initTabs() {
    const $tabs = document.querySelectorAll('[data-tab-title]');

    if (document.querySelector('.c-tabs')) {
        $tabs.forEach(tab => {
            tab.addEventListener('click', function(e) {
                e.preventDefault();

                const activeTab = document.querySelector('[data-tab-title].active');
                const activeContent = document.querySelector('[data-tab-content].active');
                const id = tab.getAttribute('data-tab');
        
                if (activeTab) {
                    activeTab.classList.remove('active');
                    activeContent.classList.remove('active');
                }
                const content = document.querySelector('[data-tab-content][data-tab="'+id+'"]');
                
                tab.classList.add('active');
                content.classList.add('active');
            })
        })
    }
}
initTabs();
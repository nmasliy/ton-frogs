window.addEventListener('DOMContentLoaded', function () {
	function initMenu() {
		const $html = document.querySelector('html')
		const $headerMenu = document.querySelector('.menu')
		const $headerBtn = document.querySelector('.header__burger')
		const $headerCloseBtn = document.querySelector('.menu__close')

		let isInit = false

		const checkScreenWidth = () => {
			const MOBILE_MENU_BREAKPOINT = 1024
			// Активируем меню только на экранах <= 1024
			if (window.innerWidth <= MOBILE_MENU_BREAKPOINT && !isInit) {
				isInit = true
				$headerBtn.addEventListener('click', openMenu)
				$headerCloseBtn.addEventListener('click', closeMenu)
				$headerMenu.addEventListener('click', function (e) {
					if (e.target.closest('.menu__navigation a')) closeMenu()
				})
			} else {
				window.addEventListener('resize', checkScreenWidth)
			}
		}

		checkScreenWidth()

		function openMenu() {
			$headerMenu.classList.add('active')
			$html.classList.add('overflow-hidden')
		}

		function closeMenu() {
			$headerMenu.classList.remove('active')
			$html.classList.remove('overflow-hidden')
		}
	}
	
	function initTabs() {
		const $tabs = document.querySelectorAll('[data-tab-title]')

		if (document.querySelector('.tabs')) {
			$tabs.forEach(tab => {
				tab.addEventListener('click', function (e) {
					e.preventDefault()

					const activeTab = document.querySelector('[data-tab-title].active')
					const activeContent = document.querySelector(
						'[data-tab-content].active'
					)
					const id = tab.getAttribute('data-tab')

					if (activeTab) {
						activeTab.classList.remove('active')
						activeContent.classList.remove('active')
					}
					const content = document.querySelector(
						'[data-tab-content][data-tab="' + id + '"]'
					)

					tab.classList.add('active')
					content.classList.add('active')
				})
			})
		}
	}

	initMenu()
	initTabs()
})

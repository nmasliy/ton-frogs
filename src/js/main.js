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

	function initSliders() {
		const $partnersSlider = document.querySelector('.partners__slider')

		if (window.innerWidth <= 700 && $partnersSlider) {
			const $partnersWrapper = $partnersSlider.querySelector('.partners__list')
			const $partnersItems = $partnersSlider.querySelectorAll('.partners__item')

			$partnersSlider.classList.add('swiper')
			$partnersWrapper.classList.add('swiper-wrapper')

			$partnersItems.forEach(item => {
				item.classList.add('swiper-slide')
			})

			const partnersSlider = new Swiper('.partners__slider', {
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
				spaceBetween: 30,
			})
		}

		const $teamSlider = document.querySelector('.team__slider')

		if (window.innerWidth <= 700 && $teamSlider) {
			const $teamWrapper = $teamSlider.querySelector('.team__list')
			const $teamItems = $teamSlider.querySelectorAll('.team__item')

			$teamSlider.classList.add('swiper')
			$teamWrapper.classList.add('swiper-wrapper')

			$teamItems.forEach(item => {
				item.classList.add('swiper-slide')
			})

			const teamSlider = new Swiper('.team__slider', {
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
				spaceBetween: 30,
			})
		}
	}

	function initTheme() {
		const $themeBtn = document.querySelector('.header__theme-btn')

		$themeBtn.addEventListener('click', function() {
			document.body.classList.toggle('black-theme')
		})

	}

	initMenu()
	initTabs()
	initSliders()
	initTheme()
})

class FAQs extends HTMLElement {
	constructor() {
		super();

		this.selectors = {
			questionTitle: '.faq-question__title',
		};

		this.classes = {
			questionOpen: 'faq__question--open',
		};

		this.initEvents();
	}

	initEvents() {
		document.querySelectorAll(this.selectors.questionTitle).forEach((question) => {
			question.addEventListener('click', () => {
				this.toggleQuestion(question);
			});
		});
	}

	toggleQuestion(question) {
		question.parentElement.classList.toggle(this.classes.questionOpen);
	}
}

class ProductComparison extends HTMLElement {
	constructor() {
		super();

		this.selectors = {
			dynamicHeightBestFor: '.comparison-product__dynamic-height--best-for',
			dynamicHeightWarranty: '.comparison-product__dynamic-height--warranty',
		};

		this.initComponent();
	}

	initComponent() {
		this.adjustHeight(this.selectors.dynamicHeightBestFor);
		this.adjustHeight(this.selectors.dynamicHeightWarranty);
	}

	adjustHeight(currentSelector) {
		let maxHeight = 0;

		document.querySelectorAll(currentSelector).forEach((item) => {
			maxHeight = item.clientHeight > maxHeight ? item.clientHeight : maxHeight;
		});

		document.querySelectorAll(currentSelector).forEach((item) => {
			item.style.height = `${maxHeight}px`;
		});
	}
}

customElements.define('faq-container', FAQs);
customElements.define('product-comparison', ProductComparison);

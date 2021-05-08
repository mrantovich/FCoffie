const swiper = new Swiper('.swiper-first', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

const comboSwiper = new Swiper('.swiper-second', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

const coffeesSection = document.getElementById('coffees');
const coffeesLink = document.querySelector('.side__menu-link-coffees');
coffeesLink.addEventListener('click', scrollToCoffees);

function scrollToCoffees() {
	coffeesSection.scrollIntoView({
		behavior: 'smooth',
	});
};

const chooseSection = document.getElementById('choose');
const chooseLink = document.querySelector('.side__menu-link-choose');
chooseLink.addEventListener('click', scrollToChoose);

function scrollToChoose() {
	chooseSection.scrollIntoView({
		behavior: 'smooth',
	});
};

const comboSection = document.getElementById('combo');
const comboLink = document.querySelector('.side__menu-link-combo');
comboLink.addEventListener('click', scrollToCombo);

function scrollToCombo() {
	comboSection.scrollIntoView({
		behavior: 'smooth',
	});
};

const giftsetSection = document.getElementById('giftset');
const giftsetLink = document.querySelector('.side__menu-link-giftset');
giftsetLink.addEventListener('click', scrollToGiftset);

function scrollToGiftset() {
	giftsetSection.scrollIntoView({
		behavior: 'smooth',
	});
};

document.getElementById('defaultOpen').click();	

function openTab(event, tabName) {
	let i, tabscontent, tabsitem;

	tabscontent = document.getElementsByClassName('tabs__content');
	for (i = 0; i < tabscontent.length; i++) {
		tabscontent[i].style.display = 'none';
	};

	tabsitem = document.getElementsByClassName('tabs__item');
	for (i = 0; i < tabsitem.length; i++) {
		tabsitem[i].className = tabsitem[i].className.replace(' _active', '');
	};

	document.getElementById(tabName).style.display = 'block';
	event.currentTarget.className += ' _active';
};

let counter = 0;

const buttonsBox = document.querySelectorAll('.buttons__general_act');

for (i = 0; i < buttonsBox.length; i++) {
	buttonsBox[i].addEventListener('click', showCounter);
};

const counterEl = document.querySelector('.side__cart-counter');

function showCounter() {
	counter++;
	counterEl.innerHTML = counter;
	counterEl.style.display = 'flex';
}
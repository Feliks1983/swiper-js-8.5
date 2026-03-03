const swiperGroupReadmore = document.querySelector('.swiper__readmore');
const swiperGroupReadmoreText = document.querySelector('.swiper__readmore__text');

const swiperCopy = document.querySelectorAll('.swiper-wrapper');
const swiperGroups = document.querySelector('.swiper-groups');
const swiperGroupCardGo = document.querySelectorAll(".swiper-slide__img");

swiperGroupReadmore.addEventListener('click', function () {
  if (swiperGroups.style.display === 'block') {
    swiperGroups.style.display = 'none';
    swiperGroupReadmoreText.innerHTML = 'Показать';
  } else {
    swiperGroups.style.display = 'block';
    swiperGroupReadmoreText.innerHTML = 'Скрыть';
  }
});

const swiper = new Swiper(".swiper-groups", {
	slidesPerView: "auto",
	spaceBetween: 1,
	freeMode: true,
  simulateTouch: false,

	pagination: {
		el: ".swiper__paginators",
		clickable: true,
		type: "bullets",
	},
});

let mySwiper = null;





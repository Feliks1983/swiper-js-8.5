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

document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll(".swiper-wrapper");

  function updateImages() {
    let width = window.innerWidth;
    let visibleCount = 0;

    if (width >= 1120) {
      visibleCount = 11;
    } else if (width >= 768) {
      visibleCount = 6;
    } else if (width >= 320) {
      visibleCount = 2;
    }

    images.forEach((img, index) => {
      if (index < visibleCount) {
        img.parentElement.style.display = 'block';
      } else {
        img.parentElement.style.display = 'none';
      }
    });
  }

  updateImages();
  window.addEventListener('resize', updateImages);
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





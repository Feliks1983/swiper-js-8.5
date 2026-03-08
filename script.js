const readmore = document.querySelector('.readmore');
const cardsNone = document.querySelector(".card-none");
const readmoreText = document.querySelector('.readmore__text');

readmore.addEventListener('click', function () {
  if (cardsNone.style.display === "block") {
		cardsNone.style.display = "none";
		readmoreText.innerHTML = "Показать";
	} else {
		cardsNone.style.display = "block";
		readmoreText.innerHTML = "Скрыть";
	}
});

const swiper = new Swiper(".swiper", {

	slidesPerView: "auto",
	spaceBetween: 1,

	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		type: "bullets",
	},
});



const readmore = document.querySelector(".readmore-remove");
const cardsGroup = document.querySelector(".cards-none__block");
const readmoreText = document.querySelector(".readmore__text");

readmore.addEventListener("click", function () {
	if (cardsGroup.style.display === "block") {
		cardsGroup.style.display = "none";
		readmoreText.innerHTML = "Показать";
	} else {
		cardsGroup.style.display = "block";
		readmoreText.innerHTML = "Скрыть";
	}
});

const swiper = new Swiper(".swiper", {
	slidesPerView: 2,
	spaceBetween: 16,

	pagination: {
		el: ".swiper-pagina",
		clickable: true,
		type: "bullets",
	},
});


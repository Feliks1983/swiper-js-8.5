const readmore = document.querySelector(".readmore-remove");
const cardsGroup = document.querySelector(".cards-group");
const cardItems = document.querySelectorAll(".cards-item");
const readmoreText = document.querySelector(".readmore__text");

readmore.addEventListener("click", function () {
	toggleLastThree();
});

function toggleLastThree() {
	for (let i = 8; i < cardItems.length; i++) {
		const item = cardItems[i];
		console.log(item);
		if (item.style.display === "block") {
			item.style.display = "none";
			console.log(item);
			readmoreText.innerHTML = "Показать все";
		} else {
			item.style.display = "block";
			console.log(item);
			readmoreText.innerHTML = "Скрыть";
		}
	}
}

function checkWidthOnLoad() {
	if (window.innerWidth < 1120) {
		for (let i = 8; i < cardItems.length; i++) {
			cardItems[i].style.display = "none";
		}
		readmoreText.textContent = "Показать все";
	} else {
		readmore.style.display = "block"; 
}
	if (window.innerWidth > 1120) {
		for (let i = 8; i < cardItems.length; i++) {
			cardItems[i].style.display = "block";
		}
		readmoreText.textContent = "Скрыть";
	} else {
		readmore.style.display = "block";
	}
}

checkWidthOnLoad();
window.addEventListener("resize", checkWidthOnLoad);

const swiper = new Swiper(".cards-group", {
	slidesPerView: 2,
	spaceBetween: 16,

	pagination: {
		el: ".swiper-pagina",
		clickable: true,
		type: "bullets",
	},

	breakpoints: {
		320: {
			enabled: true,
		},
		768: {
			enabled: false,
		},
		1120: {
			enabled: false,
		},
	},
});

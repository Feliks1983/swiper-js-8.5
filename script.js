const readmore = document.querySelector(".readmore-remove");
const cardsGroup = document.querySelector(".cards-group");
const cardItems = document.querySelectorAll(".cards-item");
const readmoreText = document.querySelector(".readmore__text");
const cardItems9 = document.querySelectorAll(".cards-item:nth-child(n + 9)");
const cardItems7 = document.querySelectorAll(".cards-item:nth-child(n + 7)");

// Функция для переключения видимости элементов
function toggleCards(items, show) {
	items.forEach((item) => {
		item.style.display = show ? "block" : "none";
	});
}

function handleReadMore() {
	// Определяем, какие именно карточки мы сейчас контролируем в зависимости от ширины
	const isMobile = window.innerWidth < 1120;
	const targetItems = document.querySelectorAll(
		isMobile ? ".cards-item:nth-child(n + 7)" : ".cards-item:nth-child(n + 9)",
	);

	// Проверяем текущее состояние по первому элементу в списке
	const isHidden = targetItems[0].style.display === "none";

	if (isHidden) {
		toggleCards(targetItems, true);
		readmoreText.innerHTML = "Скрыть";
	} else {
		toggleCards(targetItems, false);
		readmoreText.innerHTML = "Показать все";
	}
}

function setupView() {
	const isMobile = window.innerWidth < 1120;
	const items7 = document.querySelectorAll(".cards-item:nth-child(n + 7)");
	const items9 = document.querySelectorAll(".cards-item:nth-child(n + 9)");

	// Сбрасываем всё в исходное состояние (показываем все)
	document
		.querySelectorAll(".cards-item")
		.forEach((el) => (el.style.display = "block"));

	// Скрываем нужные в зависимости от экрана
	if (isMobile) {
		toggleCards(items7, false);
	} else {
		toggleCards(items9, false);
	}
	readmoreText.innerHTML = "Показать все";
}

// Слушатели событий
readmore.addEventListener("click", handleReadMore);
window.addEventListener("resize", setupView);

// Инициализация при загрузке
setupView();

const swiper = new Swiper(".cards-swiper", {
	slidesPerView: 'auto',
	spaceBetween: 16,

	pagination: {
		el: ".cards-paginat",
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

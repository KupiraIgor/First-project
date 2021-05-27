const iconMenu = document.querySelector(".menu__icon");
if (iconMenu) {
	const menu__body = document.querySelector(".menu__body");
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle("lock");
		iconMenu.classList.toggle("active");
		menu__body.classList.toggle("active");
	})
}
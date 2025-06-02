const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navlinks");
const closeBtn = document.getElementById("closeBtn");

hamburger.addEventListener("click", () => {
	navLinks.classList.add("active");
});

closeBtn.addEventListener("click", () => {
	navLinks.classList.remove("active");
});

document.querySelectorAll(".scroll-link").forEach((link) => {
	link.addEventListener("click", function (e) {
		e.preventDefault();
		const target = document.querySelector(this.getAttribute("href"));
		if (target) {
			target.scrollIntoView({ behavior: "smooth" });
			navLinks.classList.remove("active");
		}
	});
});

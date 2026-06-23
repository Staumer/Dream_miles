// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Example: Show an alert when the recommendation button is clicked
const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", () => {
    alert("Your Dream Miles recommendations are being imagined!");
  });
}

// Example: Smooth scroll for internal links (if you add a nav later)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});


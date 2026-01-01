document.addEventListener("DOMContentLoaded", function () {

  const openBtn = document.getElementById("openBtn");
  const lockScreen = document.getElementById("lockScreen");
  const content = document.getElementById("content");
  const passwordInput = document.getElementById("passwordInput");
  const error = document.getElementById("error");

  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.getElementById("nextBtn");

  let index = 0;

  // OPEN BUTTON CLICK
  openBtn.addEventListener("click", function () {
    if (passwordInput.value === "MadamJi❤️") {
      lockScreen.style.display = "none";
      content.classList.remove("hidden");
    } else {
      error.innerText = "Sirf aapke liye hai 🤍";
    }
  });

  // NEXT BUTTON CLICK
  nextBtn.addEventListener("click", function () {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  });

});

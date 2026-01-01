// WAIT FOR PAGE TO LOAD
window.addEventListener("DOMContentLoaded", function () {

  const lockScreen = document.getElementById("lockScreen");
  const content = document.getElementById("content");
  const error = document.getElementById("error");
  const passwordInput = document.getElementById("passwordInput");

  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.getElementById("nextBtn");

  let index = 0;

  // PASSWORD UNLOCK
  window.unlock = function () {
    if (passwordInput.value === "MadamJi❤️") {
      lockScreen.style.display = "none";
      content.classList.remove("hidden");
    } else {
      error.innerText = "Sirf aapke liye hai 🤍";
    }
  };

  // NEXT BUTTON
  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      slides[index].classList.remove("active");
      index = (index + 1) % slides.length;
      slides[index].classList.add("active");
    });
  }

});

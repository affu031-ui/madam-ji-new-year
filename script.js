const slides = document.querySelectorAll(".slide");
let index = 0;

const slides = document.querySelectorAll(".slide");
let index = 0;

document.getElementById("nextBtn").onclick = () => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
};

function unlock() {
  const pass = document.getElementById("passwordInput").value;
  if (pass === "MadamJi❤️") {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("content").classList.remove("hidden");
  } else {
    document.getElementById("error").innerText = "Sirf aapke liye hai 🤍";
  }
}

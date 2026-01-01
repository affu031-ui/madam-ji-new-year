const slides = document.querySelectorAll(".slide");
let index = 0;

// Auto slide every 5 seconds
setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 5000);

function unlock() {
  const pass = document.getElementById("passwordInput").value;
  if (pass === "MadamJi❤️") {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("content").classList.remove("hidden");
    document.getElementById("bgMusic").play();
  } else {
    document.getElementById("error").innerText = "Sirf aapke liye hai 🤍";
  }
}

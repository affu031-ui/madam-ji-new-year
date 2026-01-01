const slides = document.querySelectorAll(".slide");
let index = 0;

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

    const audio = document.getElementById("bgMusic");
    audio.src = "music.mp3";

    document.getElementById("tapToPlay").onclick = () => {
      audio.play();
      document.getElementById("tapToPlay").style.display = "none";
    };

  } else {
    document.getElementById("error").innerText = "Sirf aapke liye hai 🤍";
  }
}

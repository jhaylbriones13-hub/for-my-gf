const openBtn = document.getElementById("openBtn");
const letter = document.getElementById("letter");
const hero = document.querySelector(".hero");

openBtn.onclick = () => {
  hero.style.display = "none";
  letter.style.display = "block";
};

// ❤️ Falling Hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 3) + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 300);

// ❤️ Love Timer
const startDate = new Date("June 22, 2026 00:00:00");

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    if (diff < 0) {
        document.getElementById("timer").innerHTML =
            "Starts on June 22, 2026 ❤️";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("timer").innerHTML = `
        ❤️ Since: June 22, 2026 <br><br>
        ${days} Days ❤️<br>
        ${hours} Hours ❤️<br>
        ${minutes} Minutes ❤️<br>
        ${seconds} Seconds ❤️
    `;
}

updateTimer();
setInterval(updateTimer, 1000);
// ❤️ Final Button
document.getElementById("love").onclick = function () {
    alert("Happy 1st Monthsary, Bebu! ❤️\n\nI Love You Forever! 💖");
};

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.onclick = function () {
    music.play();
};

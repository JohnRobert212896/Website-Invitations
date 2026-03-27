// COUNTDOWN TIMER
const eventDate = new Date("December 25, 2026 18:00:00").getTime();

const countdownFunction = setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days < 10 ? "0" + days : days;
  document.getElementById("hours").textContent = hours < 10 ? "0" + hours : hours;
  document.getElementById("minutes").textContent = minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds").textContent = seconds < 10 ? "0" + seconds : seconds;

  if (distance < 0) {
    clearInterval(countdownFunction);
    document.querySelector(".countdown").innerHTML = "<h2>The Event Has Started! 🎉</h2>";
  }
}, 1000);

// RSVP FORM
const rsvpForm = document.getElementById("rsvpForm");
const rsvpMessage = document.getElementById("rsvpMessage");

rsvpForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const attendance = document.getElementById("attendance").value;

  rsvpMessage.textContent = `Thank you, ${name}! Your RSVP has been submitted: ${attendance}`;
  rsvpForm.reset();
});

// MUSIC BUTTON
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

let isPlaying = false;

musicBtn.addEventListener("click", () => {
  if (!isPlaying) {
    bgMusic.play();
    musicBtn.textContent = "⏸ Pause Music";
    isPlaying = true;
  } else {
    bgMusic.pause();
    musicBtn.textContent = "🎵 Play Music";
    isPlaying = false;
  }
});
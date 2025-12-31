const digitalClockText = document.querySelector(".digital-clock__text");

function updateTime() {
  const now = new Date();
  let hours = now.getHours().toString().padStart(2, "0");
  let min = now.getMinutes().toString().padStart(2, "0");
  let sec = now.getSeconds().toString().padStart(2, "0");
  let time = `${hours}:${min}:${sec}`;
  digitalClockText.textContent = time;
  setTimeout(updateTime, 1000);
}

updateTime();

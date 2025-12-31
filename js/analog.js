function updateTimeAnalog() {
  const now = new Date();
  let hours = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();
  console.log(sec);
  document.querySelector(".hours").style.transform = `rotateZ(${(min * 360) / 60}deg)`;
  document.querySelector(".min").style.transform = `rotateZ(${(min * 360) / 60}deg)`;
  document.querySelector(".sec").style.transform = `rotateZ(${(sec * 360) / 60}deg)`;
  setTimeout(updateTimeAnalog, 1000);
}
updateTimeAnalog();

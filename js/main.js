const settingBTN = document.querySelector(".setting__btn");
const settingClockSection = document.querySelector(".setting__clock");
const settingClockBgLayer = document.querySelector(".setting__clock-bg");

settingBTN.addEventListener("click", () => {
  settingClockSection.style.display = "block";
});
settingClockBgLayer.addEventListener("click", () => {
  settingClockSection.style.display = "none";
});

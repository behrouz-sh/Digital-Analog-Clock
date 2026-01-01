const settingBTN = document.querySelector(".setting__btn");
const settingClockSection = document.querySelector(".setting__clock");
const settingClockBgLayer = document.querySelector(".setting__clock-bg");

settingBTN.addEventListener("click", () => {
  settingClockSection.style.display = "block";
});

settingClockBgLayer.addEventListener("click", () => {
  settingClockSection.style.display = "none";
});

const clockTypeDigital = document.getElementById("clock-type__digital");
const digitalClockSection = document.querySelector(".digital-clock");
const clockTypeAnalog = document.getElementById("clock-type__analog");
const analogClockSection = document.querySelector(".analog-clock");

function restType() {
  clockTypeDigital.classList.remove("clock-type__digital-analog--active");
  clockTypeAnalog.classList.remove("clock-type__digital-analog--active");
  settingClockSection.style.display = "none";
}

clockTypeDigital.addEventListener("click", () => {
  restType();
  digitalClockSection.style.display = "flex";
  analogClockSection.style.display = "none";

  clockTypeDigital.classList.toggle("clock-type__digital-analog--active");
});

clockTypeAnalog.addEventListener("click", () => {
  restType();
  analogClockSection.style.display = "flex";
  digitalClockSection.style.display = "none";

  clockTypeAnalog.classList.toggle("clock-type__digital-analog--active");
});

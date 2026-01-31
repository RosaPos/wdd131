const yearSpan = document.querySelector("#currentyear");
const modifiedSpan = document.querySelector("#lastModified");

yearSpan.textContent = new Date().getFullYear();
modifiedSpan.textContent = document.lastModified;

function calculateWindChill(temp, speed) { return 13.12 + 0.6215 * temp - 11.37 * (speed ** 0.16) + 0.3965 * temp * (speed ** 0.16); }

const temp = parseFloat(document.querySelector("#temperature").textContent);
const speed = parseFloat(document.querySelector("#windspeed").textContent);
const windChillSpan = document.querySelector("#windchill");

if (temp <= 10 && speed > 4.8) {
    windChillSpan.textContent = calculateWindChill(temp, speed).toFixed(1);
} else {
    windChillSpan.textContent = "N/A";
}

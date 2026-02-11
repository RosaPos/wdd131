// Array
const products = [
    { id: "fc-1888", name: "Flux Capacitor" },
    { id: "fc-2050", name: "Power Laces" },
    { id: "fs-1987", name: "Time Circuits" },
    { id: "ac-2000", name: "Low Voltage Reactor" }
];

const STORAGE_KEY = "reviewCount";

// form.html
const select = document.querySelector("#product");
if (select) {
    products.forEach((product) => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        select.appendChild(option);
    });
}

// review.html
const countSpan = document.querySelector("#reviewCount");
if (countSpan) {
    let count = Number(localStorage.getItem(STORAGE_KEY)) || 0;
    count++;
    localStorage.setItem(STORAGE_KEY, count);
    countSpan.textContent = count;
}

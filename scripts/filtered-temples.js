// Footer dynamic dates
const yearSpan = document.querySelector("#currentyear");
const modifiedSpan = document.querySelector("#lastmodified");

yearSpan.textContent = new Date().getFullYear();
modifiedSpan.textContent = document.lastModified;

// Hamburger menu
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");

    const isOpen = menuButton.classList.contains("open");
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

// Temples array
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Tampico Mexico Temple",
        location: "Tamaulipas, Mexico",
        dedicated: "2000, May, 20",
        area: 10700,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/_temp/083-Tampico-Mexico-Temple.jpg"
    },
    {
        templeName: "Veracruz Mexico Temple",
        location: "Veracruz, Mexico",
        dedicated: "2000, July, 9",
        area: 10700,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/veracruz-mexico-temple/veracruz-mexico-temple-1951-main.jpg"
    },
    {
        templeName: "Puebla Mexico Temple",
        location: "Puebla, Mexico",
        dedicated: "2024, May, 19",
        area: 7002,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/puebla-mexico-temple/puebla-mexico-temple-46342-main.jpg"
    }
];

const templesElement = document.querySelector("#temples");

function createTempleCard(temple) {
    const card = document.createElement("section");
    card.classList.add("temple-card");

    const name = document.createElement("h2");
    name.textContent = temple.templeName;

    const location = document.createElement("p");
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;

    const dedicated = document.createElement("p");
    dedicated.innerHTML = `<span class="label">Dedicated:</span> ${new Date(temple.dedicated).toLocaleDateString()}`;

    const area = document.createElement("p");
    area.innerHTML = `<span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft`;

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = `${temple.templeName} Temple`;
    img.loading = "lazy";
    img.width = 400;
    img.height = 250;

    card.append(name, location, dedicated, area, img);
    return card;
}

function displayTemples(list) {
    templesElement.innerHTML = "";
    list.forEach((temple) => {
        templesElement.appendChild(createTempleCard(temple));
    });
}

// Initial display
displayTemples(temples);

// Filters
function filterOld() {
    displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900));
}

function filterNew() {
    displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000));
}

function filterLarge() {
    displayTemples(temples.filter(t => t.area > 90000));
}

function filterSmall() {
    displayTemples(temples.filter(t => t.area < 10000));
}

function showHome() {
    displayTemples(temples);
}

// Button events
document.querySelector("#home").addEventListener("click", showHome);
document.querySelector("#old").addEventListener("click", filterOld);
document.querySelector("#new").addEventListener("click", filterNew);
document.querySelector("#large").addEventListener("click", filterLarge);
document.querySelector("#small").addEventListener("click", filterSmall);

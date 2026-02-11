const input = document.querySelector("#favchap");
const addButton = document.querySelector("#addChapter");
const list = document.querySelector("#list");
const STORAGE_KEY = "bomChapters";

let chaptersArray = getChapterList() || [];

chaptersArray.forEach((chapter) => displayList(chapter));

addButton.addEventListener("click", () => {
    const chapter = input.value.trim();
    if (chapter === "") return;

    displayList(chapter);

    chaptersArray.push(chapter);
    setChapterList();

    input.value = "";
    input.focus();
});

function displayList(item) {
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");

    li.textContent = item;

    deleteBtn.textContent = "❌";
    deleteBtn.classList.add("delete");
    deleteBtn.setAttribute("aria-label", `Remove ${item}`);

    deleteBtn.addEventListener("click", () => {
        li.remove();
        deleteChapter(item);
        input.focus();
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);
}

function setChapterList() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(chaptersArray));
}

function getChapterList() {
    const storedValue = localStorage.getItem(STORAGE_KEY);
    return storedValue ? JSON.parse(storedValue) : null;
}

function deleteChapter(chapter) {
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}

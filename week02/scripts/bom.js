const input = document.querySelector("#favchap");
const addButton = document.querySelector("#addChapter");
const list = document.querySelector("#list");

addButton.addEventListener("click", () => {
    const chapter = input.value.trim();

    if (chapter === "") {
        input.focus();
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = chapter;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.classList.add("delete");
    deleteButton.setAttribute("aria-label", `Remove ${chapter}`);

    li.append(span, deleteButton);
    list.append(li);

    input.value = "";
    input.focus();
});

list.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        const li = e.target.closest("li");
        if (li) li.remove();
        input.focus();
    }
});

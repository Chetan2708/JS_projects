const addBtn = document.getElementById("add");

// Retrieve notes from localStorage and parse them into an array
const notes = JSON.parse(localStorage.getItem("notes"));

// If notes exist, iterate through each note and add it to the page
if (notes) {
    notes.forEach((note) => {
        addNewNote(note);
    });
}

// Add event listener to the add button
addBtn.addEventListener("click", () => {
    addNewNote();
});

// Function to add a new note
function addNewNote(text = "") {
    const note = document.createElement("div");
    note.classList.add("note");
    
    // Create the HTML structure for a note
    note.innerHTML = `
        <div class="notes">
            <div class="tools">
                <button class="edit"><i class="fas fa-edit"></i></button>
                <button class="delete"><i class="fas fa-trash-alt"></i></button>
            </div>
            <div class="main ${text ? "" : "hidden"}"></div>
            <textarea class="${text ? "hidden" : ""}"></textarea>
        </div>
    `;

    // Get references to various elements within the note
    const editBtn = note.querySelector(".edit");
    const deleteBtn = note.querySelector(".delete");
    const main = note.querySelector(".main");
    const textArea = note.querySelector("textarea");

    // Set initial values and content for the note
    textArea.value = text;
    main.innerHTML = marked(text);

    // Toggle between showing the main content and the textarea for editing
    editBtn.addEventListener("click", () => {
        main.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
    });

    // Delete the note when the delete button is clicked
    deleteBtn.addEventListener("click", () => {
        note.remove();
        updateLS();
    });

    // Update the note's content and save it to localStorage when the textarea is edited
    textArea.addEventListener("input", (e) => {
        const { value } = e.target;
        main.innerHTML = marked(value);
        updateLS();
    });

    // Append the note to the body of the document
    document.body.appendChild(note);
}

// Function to update the notes in localStorage
function updateLS() {
    const notesText = document.querySelectorAll("textarea");

    const notes = [];

    // Iterate through each textarea and store its value in the notes array
    notesText.forEach((note) => {
        notes.push(note.value);
    });

    // Store the notes array in localStorage as a JSON string
    localStorage.setItem("notes", JSON.stringify(notes));
}

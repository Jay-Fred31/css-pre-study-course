


const buttons = document.getElementById("buttons")
buttons.addEventListener("click", mynote);

function numberofnotes() {
let notes = document.getElementsByTagName("article");
document.getElementById("demo").innerHTML = "You have " + notes.length + " notes";
document.getElementById("demo").style.textAlign = "center";
}

numberofnotes();

let allnotes = document.getElementById("main-div");

function mynote() {
    console.log("button hit");
    let heading = document.createElement("h2");
    let text = prompt("Enter next note date and note title");
   

    let note = document.createElement("p");
    let text2 = prompt("Enter your note");

    if((text !== null && text2 !== null) && (text !== '' && text2 !== '')) {
        heading.innerHTML = text;
        note.innerHTML = text2;

        let article = document.createElement("article");
        article.appendChild(heading);
        article.appendChild(note);

        let allnotes = document.getElementById("main-div");
        allnotes.insertBefore(article, allnotes.childNodes[0]);
        numberofnotes();
    }
}












 




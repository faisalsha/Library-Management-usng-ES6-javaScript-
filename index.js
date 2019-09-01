console.log("hello")
    //constructor
function Book(name, author, title) {
    this.name = name;
    this.author = author;
    this.title = title;

}

//display constructo

function Display() {

}

// Add methods to display prototype
Display.prototype.add = function(book) {
    console.log("adding")
    tableBody = document.getElementById('tableBody');
    let uiString = ` <tr>

                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.title}</td>
                    </tr> `;
    tableBody.innerHTML += uiString;
}

Display.prototype.clear = function() {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

Display.prototype.validate = function(book) {
    if (book.name.length < 3 || book.author.length < 3) {
        return false;
    } else {
        return true;
    }


}

Display.prototype.show = function(type, displaymessage) {

    let message = document.getElementById('message');
    message.innerHTML = `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                        <strong>Message:</strong> ${displaymessage}
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                </div> `

    setTimeout(function() {
        message.innerHTML = ''
    }, 3000);

}

//add submit Event Listner to form to libraryForm
let libraryForm = document.getElementById('libraryForm')
libraryForm.addEventListener('submit', libraryFormSubmit)


function libraryFormSubmit(e) {



    console.log("submitted")
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');


    if (fiction.checked) {
        type = fiction.value;
    } else if (programming.checked) {
        type = programming.value;

    } else if (cooking.checked) {
        type = cooking.value;


    }

    let book = new Book(name, author, type);
    console.log(book)
    let display = new Display()
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', ' your book has been succesfully added.');

    } else {
        display.show('danger', ' sorry you cannot add this book.');
    }




    e.preventDefault();







}
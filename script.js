const myLibrary = [];

function Book(name,amount) {
  this.name = name;
  this.amount = amount;
}

function addBookToLibrary(name, amount) {
  let newBoowk = new Book(name,amount);
  myLibrary.push(newBoowk);
}
//-------------------------------------------------
const bodyElement = document.querySelector("body");
const botonElement = document.querySelector("#agregar");
const inputName = document.querySelector("#nameid");
const inputNumber = document.querySelector("#numberid");


botonElement.addEventListener("click",function()

{

  let card = document.createElement("div");
  card.classList.add("card");
  card.id = crypto.randomUUID();
  card.innerText = inputName.value;
  inputName.value = "";



bodyElement.appendChild(card);



});






console.log(myLibrary);
addBookToLibrary("uno",2);
console.log(myLibrary);
addBookToLibrary("dos",3);
console.log(myLibrary);
addBookToLibrary("cuatro",5);
console.log(myLibrary);
addBookToLibrary("tres",234);
console.log(myLibrary);
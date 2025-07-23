let myLibrary = [];

function Book(name,amount,carta) {
  this.name = name;
  this.amount = amount;
  this.id = carta.id;
}

function addBookToLibrary(name, amount,carta) {
  let newBoowk = new Book(name,amount,carta);
  myLibrary.push(newBoowk);
}

function deleteBook(carta){
  myLibrary = myLibrary.filter(function(elemento){
    return (elemento.id !== carta.id);
  })
}

function addDeleteButton(card){
  let deleteButton = document.createElement("button");
  deleteButton.innerText = "";
  card.appendChild(deleteButton);
  deleteButton.classList.add("deleteB");

  deleteButton.addEventListener("click",function()
  {
    deleteBook(card);
    bodyElement.removeChild(card);

  });
}

 


//-------------------------------------------------
const bodyElement = document.querySelector(".container");
const botonElement = document.querySelector("#agregar");
const inputName = document.querySelector("#nameid");
const inputNumber = document.querySelector("#numberid");


botonElement.addEventListener("click",function()

{
  if (inputName.value != "" && inputNumber.value != 0){
  let card = document.createElement("div"); 
  card.classList.add("card");
  card.id = crypto.randomUUID();
  card.innerText = inputName.value + "\n" + inputNumber.value;
  addBookToLibrary(inputName.value,inputNumber.value,card);

  
  inputName.value = "";
  inputNumber.value = 0;
  addDeleteButton(card);



  bodyElement.appendChild(card);
  }


});





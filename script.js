const myLibrary = [];

function Book(name,amount) {
  this.name = name;
  this.amount = amount;
}

function addBookToLibrary(name, amount) {
  let newBoowk = new Book(name,amount);
  myLibrary.push(newBoowk);
}

console.log(myLibrary);
addBookToLibrary("uno",2);
console.log(myLibrary);
addBookToLibrary("dos",3);
console.log(myLibrary);
addBookToLibrary("cuatro",5);
console.log(myLibrary);
addBookToLibrary("tres",234);
console.log(myLibrary);
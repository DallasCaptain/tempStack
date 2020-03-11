const lib = require ('./library.js'); 
console.log('in main', lib)

function showlib(books){
    for(let book of books){
        console.log(book.name,book.author)
    }
    return true
}

showlib(lib)
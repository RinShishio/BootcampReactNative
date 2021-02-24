
let readBookPromise = require('./Promises.js');
 
let books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 1000}
]
function baca(time, books, i) {
    if (i < books.length) {
        readBookPromise(time, books[i])
        .then( function (sisa) {
                if (sisa >0) {
                    i+= 1;
                baca(sisa, books, i);
                }
            })
        .catch(function () {
            })
             
    }
    
}
baca(10000, books, 0)
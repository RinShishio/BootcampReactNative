function readBookPromise(time, book) {
    console.log(`Saya mulai Membaca ${book.name}`)
    return new Promise(function (resolve, reject) {
        setTimeout(function() {
            let sisaWaktu = time - book.timeSpent
            if (sisaWaktu >= 0) {
                console.log(`Saya sudah selesai membaca ${book.name}, sisa waktu saya ${sisaWaktu}`)
                resolve(sisaWaktu)
            } else {
                console.log(`Saya sudah tidak punya waktu untuk membaca ${book.name}`)
                reject(sisaWaktu)
            }
            
        }, book.timeSpent);
        
    })
    
}
module.exports = readBookPromise
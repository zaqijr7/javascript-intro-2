const number = [0, 11, 22, 3, 4, 15, 6, 27, 8, 10, 10, 11, 12, 18, 14, 15, 16, 17, 18, 19, 20];

// 1. Length 
// Digunakan untuk mengetahui jumlah elemen pada array
console.log(number.length); 

// 2. Join
// Digunakan untuk menggabungkan seluruh isi array dan mengubahnya menjadi string
console.log(number.join(', '));

// 3. Push
// Digunakan untuk menambah isi array di akhir elemen array.
number.push(21);

// 4. Pop
// Digunakan untuk menghapus element array paling akhir atau index terakhir
number.pop();

// 5. Unshift
// Digunakan untuk menambah elemen baru di awal elemen array
number.unshift(16);

// 6. Shift
//Digunakan untuk menghapus elemen pertama pada array
number.shift();

// 7. Splice
// DIgunakan untuk menambah elemen baru di tengah tengah elemen array
// number.splice(startIndexNum, deleteCount, newElemen)
number.splice(2, 5, 45);

// 8. forEach
// Digunakan untuk melooping sebuah array
number.forEach((element, index) => {
    console.log(`No ke ${index}. ${element}`);
})

// 9. map
// Digunakan untuk melooping array dengan mengembalikan array baru

const newNumber = number.map((e) => {
    return e * 2
})

//  10. Sort
// DIgunakan untuk mengurutkan elemen array
const sortArr = number.sort((min, max) => {
    return min-max;
})


// 11. Filter
// Digunakan untuk memfilter elemen pada array sesuai dengan kondisi tertentu yang kita berikan dan menghasilkan array baru
const filterArr = number.filter((element) => { return element % 2 == 0})




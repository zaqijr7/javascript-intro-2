const sortArray = (min, max, dataArray) => {
    if ( min >= max) {
        console.log('Nilai akhir harus lebih besar dari nilai awal');
    } else if (dataArray.length <= 5) {
        console.log('Jumlah angka dalam data Array harus lebih dari 5');
    } else {
        const filterArray = dataArray.filter((e) =>{
            return e >= min && e <= max ;
        });
        const newArray = filterArray.sort((startIndex, toIndex) => startIndex-toIndex);
        outputResult(newArray)
    }
}


const outputResult = (result) => {
    console.log(result);
}

sortArray(3, 4, [1, 3, 4, 2, 4, 5, 6, 4, 10, 29, 90, 7, 8, 6, 9])
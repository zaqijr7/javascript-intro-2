const name = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'];


function searchElement (keyword, range, callback) {
    const nameLowerCase = name.map((e) => e.toLowerCase());
    const newArray = nameLowerCase.filter((element) => {
        if (element.match(keyword.toLowerCase())){
            return element
        } else { 
            return undefined;
        }
    })
    callback(newArray, range);
}

function dataValidation (data, range) {
    if (data == ''){
    console.log('not found');   
    } else {
        if (range > data.length) {
            range = data.length;
        }
        const result = [];
        for( let index = 0; index < range; index++){
            result.push(data[index]);
        }
        printResult(result);
    }
}

function printResult (param) {
    console.log(param);
}

searchElement('an', 3, dataValidation)


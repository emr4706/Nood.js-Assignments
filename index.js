//1. Write to .txt file
//Create a function that writes all numbers between given 2 values in a text(txt) file.
// _Example: writetext(22,55)

var fs = require('fs');

function writetext(a,b) {

    let myNumbers=[];
    for(let i = a; i <= b; i++){

        myNumbers.push(i);

    };
    
    fs.writeFileSync('./Text.txt', myNumbers);

}
writetext(22,55);

// //2. Read from .txt file
// // Create a function that gets the content of given text file and prints it on the console.
// // _Example: printText('mytextFile.txt')

// // const fs = require('fs'); 

function readTheFile(fileName) {
    let fileText = fs.readFileSync(`./${fileName}`).toString();

    return fileText;
}

readTheFile('Text.txt');


// 3. Merge files
// Create a function that gets the content of given text files and creates a new file with all the content.

// _Example: mergeFiles('mytextFile.txt', 'yourTextFile.txt')

function mergeFiles(fileName1, fileName2) {

    let textOne = readTheFile(fileName1);
    let textTwo = readTheFile(fileName2);

    console.log(textOne, textTwo);

    fs.appendFileSync('./newFile.txt', textOne + textTwo);
}
mergeFiles('Text.txt', 'secondFile.txt');


// // 4. Using external module
// // Install and import moment.js(a js libary) via NPM and create a function that prints the day name of X(given number as an argument) days later on the console by using moment.js
// // _Example: getFutureDay()

var moment = require('moment');

const getFutureDay = day =>{
    console.log("Day's name is: "  +  moment(day).format('dddd'));

}
getFutureDay(2);













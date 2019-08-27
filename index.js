//1. Write to .txt file
//Create a function that writes all numbers between given 2 values in a text(txt) file.
// _Example: writetext(22,55)

const fs = require('fs');

const writetext = (a,b) => {
    let myNumbers=[];
    for(let i = a; i <= b; i++){
        myNumbers.push(i);
    }
   return myNumbers;
}

fs.writeFile('Text.txt', writetext, (err) => {
    if (err) throw err;

    console.log('writetext saved!');
});

console.log(writetext(22,55));

//2. Read from .txt file
// Create a function that gets the content of given text file and prints it on the console.
// _Example: printText('mytextFile.txt')

const fs = require('fs'); 

const printText = (fileName)=>{
    fs.readFile('mytextFile.txt', 'utf8', (err, data)=> {
        if (err) throw err;
        console.log(data);
    })
};
console.log(printText('mytextFile.txt'));

// 3. Merge files
// Create a function that gets the content of given text files and creates a new file with all the content.
// _Example: mergeFiles('mytextFile.txt', 'yourTextFile.txt')
// const fs = require('fs');

const fs = require('fs');

const mergeFiles = (file1, file2) => {

    fs.copyFileSync(file1, file2); 

};
console.log(mergeFiles("mytextFile.txt", "yourTextFile.txt"));

// 4. Using external module
// Install and import moment.js(a js libary) via NPM and create a function that prints the day name of X(given number as an argument) days later on the console by using moment.js
// _Example: getFutureDay()

var moment = require('moment');

const getFutureDay = day =>{
    console.log("Day's name is: "  +  moment(day).format('dddd'));

}
getFutureDay(2);













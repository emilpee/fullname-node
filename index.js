// Läs in filesystem-modul
const Fs = require('fs');

// Paths
var firstName = './firstName.txt';
var lastName = './lastName.txt';
var fullName = './fullName.txt'

// Options
var options = {
    encoding: 'utf8',
    flag: 'r'
}

// Läs in filer
Fs.readFile(firstName, options, (err, firstData) => {
    if (err) throw err;
    console.log(firstData);
      Fs.readFile(lastName, options, (err, secondData) => {
          if (err) throw err;
          console.log(secondData);
        var fullData = firstData.concat(' ' + secondData);  // Slår ihop data från båda filer
        Fs.writeFile(fullName, fullData, (err) => {
            if (err) throw err;
            console.log('Klart!');
        })
    })  
})
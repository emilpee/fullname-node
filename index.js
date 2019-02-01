// Läs in filesystem-modul
const fs = require('fs');

// Paths
var firstName = './firstName.txt';
var lastName = './lastName.txt';
var fullName = './fullName.txt'

// Options
var options = {
    encoding: 'utf8',
    flag: 'r'
}

// Läser in filer
fs.readFile(firstName, options, (err, firstData) => {
    if (err) throw err;
      fs.readFile(lastName, options, (err, secondData) => {
          if (err) throw err;
          var fullData = firstData.concat(' ' + secondData);  // Slår ihop data från båda filer
        fs.writeFile(fullName, fullData, (err) => {
            if (err) throw err;
            console.log('Klart!');
        })
    })  
})
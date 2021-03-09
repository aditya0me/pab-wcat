const fs = require("fs");
const readline = require('readline');
const lineReader = require('line-reader');

function numberingAllLines(file_path) {

    /*
      var rd = readline.createInterface({
            input: fs.createReadStream(file_path),
            output: process.stdout,
            console: false
        });
    
        
        
        rd.on('line', (line) => {
            //console.log(line);
        });
    
        //processLineByLine(file_path);
        */

    let counter = 1;
    lineReader.eachLine(file_path, (line, last) => {
       console.log(line);
    });
}

module.exports = {
    fn: numberingAllLines,
};


function processLineByLine(file_path) {
    const fileStream = fs.createReadStream(file_path);

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.

    for (const line of rl) {
        // Each line in input.txt will be successively available here as `line`.
        console.log(`Line from file: ${line}`);
    }
}
const fs = require("fs");
const readline = require('readline');
const lineReader = require('line-reader');

function numberingToNonSpaceLines(file_path) {

    let counter = 1;
    lineReader.eachLine(file_path, (line, last) => {
        if (line.replace(/\s/g, '').length == 0) {
            console.log(line);
        }
        else {
            console.log(counter, ":-", line);
            counter += 1;
        }
    });
}

module.exports = {
    fn: numberingToNonSpaceLines,
};



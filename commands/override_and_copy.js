/*
* Some improve ments need to be done
* If a folder does not exits, we will have to make the folder

*/


const fs = require("fs");
function overrideAndCopyIntoSource(src,dest){
    if(!fs.existsSync(src)){
        console.log("the file ",src," :does not exist");
        return;
    }

    let buffer = fs.readFileSync(src,"utf-8");
    //console.log(buffer);
    fs.writeFileSync(dest, buffer);
}

module.exports = {
    fn: overrideAndCopyIntoSource
};
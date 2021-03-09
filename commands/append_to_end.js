
const fs = require("fs");
function appendTheContentOfSrcToDest(src,dest){
    if(!fs.existsSync(src)){
        console.log("the file ",src," :does not exist");
        return;
    }

    let buffer = fs.readFileSync(src,"utf-8");
    //console.log(buffer);
    fs.appendFileSync(dest, buffer);
}

module.exports = {
    fn: appendTheContentOfSrcToDest
};
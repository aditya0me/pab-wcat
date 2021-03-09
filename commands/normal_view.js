const fs = require("fs");
const path = require("path");

function normal_view_helper(arr_of_file_names){
    //console.log("I am called");
    //console.log(arr_of_file_names);
    for(let i=0;i<arr_of_file_names.length;i++){
        if(!fs.existsSync(arr_of_file_names[i])){
            console.log(arr_of_file_names[i]," ->does not exist");
            continue;
        }
        printTheContentsOfFileToTerminal(arr_of_file_names[i]);
    }

   //console.log("I am Over");
}

module.exports={
    fn:normal_view_helper,
};

function printTheContentsOfFileToTerminal(src){

    let buffer = fs.readFileSync(src,"utf-8");
    console.log(buffer);
}

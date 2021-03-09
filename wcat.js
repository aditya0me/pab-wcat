#! /usr/bin/env node 
let input=process.argv.slice(2);
let cmd=input[0];

let normal_view = require("./commands/normal_view");
let number_to_all_lines = require("./commands/numbering_to_all_lines");
let number_to_non_space_lines = require(".//commands/numbering_to_non_space_lines");
let override_and_copy = require("./commands/override_and_copy");
let append_to_end = require("./commands/append_to_end");

switch(cmd){
  
    case "normal_view":
        normal_view.fn(input.slice(1));
        break;

    case "-n":
        number_to_all_lines.fn(input[1]);
        break;

    case "-b":
        number_to_non_space_lines.fn(input[1]);
        break;

    case "override":
        override_and_copy.fn(input[1],input[2]);
        //console.log("Override called");
        break;
    case "append":
            append_to_end.fn(input[1],input[2]);
            break;
    default:
        console.log("wrong command entered");
        break;
}



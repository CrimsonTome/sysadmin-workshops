#!/usr/bin/env node
import nodePandoc from "node-pandoc"

let src = "../raw-slides/slides.md";

// Arguments can be either a single String or in an Array
let args = "-f markdown -o ../../output/slides.pptx";

// Set your callback function
const callback = (err, result)=> {

  if (err) console.error('Oh Nos: ',err)
  return console.log(result), result
}

// Call pandoc
nodePandoc(src, args, callback);

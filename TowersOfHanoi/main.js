'use strict';

const assert = require('assert');
const readline = require('readline');
const { truncate } = require('fs');
const { start } = require('repl');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

let a = stacks.a
let b = stacks.b
let c = stacks.c

console.log(a,b,c)
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

const movePiece = (startStack, endStack) => {
  // Your code here
  // Need to move one piece from starter to dest stack
  let originMove = startStack
  let destinationMove = endStack
  if(originMove == 'a' &&  destinationMove == 'b'){
    a.pop()
    b.push()
    return stacks
  }

 
    

}
movePiece()
const isLegal = () => {
  // Your code here
  

}

const checkForWin = () => {
  // Your code here
  if (stacks.b.length === 4)
  {
      return true
  } else if (stacks.c.length === 4)
  {
    return true
  } else {
      return false
  }
}
// console.log(stacks.a.length)
// console.log(stacks.b.length)
// console.log(stacks.c.length)

const towersOfHanoi = (startStack, endStack) => {
//   // Your code here
    let starterStack = stacks.startStack
    let endingStack = stacks.endStack
    
}

const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

getPrompt();
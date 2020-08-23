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

const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

const movePiece = (startStack, endStack) => {
  // Your code here
  // Need to move one piece from starter to dest stack
  // right now move pops off the last of the a stack
    let move = stacks.startStack.pop()
    // let dest = endStack.push(move)
    console.log(move)

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
      console.log("Congrats you won!")
  } else if (stacks.c.length === 4)
  {
    return true
    console.log("Congrats you won!")
  } else {
      return false
  }
}
checkForWin()
const towersOfHanoi = (startStack, endStack) => {
//   // Your code here
//     let starterStack = stacks[startStack]
//     let endingStack = stacks[endStack]
//     console.log(starterStack)
//     console.log(endingStack)
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
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


const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

const movePiece = (startStack, endStack) => {
  // Need to move one piece from origin stack to destination stack
  let originMove = startStack
  let destinationMove = endStack
  if(originMove == 'a' &&  destinationMove == 'b'){
    b.push(a.pop())
    return stacks
  } if (originMove == 'a' && destinationMove == 'c') {
    c.push(a.pop())
    return stacks
  } if (originMove == 'b' && destinationMove == 'c'){
    c.push(b.pop())
    return stacks
  } if (originMove == 'b' && destinationMove == 'a'){
    a.push(b.pop())
    return stacks
  } if (originMove == 'c' && destinationMove == 'a'){
    a.push(c.pop())
    return stacks
  } if (originMove == 'c' && destinationMove == 'b'){
    b.push(c.pop())
    return stacks
  }
}

const isLegal = () => {
  // Your code here
  

}

const checkForWin = () => {
  /* if statment that equates to if the length of b or c is equal to 4 return true and console log the win statement
  otherwise return false*/
  if (b.length === 4)
  {
      console.log("Congrats you have won!")
      return true
  } else if (c.length === 4)
  {
        console.log("Congrats you have won!")
        return true
  } else {
      return false
  }
}

const towersOfHanoi = (startStack, endStack) => {
  movePiece(startStack, endStack)
  checkForWin()
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
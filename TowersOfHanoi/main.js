'use strict'

const assert = require('assert')
const readline = require('readline')
const { truncate } = require('fs')
const { start } = require('repl')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// establishes a stack object with 3 arrays in it.
let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
}
// made stacks into variables for ease of use.
let a = stacks.a
let b = stacks.b
let c = stacks.c

// This function prints the board
const printStacks = () => {
  console.log("a: " + stacks.a)
  console.log("b: " + stacks.b)
  console.log("c: " + stacks.c)
}

const movePiece = (startStack, endStack) => {
  // Need to move one piece from origin stack to destination stack
  // I changed the name of these variables within the function for my own sanity's sake. 
  // This will still work fine with using startStack and endStack
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
/* This function should evaluate if a move is able to be made or not.  You should not be able to put a larger number on top of a smaller number.  4 cannot go on top of a 2 in the given array.  

Each if statement takes in the start and end stack the user gives.  It evaluates if the last element of the A,B or C array is greater than the endStack that it is trying to push on to.  If the element is greater than it does not allow the move.*/
const isLegal = (startStack, endStack) => {
  let lastElementA = a[a.length - 1]
  let lastElementB =b[b.length - 1]
  let lastElementC = c[c.length - 1]

    if (startStack == 'a' && endStack == 'b'){
        if(lastElementA > lastElementB){
          return false 
        } else {
          return true
        }
    } if (startStack == 'b' && endStack == 'c'){
        if(lastElementB > lastElementC){
          return false 
        }  else {
          return true
        }
    } if (startStack == 'a' && endStack == 'c'){
      if(lastElementA > lastElementC){
        return false 
      } else {
        return true
      }
    } if (startStack == 'c' && endStack == 'a'){
      if(lastElementC > lastElementA){
        return false 
      } else {
        return true
      }
    } if (startStack == 'b' && endStack == 'a'){
      if(lastElementB > lastElementA){
        return false 
      } else {
        return true
      }
    } if (startStack == 'c' && endStack == 'b'){
      if(lastElementC > lastElementA){
        return false 
      } else {
        return true
      }
    } if(startStack === endStack){
      return false
    } else {
      return false
    }

  

}
let errorMessage = "********** Not allowed **********"
const checkForWin = () => {
  /* if statment that equates to if the length of b or c is equal to 4 return true and console log the win statement
  otherwise return false*/
  if (b.length === 4){
      console.log("Congrats you have won!")
      return true
  } else if (c.length === 4){
        console.log("Congrats you have won!")
        return true
  } else {
      return false
  }
}
/* This is the main function that runs the program.  It requires both inputs from the user before actions are taken or not depending if they are allowed.  The only function here that does not require startStack and End Stack is CheckforWin()*/
const towersOfHanoi = (startStack, endStack) => {
  if (isLegal(startStack, endStack) == true){
    movePiece(startStack, endStack)
    
  } else{
    console.log(errorMessage)
  
  }
  checkForWin()
}
const getPrompt = () => {
  printStacks()
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack)
      getPrompt()
    })
  })
}

getPrompt()


/* Unit TESTS WILL GO HERE TOMORROW */


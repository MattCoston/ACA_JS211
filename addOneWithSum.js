const mattsArray = [2, 5, 6, 7, 9]

const addOneWithSum = (ourArray) => {
    let newList = []
    let sum = 0;
    for (let i = 0; i < ourArray.length; i++){
        sum += (ourArray[i] + 1)
        newList.push(ourArray[i] + 1);
    }
    return newList + ' ' + sum;
}

addOneWithSum(mattsArray)
console.log(addOneWithSum(mattsArray));

//This is a test comment and commit
// const ..Hold a value in a variable

// addOneWithSum ...Is a name we gave the varial held with "const"

// = () => {}  ...Is the signatuer of a fuction.  This means, that addOneWithSum will be a function

//(ourArray) ... This means the function takes in an argument that we can reference it inside the function block, {} , as "ourArray"

// the for() loops states:
    // let i = 0; ... Which sets i to 0, (i stands for interator)
    // i < ourArray.length; ...And while i is less than the length of ourArray keep doing what is inside the code block
    // i++ ...And each time you loop through ourArray, add 1 to the value of i so that we can keep iterating through all of the numbers in the list, i.e. - ourArray[i] = ourArray[1] then ourArray[i] = ourArray[2] etc.
    // ourArray[i] + 1 ... Inside the {} or function block of the for() loop we add 1 to teach item in ourArray
// let newList = [] ...This creates a place we can hold the new values of the list. We use an array, [], to hold a list of items
// newList.push(ourArray[i] + 1)  ...The ".push()" is a built-in array method that pushes a new value into the newList array/list
// return newList  ...And then we returned the newList as the output of this program
// let sum = 0  ...Now we create a place to hold the sum of the new numbers: sum
// sum += (ourArray[i] + 1)  ...and inside our for() loop we continually add to the value of sum. Think of the += as "add this value to the current value and reset the total value to the variable"
// then we return sum as part of our output.
// in the return we added a space, ' ' , between newList and sum so that the return would be easier to read.


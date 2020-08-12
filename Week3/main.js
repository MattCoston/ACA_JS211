'use strict'

console.log("loading JS")

let addButton = document.getElementById("addButton");
addButton.addEventListener("click", function() {
    console.log("THE BUTTON WAS CLICKED")
    let inputBox = document.getElementById("inputBox")
    let item = inputBox.value
    
    console.log("the input is", item)

    let myList = document.getElementById("theList")
    let li = document.createElement("li")
    li.innerText = item
    myList.appendChild(li)

    inputBox.value = ''
    addLiEvent(li)
})

let addLiEvent = (li) => {
    li.addEventListener('click', function(){
        
        let classes = li.classList
        if(classes.include("done")){
            li.classList.remove("done")
        } else {
            li.classList.add("done")
        }
    })
    
}
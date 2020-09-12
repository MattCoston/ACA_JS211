console.log("JS LOADED");


console.log("about to make fetch call");
let fetchPromise = window.fetch("https://randomuser.me/api/?results=5");
let jsonPromise = fetchPromise.then(function(data){
    console.log("Fetch call finished", data);
    return data.json();
})
jsonPromise.then(function(json){
    console.log("Have the actual payload", json);
    process(json.results);
    
})

console.log("after fetch call done")

function process(users){
    let ul = document.getElementById("people")

    users.forEach(function(user){
        console.log("User First Name", user.name.first);

        let li = document.createElement("li");
        ul.appendChild(li)

        let img = document.createElement("img");
        li.appendChild(img)
        let picture = user.picture.large;
        img.src = picture;

        let nameDiv = document.createElement("div");
        li.appendChild(nameDiv)
        nameDiv.innerHTML = user.name.first + " " + user.name.last;
        let addressDiv = document.createElement("div");
        li.appendChild(addressDiv)
        //todo: got to set the text inside the address div
        addressDiv.innerHTML = user.location.street.number + " " + user.location.street.name + " " + user.location.city + " " + user.location.country;
        li.addEventListener("click", function(){
            console.log("this event works")
            let hide = addressDiv
            if ( hide.style.display == "none"){
                hide.style.display = "block"
            } else {
                hide.style.display = "none"
            }
            //have to add a listener to the li, so when the name div is clicked
            //if the address div is hidden, then it should change to showing
            // if it is showing already then hide it
        });
    });
}
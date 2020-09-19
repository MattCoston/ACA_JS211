/* DodgeBall Checkpoint due Sep 17th 
For DodgeBall, remember that there needs to be 2 classes (LeagueMember/Player and TeamMember). 
20pts - Code plan, a read me, or enough comments to explain what the different parts of your code are doing
20pts - Ability to make Players/League Members out of people who signed up
20pts - Ability to add Players/League Members to different teams
20pts - Correctly use classes to hold the info about league members and team members
20pts - A write up of how I can verify that your code is working correctly. This is more than just 3 sentences. You need to describe what the different functionality of your application is.
*/
console.log("JS LOADED")

const arrOfPeople = [
    {
      id: 2,
      name: "Charles Young",
      age: 55,
      skillSet: "welding",
      placeBorn: "Omaha, Nebraska"
    },
    {
      id: 3,
      name: "Judy Twilight",
      age: 35,
      skillSet: "fishing",
      placeBorn: "Louisville, Kentucky"
    },
    {
      id: 4,
      name: "Cynthia Doolittle",
      age: 20,
      skillSet: "tic tac toe",
      placeBorn: "Pawnee, Texas"
    },
    {
      id: 5,
      name: "John Willouby",
      age: 28,
      skillSet: "pipe fitting",
      placeBorn: "New York, New York"
    },
    {
      id: 6,
      name: "Stan Honest",
      age: 20,
      skillSet: "boom-a-rang throwing",
      placeBorn: "Perth, Australia"
    },
    {
      id: 7,
      name: "Mia Watu",
      age: 17,
      skillSet: "acrobatics",
      placeBorn: "Los Angeles, California"
    },
    {
      id: 8,
      name: "Walter Cole",
      age: 32,
      skillSet: "jump rope",
      placeBorn: "New Orleans, Louisiana"
    },
  ]
  
  const listOfPlayers = []
  const blueTeam = []
  const redTeam = []
  
  class Player {
    constructor(
      id, 
      name, 
      age,
      skillSet,
      placeBorn,
      canThrowBall,
      canDodgeBall,
      hasPaid,
      isHealthy,
      yearsExperience)
      {
      this.id = id
      this.name = name;
      this.age = age;
      this.skillset = skillSet;
      this.placeBorn = placeBorn;
      this.canThrowBall = canThrowBall;
      this.canDodgeBall = canDodgeBall;
      this.hasPaid = hasPaid;
      this.isHealthy = isHealthy;
      this.yearsExperience = yearsExperience;
    }
  }
  class Teammate extends Player {
    constructor(player, mascot, color) {
      super(
        player.id,
        player.name,
        player.age,
        player.skillset,
        player.placeBorn,
        player.canThrowBall,
        player.canDodgeBall,
        player.hasPaid,
        player.isHealthy,
        player.yearsExperience
        );
      this.mascot = mascot;
      this.color = color;
    }
    // these are options for pushing the players into teams as methods inside the class.
  //  joinRedTeam() {
  //    redTeam.push(this.player);
  //  }
  //  joinBlueTeam() {
  //    blueTeam.push(this.player);
  //  }
}

//here we need to create a function to remove the name from the people list by the ID we
//assosiated with them
const removeName = (itemid) => {
  let item = document.getElementById(itemid);
  item.remove();
}

//function for our people list in DOM which generates the list when the button is clicked as well as the buttons for make a player and ties in the functions to run when clicked
const listPeopleChoices = () => {
  let itemid = 1; //create variable set to 1 in order to add an ID to the element in the DOM
  
  const listElement = document.getElementById("people"); // create a variable to find the element with id people in our first ordered list

  //map through the array of people so we can create buttons for the make a player function
  //and add event listeners to move them over
  arrOfPeople.map((person) => {
    const li = document.createElement("li"); //variable set for list items within DOM
    li.setAttribute("id", itemid); //use our variable for setting IDs to set an attribut of ID this way we can grab the elements by id
    const button = document.createElement("button"); //create our button to make a player from person
    button.innerHTML = "Make Player"; //name the button

    //add an event listener that runs our makePayer function when clicked intentions are to move
    //people from arrOfPeople to listOfPlayer and display them on DOM
    button.addEventListener("click", function () {
      if(listOfPlayers.includes(person)){
        return false
      }
      makePlayer(person);
    });
    li.appendChild(button); //add the button to our list items
    //and create a text node to display the person and their information
    li.appendChild(
      document.createTextNode(person.name +" - " + person.age + " - " + person.skillSet)
    );

    //the event listener for the function so when it is clicked it removes the item from the dom
    button.addEventListener("click", function removeName(itemid) {
      let item = document.getElementById(itemid);
      li.remove(item);
    });

    listElement.appendChild(li); //make a child for the list items our people ID from the ordered list

    itemid += 1; // increase it that has attributes set
  });
};


//function for a player from the people list and moving them the the player list. Create buttons that takes functions for putting on different teams.
const makePlayer = (person) => {
  console.log(listOfPlayers) // using this to help me see which attributes are not defined yet

  //stores a variable that creates a new player when a "person" is passed through
  let addPlayer = new Player(
    person.id,
    person.name,
    person.skillSet,
    person.placeBorn,
    person.canThrowBall,
    person.canDodgeBall,
    person.hasPaid,
    person.isHealthy,
    person.yearsExperience
  );
    //adds person to the list of players function
  listOfPlayers.push(addPlayer);

  let itemid = 1;//create variable set to 1 in order to add an ID to the element in the DOM
  const listElement = document.getElementById("players");// create a variable to find the element with id people in our first ordered list
  listElement.innerHTML = ""; //setting the listElement on the DOM to a empty string so that it can reset the list that is displayed every time the array is updated with a new player

  //looping through each person in the array so we can tie in to the DOM give li elements ids and create buttons with colors set to them
  listOfPlayers.forEach((person) => {
    const li = document.createElement("li");//variable set for list items within DOM

    li.setAttribute("id", "item:" + itemid);  //use our variable for setting IDs to set an attribut of ID this way we can grab the elements by id

    let button2 = document.createElement("button");//create our button to set a player on red team
    button2.innerHTML = "Make Red Team";//name the button for red team
    //this makes it so when button2 is clicked the function that brings a person on the player array is now on the redTeam array and displayed in the dom
    button2.addEventListener("click", function () { 
      if(redTeam.includes(person)){
      return false
    }
      makeRed(person);
    });
    let button3 = document.createElement("button");//create our button to set a player on red team
    button3.innerHTML = "Make Blue Team";//name the button for blue team
    
    //this makes it so when button3 is clicked the function that brings a person on the player array is now on the blueTeam array and displayed in the dom
    button3.addEventListener("click", function () { 
      if(blueTeam.includes(person)){
        console.log("this shouldnt remake people")
      return false
    }
      makeBlue(person);
    });
    li.appendChild(button2);//tie the buttons into the li element
    li.appendChild(button3);
        //and create a text node to display the person and their information
    li.appendChild(
      document.createTextNode(" " + person.name + " ")
    );

    //the event listener for the function so when it is clicked it removes the item from the dom
    button3.addEventListener("click", function removeName(itemid) {
      let item = document.getElementById(itemid);
      li.remove(item);
    });

    //the event listener for the function so when it is clicked it removes the item from the dom
    button2.addEventListener("click", function removeName(itemid) {
      let item = document.getElementById(itemid);
      li.remove(item);
    });

    listElement.append(li);
    li.appendChild(button3);

    itemid += 1;// add a increase for the ids we set attributes for
  });
  
};

const makeRed = (player) => {
  // const redTeammate = new Teammate(player, "Lion", "red");
  // redTeammate.joinRedTeam(player);
  // console.log(redTeammate)

  let addteammate = new Teammate(player, "Red", "Tigers");//create a variable that holds classes being made for teammate

  redTeam.push(addteammate);//pushes those Teammates to redTeam

  let itemid = 1;//create variable set to 1 in order to add an ID to the element in the DOM
  const listElement = document.getElementById("Red");
  listElement.innerHTML = "";

  redTeam.forEach((player) => {
    const li = document.createElement("li");
    li.setAttribute("id", "num:" + itemid);
    //and create a text node to display the person and their information
    li.appendChild(
      document.createTextNode(
        " " + player.name + " - " + player.color + " - " + player.mascot + " "
      )
    );

    listElement.append(li);
    itemid += 1;// add a increase for the ids we set attributes for
  });
};

const makeBlue = (player) => {
  // const blueTeammate = new Teammate(player,"Dolphin", "blue");
  // blueTeammate.joinBlueTeam(player);
  // console.log(blueTeammate)

  let addteammate = new Teammate(player, "Blue", "Dolphin");  // same as for red team mate add

  blueTeam.push(addteammate);//pushes those Teammates to  blueTeam

  let itemid = 1;// same as red team mate item id set
  const listElement = document.getElementById("Blue");
  listElement.innerHTML = "";

  blueTeam.forEach((player) => {
    const li = document.createElement("li");
    li.setAttribute("id", "num:" + itemid);
    //and create a text node to display the person and their information
    li.appendChild(
      document.createTextNode(
        " " + player.name + " - " + player.color + " - " + player.mascot + " "
      )
    );

    listElement.append(li);
    itemid += 1;// add a increase for the ids we set attributes for
  });
};

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
  
  class player {
    constructor(name, id){
      this.name = name;
      this.id = id
    }
    makeDBPlayer(player){
     
    }
  }
  class blueTeammate extends player {
    constructor(){

    }
  }
  class redTeammate extends player{
    constructor(){

    }
  }

  function assignToTeam(player) {
    //ASSIGN PLAYERS TO TEAMS
  }
  
  function listPeopleChoices() {
  const listElement = document.getElementById('people')
  arrOfPeople.map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener('click', function () { makePlayer(person.id) })
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
  })
}
  
  const makePlayer = (id) => {
    console.log(`li ${id} was clicked!`)
    //let removeFromPeopleList = document.getElementById('people')
    //removeFromPeopleList.remove("li")
    let addPlayer = new player(arrOfPeople[0].name, arrOfPeople[0].id)
    listOfPlayers.push(addPlayer)
    console.log(listOfPlayers)
    // FOR EACH
    //NEEDS TO REMOVE FROM LIST OF PEOPLE AND ADD TO DODGE BALL PLAYERS LIST
    //let liElement = document.getElementById('players')
    const listElement = document.getElementById('players')

    //Map function takes each person and maps them to the player section on the dom
    listOfPlayers.map(person => {
      const li = document.createElement("li")
      let button2 = document.createElement("button")
      button2.innerHTML = "Make Red Team"
      let button3 = document.createElement("button")
      button3.innerHTML = "Make Blue Team"
      li.appendChild(button2)
      li.appendChild(document.createTextNode("  " + person.name + " - " + person.id + "  "))
      listElement.append(li)
      li.appendChild(button3)
      
    })
    
  }

  // simulate sign up and 1 thing about them
  // click the person and assign them to a team
  //

  //let dbPlayer = new player("yes", "yes" ,"no" ,"yes", 34)
    //console.log(dbPlayer)
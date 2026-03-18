var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
];

planets.reverse(); //reverse planets so sun is first 

function populatePlanetList() {                          //tada function 
  const select = document.getElementById("planets");     //gets "planets" from doc const=shouldnt change
  if (!select) return;                                    // if select is not true stop
  select.innerHTML = '<option value="">-- Select a planet --</option>';   //resets select so no duplicates 
  planets.forEach(([name]) => {            // iterates over planets to slect name 
    const option = document.createElement("option");    //
    option.value = name;                                //
    option.textContent = name;                          //
    select.appendChild(option);                         // html shit of getting planet names, please dont ask this was painful
  });
}
      // nfc this means"“watch the page for a specific event, then run"
document.addEventListener("DOMContentLoaded", populatePlanetList);      //google says dom is so shit doesnt break??
                                                                       // planetlist calls back to selection of planets 
function calculateWeight(weight, planetName) {                //another function
  const planet = planets.find(p => p[0] === planetName);      //find planet name where first index is name
  if (!planet) return null;                                    
  return weight * planet[1];                                //math for user weight * matching planet weight 
}

function handleClickEvent() {                               //oh look 
  const userWeight = Number(document.getElementById("user-weight").value);   //reads userweight and turns it into num 
  const planetName = document.getElementById("planets").value;        //reads selected planet weight 
  const newWeight = calculateWeight(userWeight, planetName); //does math
  if (isNaN(userWeight) || !newWeight) {             //makes sure its doing math 
    alert("Enter valid weight and planet");
    return;
  }
                                                                // fuck you.toFixed
  const message = `If you were on ${planetName}, you would weigh ${newWeight.toFixed(2)}lbs!`;
  document.getElementById("output").textContent = message;        //displays text
}

const calculateButton = document.getElementById("calculate-button");  //does button shit
calculateButton.onclick = handleClickEvent;                     //makes function do function shit 
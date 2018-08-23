var dwarfList = []
function dwarfRollCall(dwarves) {
  for (let i = 0; i < dwarves.length; i++) {
	dwarfList.push([i+1] + `. ` + dwarves[i] + ` `)
}
var string = `${dwarfList[0]}${dwarfList[1]}${dwarfList[2]}`
return string
}

var loudCall = []
function summonCaptainPlanet(planeteerCalls){
  for (let i = 0; i < planeteerCalls.length; i++) {
    loudCall.push(planeteerCalls[i] + `!`)
  }
  return loudCall
}

function longPlaneteerCalls(words) {
  for (var i = 0; i < longPlaneteerCalls.length; i++) {
    if (words[i].length > 4) {
      return true;
    }
      else {
        return false;
      }
    }
}


function findTheCheese (foods) {
    for (var i = 0; i < foods.length; i++) {
     if (foods[i] === "cheddar") {
      return foods[i]
    }
     else if (foods[i] === "gouda") {
      return foods[i]
    }
     else if (foods[i] === "camembert") {
      return foods[i]
    }
     else {
      if (i === foods.length - 1) {
        return ("no cheese!")
      }
      }
    }
}

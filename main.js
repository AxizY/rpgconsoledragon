function sg() {
map = '######'
locatione = 1
oppoloce = 6
ylocatione = 1
yoppoloce = 6
end()
}
var settings = {
  movingstyle: ['input: w, a s, and d', 'direction: u, d, l, and r'],
 
}
//fix
var changesettings = {
  changesettings.movingstyle[]
}
/*
function m(side) {
 
if (side == 'r') {
if (oppoloce == 1 || locatione == 6) {} else {
oppoloce = oppoloce-1
locatione = locatione+1
}
} else if (side == 'l') {
if (oppoloce == 6 || locatione == 1) {} else {
oppoloce = oppoloce+1
locatione = locatione-1
}
} else if (side == 'd') {
if (ylocatione == 5) {} else {
ylocatione = ylocatione+1
yoppoloce = yoppoloce-1
}
} else if (side == 'u') {
if (ylocatione == 1) {} else {
ylocatione = ylocatione-1
yoppoloce = yoppoloce+1
}}
end()
}
*/

Object.defineProperty(window, 'w', {
  get() {
  if (ylocatione == 1) {} else {
yoppoloce = yoppoloce+1
ylocatione = ylocatione-1
end()
}}
  })
Object.defineProperty(window, 'a', {
  get() {
  if (oppoloce == 6 || locatione == 1) {} else {
oppoloce = oppoloce+1
locatione = locatione-1
end()
  }
  }})
Object.defineProperty(window, 's', {
  get() {
if (ylocatione == 5) {} else {
yoppoloce = yoppoloce-1
ylocatione = ylocatione+1
end()
}
  }})
Object.defineProperty(window, 'd', {
  get() {
   if (oppoloce == 1 || locatione == 6) {} else {
oppoloce = oppoloce-1
locatione = locatione+1
end()
}
  }})
fucntion inter(direction) {

}


function end() {
clear()

if(ylocatione == 1){console.log(map.substring(oppoloce)+'&'+map.substring(locatione))} else {console.log(map.substring(oppoloce-1)+map.substring(locatione))}
if(ylocatione == 2){console.log(map.substring(oppoloce)+'&'+map.substring(locatione))} else {console.log(map.substring(oppoloce-1)+map.substring(locatione))}
if(ylocatione == 3){console.log(map.substring(oppoloce)+'&'+map.substring(locatione))} else {console.log(map.substring(oppoloce-1)+map.substring(locatione))}
if(ylocatione == 4){console.log(map.substring(oppoloce)+'&'+map.substring(locatione))} else {console.log(map.substring(oppoloce-1)+map.substring(locatione))}
if(ylocatione == 5){console.log(map.substring(oppoloce)+'&'+map.substring(locatione))} else {console.log(map.substring(oppoloce-1)+map.substring(locatione))}
}


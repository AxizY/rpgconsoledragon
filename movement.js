
function startgame() {
map = '######'
locatione = 1
oppoloce = 6
ylocatione = 1
yoppoloce = 6
if(ylocatione == 1){console.log(map.substring(oppoloce)+'&'+map.substring(locatione))} else {console.log(map.substring(oppoloce-1)+map.substring(locatione))}
if(ylocatione == 2){console.log(map.substring(oppoloce)+'&'+map.substring(locatione))} else {console.log(map.substring(oppoloce-1)+map.substring(locatione))}
if(ylocatione == 3){console.log(map.substring(oppoloce)+'&'+map.substring(locatione))} else {console.log(map.substring(oppoloce-1)+map.substring(locatione))}
if(ylocatione == 4){console.log(map.substring(oppoloce)+'&'+map.substring(locatione))} else {console.log(map.substring(oppoloce-1)+map.substring(locatione))}
if(ylocatione == 5){console.log(map.substring(oppoloce)+'&'+map.substring(locatione))} else {console.log(map.substring(oppoloce-1)+map.substring(locatione))}
}

function move(side) {
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



function end() {
clear()

if(ylocatione == 1){console.log(map.substring(oppoloce)+'&'+map.substring(locatione))} else {console.log(map.substring(oppoloce-1)+map.substring(locatione))}
if(ylocatione == 2){console.log(map.substring(oppoloce)+'&'+map.substring(locatione))} else {console.log(map.substring(oppoloce-1)+map.substring(locatione))}
if(ylocatione == 3){console.log(map.substring(oppoloce)+'&'+map.substring(locatione))} else {console.log(map.substring(oppoloce-1)+map.substring(locatione))}
if(ylocatione == 4){console.log(map.substring(oppoloce)+'&'+map.substring(locatione))} else {console.log(map.substring(oppoloce-1)+map.substring(locatione))}
if(ylocatione == 5){console.log(map.substring(oppoloce)+'&'+map.substring(locatione))} else {console.log(map.substring(oppoloce-1)+map.substring(locatione))}
}
  /* How can I put Multiple getters in a variable or just find a easy way.
const m = {
  get r() {
  if (oppoloce == 1 || locatione == 6) {} else {
oppoloce = oppoloce-1
locatione = locatione+1
end()
  }}
  get l() {
if (oppoloce == 6 || locatione == 1) {} else {
oppoloce = oppoloce+1
locatione = locatione-1
 end()
}}
  get u() {
  if (ylocatione == 1) {} else {
ylocatione = ylocatione-1
yoppoloce = yoppoloce+1 
end()
  }}

  get d() {
  if (ylocatione == 5) {} else {
ylocatione = ylocatione+1
yoppoloce = yoppoloce-1
end()
}}}
*/

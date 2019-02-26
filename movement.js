
function startgame() {
player = '&'
map = '######'
locatione = 1
oppoloce = 6
ylocatione = 1
yoppoloce = 6
if(ylocatione == 1){console.log(map.substring(oppoloce)+player+map.substring(locatione))} else {console.log(map.substring(oppoloce-1)+map.substring(locatione))}
if(ylocatione == 2){console.log(map.substring(oppoloce)+player+map.substring(locatione))} else {console.log(map.substring(oppoloce-1)+map.substring(locatione))}
if(ylocatione == 3){console.log(map.substring(oppoloce)+player+map.substring(locatione))} else {console.log(map.substring(oppoloce-1)+map.substring(locatione))}
if(ylocatione == 4){console.log(map.substring(oppoloce)+player+map.substring(locatione))} else {console.log(map.substring(oppoloce-1)+map.substring(locatione))}
if(ylocatione == 5){console.log(map.substring(oppoloce)+player+map.substring(locatione))} else {console.log(map.substring(oppoloce-1)+map.substring(locatione))}
}
/*
function move() {
var direct = prompt('Command?', 'Command?')
if(direct == 'r') {if (oppoloce == 1 || locatione == 6) {} else {
oppoloce = oppoloce-1
locatione = locatione+1
end()
}}
if(direct == 'l') {if (oppoloce == 6 || locatione == 1) {} else {
oppoloce = oppoloce+1
locatione = locatione-1
end()
}}
if(direct == 'd') {if (ylocatione == 5) {} else {
yoppoloce = yoppoloce-1
ylocatione = ylocatione+1
end()
}}
if(direct == 'u') {if (ylocatione == 1) {} else {
yoppoloce = yoppoloce+1
ylocatione = ylocatione-1
end()

}} else if(direct == 'close') {return}
move()}
*/
var m = {
  get w() {
    if (ylocatione == 1) {} else {
yoppoloce = yoppoloce+1
ylocatione = ylocatione-1
end()
}
  },
  get a() {
    if (oppoloce == 6 || locatione == 1) {} else {
oppoloce = oppoloce+1
locatione = locatione-1
end()
  }},
  get s() {
    if (ylocatione == 5) {} else {
yoppoloce = yoppoloce-1
ylocatione = ylocatione+1
end()
}
  },
  get d() {
    if (oppoloce == 1 || locatione == 6) {} else {
oppoloce = oppoloce-1
locatione = locatione+1
end()
}
  }
}
function end() {
clear()

if(ylocatione == 1){console.log(map.substring(oppoloce)+player+map.substring(locatione))} else {console.log(map.substring(oppoloce-1)+map.substring(locatione))}
if(ylocatione == 2){console.log(map.substring(oppoloce)+player+map.substring(locatione))} else {console.log(map.substring(oppoloce-1)+map.substring(locatione))}
if(ylocatione == 3){console.log(map.substring(oppoloce)+player+map.substring(locatione))} else {console.log(map.substring(oppoloce-1)+map.substring(locatione))}
if(ylocatione == 4){console.log(map.substring(oppoloce)+player+map.substring(locatione))} else {console.log(map.substring(oppoloce-1)+map.substring(locatione))}
if(ylocatione == 5){console.log(map.substring(oppoloce)+player+map.substring(locatione))} else {console.log(map.substring(oppoloce-1)+map.substring(locatione))}
}

function sg() {
map = '######'
locatione = 1
oppoloce = 6
ylocatione = 1
y = 6
//yoppoloce = 6
end()
var x
window.addEventListener("keydown", checkKeyPress, false);
}
//var settings = {
  //movingstyle: ['input: w, a s, and d', 'direction: u, d, l, and r'],
 
//}
//fix
//var changesettings = {
  //changesettings.movingstyle[]
//}


function checkKeyPress(key) {
  if(key.keyCode == "87") {
    if (ylocatione == 1) {} else {
    ylocatione = ylocatione-1
    end()
}
}

 
 //a
  
 if (key.keyCode == "65") {
   if (oppoloce == 6 || locatione == 1) {} else {
oppoloce = oppoloce+1
locatione = locatione-1
end()
  }
 }

    //w

  //s
 if (key.keyCode == "83") {
if (ylocatione == 5) {} else {
ylocatione = ylocatione+1
end()
}
 }

  //d
   if (key.keyCode == "68") {
     
   if (oppoloce == 1 || locatione == 6) {} else {
oppoloce = oppoloce-1
locatione = locatione+1
end()
  }
 }
}


function end() {
console.clear()
if(ylocatione == 1){console.log(map.substring(oppoloce)+'&'+map.substring(locatione))} else {console.log(map.substring(oppoloce-1)+map.substring(locatione))}
if(ylocatione == 2){console.log(map.substring(oppoloce)+'&'+map.substring(locatione))} else {console.log(map.substring(oppoloce-1)+map.substring(locatione))}
if(ylocatione == 3){console.log(map.substring(oppoloce)+'&'+map.substring(locatione))} else {console.log(map.substring(oppoloce-1)+map.substring(locatione))}
if(ylocatione == 4){console.log(map.substring(oppoloce)+'&'+map.substring(locatione))} else {console.log(map.substring(oppoloce-1)+map.substring(locatione))}
if(ylocatione == 5){console.log(map.substring(oppoloce)+'&'+map.substring(locatione))} else {console.log(map.substring(oppoloce-1)+map.substring(locatione))}
}

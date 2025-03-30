function testFunc(){
    testCheck.hidden = !testCheck.hidden
    testCheck.textContent=tab[getRandomInt(3)]
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
const tab=["fwaeh","night","knit"]

/*
for (i of tab) {
    console.log(tab[getRandomInt(3)])
}*/


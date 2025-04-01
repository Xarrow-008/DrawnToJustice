function testFunc(){
    testCheck.textContent="check good for now"
    printOneByOne(phraseFeatures(getCriminal(allFeatures,currentFeatures)),testCheck)
}   
function randint(max) {
    return Math.floor(Math.random() * max);
}

const face = ["normal","round"]
const eyes = ["angry","sad"]
const hair = ["spiky","very short","no"]
const mouth = ["smirking","big","down turned"]
const scar = [" and a scar",""]
const tattoo = [", plus a tattoo",""]
const colorHair = ["black","orange","blond","red","brown"]
const colorEyes = ["blue","green","black","brown","red","veiny"]
const colors = [colorHair,colorEyes]
const allFeatures = [face,eyes,hair,mouth,scar,tattoo]
let currentFeatures = []

function pushRanFeature(list,feature,colors) {
    randFeature = randint(feature.length)
    if (feature === hair && randFeature === 0){ //                                  If on hair and hair can have a color
        list.push(`${colors[0][randint(colors[0].length)]} ${feature[randFeature]}`) //Push a random color and the feature description
    } else if (feature === eyes) { //                                               Basically same for eyes (same syntax too :) )
        list.push(`${colors[1][randint(colors[1].length)]} ${feature[randFeature]}`)
    } else {
        list.push(feature[randFeature])
    }
    return list
}

function getCriminal(allFeatures,currentFeatures){
    currentFeatures = []
    for (i of allFeatures) {
        pushRanFeature(currentFeatures,i,colors)
    }
    return currentFeatures
}

function phraseFeatures(features) {
    phrase = `He had a ${features[0]} face, ${features[1]} eyes and ${features[2]} hair. I think he had a ${features[3]} mouth${features[4]}${features[5]}.`
    return phrase
}

function setOutput(outputfield,outputContent) {
    outputfield.textContent = outputContent;
  }
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function printOneByOne(output,string) {
    let result = '';
    for (let i of output) {
        result += i;
        await sleep(30)
        string.textContent = result
        if (i == ",") {
            await sleep(300)
        }
        if (i == ".") {
            await sleep(500)
        }
    }
}

/*
for (i of tab) {
    console.log(tab[randint(3)])
}*/


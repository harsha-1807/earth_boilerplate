var bodyvar = document.body
// four buttons
var consumptionVar = document.getElementById("consumption")
console.log(consumptionVar);

var climatevar = document.getElementById("climate")
console.log(climatevar);

var resourcesvar = document.getElementById("resources")
console.log(resourcesvar);

var peoplevar = document.getElementById("people")
console.log(peoplevar);

 // save text 
var savetext = document.getElementById("save")

//frame
var frame = document.getElementById("frame")

//variable declaration is done.......

consumptionVar.onclick=()=>{
    //background
    bodyvar.style.background= "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/food-wastage-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize= "100% 100%"

    //frame
    frame.scr="https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

    //text
    savetext.innerHTML="Do your bit! Shop only what you need,eat only what you need and always save the leftovers."

    //button
    consumptionVar.style.background="#27AE60"
    climatevar.style.background="transparent"
    resourcesvar.style.background="transparent"
    peoplevar.style.background="transparent"
}
climatevar.onclick=()=>{
    //background
    bodyvar.style.background= "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/climate-change-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize= "100% 100%"

    //frame
    frame.scr="https://www.theworldcounts.com/embed/challenges/23?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

    //text
    savetext.innerHTML="Do your bit! Save trees, use renewable energy sources and prefer to travel green."

    //button
    climatevar.style.background="#337BDD"
    consumptionVar.style.background="#transparent"
    resourcesvar.style.background="transparent"
    peoplevar.style.background="transparent"
}
resourcesvar.onclick=()=>{
    bodyvar.style.background="url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/natural-resources-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize= "100% 100%"


    frame.scr="https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

    savetext.innerHTML="Do your bit! Avoid all things plastic. Believe in Reduce, Reuse and Recycle"

    resourcesvar.style.background='#F1A953'
    consumptionVar.style.background="transparent"
    climatevar.style.background="transparent"
    peoplevar.style.background="transparent"
}
peoplevar.onclick=()=> {
    bodyvar.style.background="url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/poverty-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize= "100% 100%"

    frame.scr="https://www.theworldcounts.com/embed/challenges/2?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

    savetext.innerHTML="Do your bit! Never waste  food.Rather offer it to people or animals who are in need."

    peoplevar.style.background= "#D06961"
    consumptionVar.style.background="transparent"
    climatevar.style.background="transparent"
    resourcesvar.style.background="transparent"
    
}

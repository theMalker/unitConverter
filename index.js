/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const length = document.getElementById("length")
const buttonEl = document.getElementById("con-btn")
const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length-res")
const volEl = document.getElementById("vol-res")
const massEl = document.getElementById("mass-res")
let gotNum = []

let feetNum = []
let metNum = []
let litNum = []
let galNum = []
let kgNum = []
let pndNum =[]

// lengthEl.innerHTML = `<p>Only use numbers.</p>`
// volEl.innerHTML = `<p>Only use numbers.</p>`
// massEl.innerHTML = `<p>Only use numbers.</p>`

buttonEl.addEventListener("click", function() {
        gotNum.push(inputEl.value)
        console.log(gotNum)
        convert()
        renderResult()
})

function convert() {
    feetNum = gotNum[gotNum.length -1] * 3.281
    metNum = gotNum[gotNum.length -1] * 0.3048
    litNum = gotNum[gotNum.length -1] * 3.7854
    galNum = gotNum[gotNum.length -1] * 0.264
    kgNum = gotNum[gotNum.length -1] * 0.4535
    pndNum = gotNum[gotNum.length -1] * 2.204
}

// console.log(gotNum)

function renderResult() {
    let newLength = ""
    let newVol = ""
    let newMass = ""
    
    for (let i = 0; i < gotNum.length; i++) {
        newLength = `<p>${gotNum[i]} meters = ${feetNum.toFixed(3)} feet 
                        | ${gotNum[i]} feet = ${metNum.toFixed(3)} meters</p>`
        newVol = `<p>${gotNum[i]} liters = ${galNum.toFixed(3)} gallons 
                        | ${gotNum[i]} gallons = ${litNum.toFixed(3)} liters</p>`
        newMass = `<p>${gotNum[i]} kilos = ${pndNum.toFixed(3)} pounds 
                        | ${gotNum[i]} pounds = ${kgNum.toFixed(3)} kilos</p>`
     }
     lengthEl.innerHTML = newLength
     volEl.innerHTML = newVol
     massEl.innerHTML = newMass
}

//variable declaration
let greeting = "Hello";
greeting += ", User!";
console.log(greeting);

const PlancksConstant = 6.62607015E-34;{
console.log('Plancks Constant:' + PlancksConstant + 'J.s')
}
 
//function

function Energy(frequency) {
}
console.log(Energy(10));


const divide = (a,b) => (a/b)
console.log(divide(9,3))


//loops

const drugs = { name: 'Amoxil', Use: 'Bacterial Infection', Action:'Kills bacterial cell wall'};
for(let key in drugs) {
    console.log(`${key}: ${drugs[key]}`)
}

const Drugs = ['Paracetamol for pain','Amoxil for Infection','Daflon for Hemorrhoids'];
for(let Drug of Drugs){
    console.log(`Take ${Drug}`);
}

//DOM interactions

// 1. Change CSS style

function changeStyle (){
const text = document.getElementById('h3');
text.style.color = 'blue';
text.style.fontSize = '25px';
}

//2. change a class

function changeClass () {
const text = document.getElementById('change')
text.classList.add('changed');
text.classList.remove('change')
}

//3. change content with a button click

const container = document.getElementById("container");
container.innerHTML = "<p>THIS WAS ADDED</p>"; // Adds a paragraph


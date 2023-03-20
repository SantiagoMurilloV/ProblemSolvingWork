

const adultEstudents = {}; 
const teenEstudents = {};

// the arrays 'names' and 'age' are the data entered by the user at the time of registration
let names = ['valen', 'santiago','laura',"Ana","Pedro","Maria", "Juan", "Luis", "Sofia", "Carlos", "Monica", "Jorge", 
            "Fernando", "Isabel"];
let ages = [18,20,17,16,19,15,17,17,20,22,24,24,26,27];

if(names.length === ages.length){ 
    for(i=0; i < names.length; i++){
        if(ages[i] < 18 && names.length < 25 ){
        teenEstudents[names[i]] = ages[i];
        }else {
        adultEstudents[names[i]] = ages[i];
        }
    }
}
console.log('\nyounger students are: \n');
console.log(teenEstudents)
console.log('\nAdult students are: \n');
console.log(adultEstudents)



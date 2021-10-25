// Code your solutions in this file
const names = ["Lisa","Caitlyn","Jan"]
function writeCards(names){
    const newArray = []
    for (let i=0; i<names.length; i++){
        newArray.push (`Thank You, ${names[i]}, for the wonderful surprise gift!`);
        
    }
    return newArray
    
}




function countDown(){
    for (let count=10; count>=0; count--){
        console.log(count);
    }
}
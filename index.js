// Code your solutions in this file

/*
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`)
    debugger;
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for( let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts;
}
wrapGifts(gifts); 
*/

// assignment : for loop
const names = ["Babe", "Yogi", "Mickey"];
const event = "birthday";
function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        messages[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    };
    return messages;
};

//assignment : while loop
const integer = [];
function countDown(integer) {
    let i = 10;
    while (i >= 0) {
        console.log(i--);
    };
    return integer;
};
    
console.log(countDown());
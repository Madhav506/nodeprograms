/******************************************************************************
 *  Execution       :   9. default node         cmd> node deckOfCards.js 
 * 
 *  Purpose         :  Shuffling deck of cards and distributing 9 cards to 4 players and printing them in 2D array
 * 
 *  @description    
 * 
 *  @file           : deckOfCards.js
 *  @overview       : Shuffling deck of cards and distributing 9 cards to 4 players and printing them in 2D array
 *  @author         : Madhav506 <madhavipasupuleti506@gmail.com>
 *  @version        : 1.0
 *  @since          : 14-09-2018.
 *
 ******************************************************************************/
fs = require('fs');
var suit = ["Clubs", "Diamonds", "Hearts", "Spades"];
var rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
var deck = new Array();//creating a new array

//to display the suit and rank of cards
for (var i = 0; i < suit.length; i++) {
    for (var j = 0; j < rank.length; j++) {
        var temp = "";
        deck.push(temp + rank[j] + " " + suit[i]);
    }
}
//console.log(deck);

/**
 * shuffling deck of cards
 */
for (var i = 0; i < deck.length; i++) {
    var index = parseInt(Math.random() * deck.length);
    var temp = deck[i];
    deck[i] = deck[index];
    deck[index] = temp;
}
// console.log("The shuffled deck of cards are :");
//console.log(deck);

var x = 0; var y = 9;
var array = [];
var arr1 = [];

/**
 * distributing deck of cards to 4 players such that each receive 9 cards
 */
for (var i = 0; i < 4; i++) {
    var array = [];//reintializing array
    for (var j = x; j < y; j++) {
        array.push(deck[j]);//pushing the deck of cards to array
    }
    console.log("the 9 cards distributed to a player are ");

    console.log(array);

    x = x + 9;
    y = y + 9;

    while (array.length) arr1.push(array.splice(0, 10));

}
console.log("The cards received by four players displayed in 2D array is ");

console.log(arr1);

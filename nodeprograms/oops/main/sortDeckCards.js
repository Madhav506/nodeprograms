/******************************************************************************
 *  Execution       :   10. default node         cmd> node sortDeckOfCards.js 
 * 
 *  Purpose         :  Shuffling deck of cards and distributing 9 cards to 4 players and printing them in queue and linkedlist
 * 
 *  @description    
 * 
 *  @file           : sortDeckOfCards.js
 *  @overview       : Shuffling deck of cards and distributing 9 cards to 4 players and printing them in queue and linkedlist
 *  @author         : Madhav506 <madhavipasupuleti506@gmail.com>
 *  @version        : 1.0
 *  @since          : 14-09-2018.
 *
 ******************************************************************************/
fs = require('fs');
var utility = require('../utility/sortDeck.js');
var utility1 = require('/home/bridgeit/Madhavi_p/nodeprograms/datastructures/utility/linkedLists.js');
var utility2 = require('/home/bridgeit/Madhavi_p/nodeprograms/datastructures/utility/queue.js');
var list = new utility1();
var queue = new utility2();

var suit = ["C(♣)", "D(♦)", "H(♥)", "S(♠)"];
var rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
var deck = new Array();

for (var i = 0; i < suit.length; i++) {
    for (var j = 0; j < rank.length; j++) {
        var temp = "";
        deck.push(temp+ rank[j] + suit[i]);
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

var array2 = [];

/**
 * distributing deck of cards to 4 players such that each receive 9 cards
 */
for (var i = 0; i < 4; i++) {
    var array = [];

    for (var j = x; j < y; j++) {
        array.push(deck[j]);
    }

    var sorter = utility.mySort('A23456798910JKQ');
    array.sort(sorter);
   // console.log("the cards distributed to players are in manner ")
    console.log(array);
    array2.push(array);
    x = x + 9;
    y = y + 9;

}
console.log("  ");
for (var i = 0; i < array2.length; i++) {
    list.add(array2[i]);
}
var k = list.printList();
console.log("The cards distributed to players in list are :\n " + k);

for (var i = 0; i < array2.length; i++) {
    queue.enqueue(array2[i]);//pushing the array to queue 
}
//queue.dequeue(array2[0]);

var res = queue.printQueue();
console.log("The cards distributed to players  in queue is  \n " + res);

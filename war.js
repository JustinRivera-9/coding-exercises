const player1 = 'Justin';
const player2 = 'Victoria';

const cards = {
    suit: ['Spades', 'Clubs', 'Hearts', 'Diamonds'],
    number: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'],
  };

// generates random number to be used for array index
const randomNum = arr => {
      let random = Math.floor(Math.random() * arr.length);
      return random;
  };
  
// gets a random index from number array  
const getNumber = () => {
    const pickNumber = cards.number[randomNum(cards.number)]; //easier way to write this?
    return pickNumber;
  };

//console.log(getNumber()) //test log

// gets a random index from suit array
const getSuit = () => {
    const pickSuit = cards.suit[randomNum(cards.suit)]; //easier way to write this?
    return pickSuit;
  };

//console.log(getSuit()) //test log

// combines suit and number to give you a card
const playCard = (player, func1, func2) => {
  let card = `${player} has played a ${func1()} of ${func2()}`;
  console.log(card)
};

const playGame = () => {
  let player1Hand = playCard(player1, getNumber, getSuit);
  let player2Hand = playCard(player2, getNumber, getSuit);
};

playGame()


// to compare cards - use the index of the array for what wins
// talk about issue I was having at playCard() function


//////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // ATTEMPT USING OBJECTS
// const players = {
//   player1: {
//     name: 'Justin',
//     cardNumber: []
//   },
//   player2: {
//     name: 'Victoria',
//     cardNumber: []
//   }
// };

// const cards = {
//     suit: ['Spades', 'Clubs', 'Hearts', 'Diamonds'],
//     number: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'],
//   };

// // generates random number to be used to assign suit and number
// const randomNum = arr => {
//       let random = Math.floor(Math.random() * arr.length);
//       return random;
//   };
  
// const getNumber = () => {
//     const pickNumber = cards.number[randomNum(cards.number)]; //easier way to write this?
//     return pickNumber;
//   };

// const getSuit = () => {
//     const pickSuit = cards.suit[randomNum(cards.suit)]; //easier way to write this?
//     return pickSuit;
//   };


// const playCard = (player, func1, func2) => {
//   const card = `${player} has played a ${func1()} of ${func2()}`;
//   return card;
// };

// const playGame = () => {
//   console.log(playCard(players.player1.name, getNumber, getSuit));
//   console.log(playCard(players.player2.name, getNumber, getSuit));
// };

// playGame()


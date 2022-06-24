const player1 = 'Justin';
const player2 = 'Victoria';

const cards = {
    suit: ['Spades', 'Clubs', 'Hearts', 'Diamonds'],
    number: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'],
  };

// generates random number to be used for array index
const randomNum = (maxNum) => {
    return Math.floor(Math.random() * maxNum);
};
  
// gets a random index from number array  
const getNumberIndex = () => {
  return randomNum(cards.number.length);
};

//console.log(getNumber()) //test log

// gets a random index from suit array
const getSuitIndex = () => {
  return randomNum(cards.suit.length);
  };

//console.log(getSuit()) //test log

// combines suit and number to give you a card
const playCard = (player) => {
  const result = getNumberIndex();

  let card = `${player} has played a ${cards.number[result]} of ${cards.suit[getSuitIndex()]}`;
  console.log(card);
  return result;
};

const playRound = () => {
  let player1NumberIndex = playCard(player1);
  let player2NumberIndex = playCard(player2);
  if (player1NumberIndex === player2NumberIndex) {
    console.log('You have tied.');
  } else if (player1NumberIndex > player2NumberIndex) {
    console.log(`${player1} has won!`);
  } else {
    console.log(`${player2} has won!`)
  }
};

playRound()
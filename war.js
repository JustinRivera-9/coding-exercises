let cards = {
    suit: ['Spades', 'Clubs', 'Hearts', 'Diamonds'],
    number: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'],
  };
  
const randomNum = arr => {
      let random = Math.floor(Math.random() * arr.length);
      return random;
    };
  
const getNumber = () => {
    const pickNumber = cards.number[randomNum(cards.number)]; //feel like there is an easier way to write this
    return pickNumber;
  };
  
const getSuit = () => {
    const pickSuit = cards.suit[randomNum(cards.suit)]; //feel like there is an easier way to write this
    return pickSuit;
  };
  
const getCard = (player, getNumber, getSuit) => {
    return `${player} has played a ${getNumber} of ${getSuit}`;
  }
  
console.log(getCard('player 1', getNumber, getSuit))
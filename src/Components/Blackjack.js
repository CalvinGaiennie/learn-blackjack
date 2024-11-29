import { useState } from "react";
import { GameControls } from "./GameControls";
import { PlayerHand } from "./PlayerHand";
import { DealerHand } from "./DealerHand";

export function Blackjack() {
  function startNewGame() {
    setDealerCards([]);
    setPlayerCards([]);
    dealCard("player");
    dealCard("dealer");
    dealCard("dealer");
  }

  const [dealerCards, setDealerCards] = useState([]);
  const [playerCards, setPlayerCards] = useState([]);

  const possibleCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];

  function dealCard(hand) {
    const randomNumber = Math.floor(Math.random() * 12);
    const card = possibleCards[randomNumber];

    if (hand === "dealer") {
      setDealerCards((prevCards) => {
        const updatedCards = [...prevCards, card];
        console.log("Dealer Card:", card);
        checkHand("dealer", updatedCards);
        return updatedCards;
      });
    } else if (hand === "player") {
      setPlayerCards((prevCards) => {
        const updatedCards = [...prevCards, card];
        console.log("Player Card:", card);
        checkHand("player", updatedCards);
        return updatedCards;
      });
    }
  }

  function checkHand(hand, cards) {
    const handTotal = cards.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    if (handTotal > 21) {
      alert(`${hand} busts.`);
      startNewGame();
    }
    if (hand === "dealer") {
      console.log("Dealer Hand", handTotal);
    } else if (hand === "player") {
      console.log("Player Hand", handTotal);
    }
    return handTotal;
  }
  function dealerTurn() {
    const total = checkHand("dealer", dealerCards);
    if (total < 17) {
      const newHand = dealCard("dealer");
      console.log(newHand);
      alert(` newest dealer hand:${newHand}`);
    }
  }
  return (
    <div>
      <DealerHand dealerCards={dealerCards} />
      <PlayerHand playerCards={playerCards} />
      <GameControls
        onDealCard={dealCard}
        onStartNewGame={startNewGame}
        onDealerTurn={dealerTurn}
      />
    </div>
  );
}

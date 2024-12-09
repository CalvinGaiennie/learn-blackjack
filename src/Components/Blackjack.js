import { useState } from "react";
import { GameControls } from "./GameControls";
import { PlayerHand } from "./PlayerHand";
import { DealerHand } from "./DealerHand";

export function Blackjack() {
  //State
  const [dealerCards, setDealerCards] = useState([]);
  const [playerCards, setPlayerCards] = useState([]);
  const [gameStatus, setGameStatus] = useState("");

  //Variables
  const possibleCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];

  //functions
  function startNewGame() {
    setDealerCards([]);
    setPlayerCards([]);
    dealCard("player");
    dealCard("dealer");
    dealCard("player");
    dealCard("dealer");
    setGameStatus("");
  }

  function dealCard(hand) {
    const randomNumber = Math.floor(Math.random() * 12);
    const card = possibleCards[randomNumber];

    if (hand === "dealer") {
      setDealerCards((prevCards) => {
        const updatedCards = [...prevCards, card];
        checkHand("dealer", updatedCards);
        return updatedCards;
      });
    } else if (hand === "player") {
      setPlayerCards((prevCards) => {
        const updatedCards = [...prevCards, card];
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
      setGameStatus(`${hand} busts`);
    }

    return handTotal;
  }
  function dealerTurn() {
    const total = checkHand("dealer", dealerCards);
    let updatedCards;
    if (total < 17) {
      updatedCards = dealCard("dealer");
    }
    checkForWinner(updatedCards);
  }

  function checkForWinner(updatedDealerCards) {
    const playerTotal = checkHand("player", playerCards);
    const dealerTotal = checkHand("dealer", updatedDealerCards || dealerCards);
    //I need to fix the stale state issue ////////
    if (playerTotal > dealerTotal) {
      setGameStatus(
        () =>
          `Player Wins! Player Total: ${playerTotal}. Dealer total: ${dealerTotal}. `
      );
    } else {
      setGameStatus(
        () =>
          `Dealer Wins! Dealer total: ${dealerTotal}. Player Total: ${playerTotal}.`
      );
    }
    console.log(
      "endgame",
      "Player Total:",
      playerTotal,
      "Dealer Total:",
      dealerTotal
    );
  }
  return (
    <div>
      <DealerHand dealerCards={dealerCards} />
      <PlayerHand playerCards={playerCards} />
      <GameControls
        onDealCard={dealCard}
        onStartNewGame={startNewGame}
        onDealerTurn={dealerTurn}
        gameStatus={gameStatus}
        onGameStatus={setGameStatus}
      />
    </div>
  );
}

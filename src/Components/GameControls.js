export function GameControls({ onDealCard, onStartNewGame, checkHand }) {
  return (
    <div>
      <h2>Game Controls</h2>
      <div className="flex">
        <button onClick={() => onStartNewGame()}>Start New Game</button>
        <button onClick={() => onDealCard("player")}>Hit</button>
      </div>
    </div>
  );
}

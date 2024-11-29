export function GameControls({ onDealCard, onStartNewGame, onDealerTurn }) {
  return (
    <div>
      <h2>Game Controls</h2>
      <div className="flex">
        <button onClick={() => onStartNewGame()}>Start New Game</button>
        <button onClick={() => onDealCard("player")}>Hit</button>
        <button onClick={() => onDealerTurn()}>Stay</button>
      </div>
    </div>
  );
}

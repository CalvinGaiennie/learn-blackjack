export function PlayerHand({ playerCards }) {
  return (
    <div className="hand">
      <h2>Your Hand</h2>
      <div className="flex">
        {playerCards.map((card, index) => {
          return (
            <p className="card" key={index}>
              {card}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export function DealerHand({ dealerCards }) {
  return (
    <div className="hand">
      <h2>Dealer's Hand</h2>
      <div className="flex">
        <p className="card" key={1}>
          {dealerCards[0]}
        </p>
        {dealerCards.map((card, index) => {
          if (index !== 0) {
            return (
              <p className="card" key={index}>
                {card}
              </p>
            );
          }
        })}
      </div>
    </div>
  );
}

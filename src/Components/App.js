import "../App.css";
import { useReducer } from "react";
import { Header } from "./Header";
import { Blackjack } from "./Blackjack";
import { Strategy } from "./Strategy";

const initialState = { dealerCards: [], playerCards: [], gameStatus: "" };

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state };
    default:
      throw new Error("Action Unknown");
  }
}

export default function App() {
  const [{ dealerCards, playerCards, gameStatus }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div className="App">
      <Header />
      <div className="blackjack flex">
        <Blackjack dispatch={dispatch} />
        <Strategy />
      </div>
    </div>
  );
}

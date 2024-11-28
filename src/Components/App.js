import "../App.css";
import { Header } from "./Header";
import { Blackjack } from "./Blackjack";
import { Strategy } from "./Strategy";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="blackjack flex">
        <Blackjack />
        <Strategy />
      </div>
    </div>
  );
}

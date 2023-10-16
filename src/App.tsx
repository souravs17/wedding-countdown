import "./App.css";
import { countdown } from "./countdown/countdown";
import Clock from "./countdown/clock";

function App() {
  countdown();
  return <Clock />;
}

export default App;

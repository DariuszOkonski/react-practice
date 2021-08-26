import './App.css';
import Die from './DiceGame/Die';

function App() {
  return (
    <div className="App">

        <Die face="five" />
        <Die face="six" />
        <Die face="four" />

    </div>
  );
}

export default App;
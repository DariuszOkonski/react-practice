import './App.css';
import Hello from './Hello';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Hello to="Ringo" from="Paul" />

        <Hello to="Cher" from="Sonny" />

      </header>
    </div>
  );
}

export default App;

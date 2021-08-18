import './App.css';
import Hello from './Hello';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Hello 
          to="Ringo" 
          from="Paul" 
          bangs={4}
          img="https://cdn.pixabay.com/photo/2020/04/27/11/31/dog-5099414_960_720.jpg" 
        />

      </header>
    </div>
  );
}

export default App;

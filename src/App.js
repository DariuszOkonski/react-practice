import './App.css';
import Machine from './slotMachines/Machine';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Machine 
          s1="x"
          s2="y"
          s3="z"
        />
        <Machine 
          s1="z"
          s2="z"
          s3="z"
        />
        
        <Machine 
          s1="x"
          s2="x"
          s3="z"
        />

      </header>
    </div>
  );
}

export default App;

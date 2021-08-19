import './App.css';
import Machine from './slotMachines/Machine';

function App() {
  return (
    <div className="App">
        <h1>Slot Machines!</h1>

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

    </div>
  );
}

export default App;

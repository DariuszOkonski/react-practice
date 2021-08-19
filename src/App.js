import './App.css';
import Friend from './Friend';

function App() {
  return (
    <div className="App">

      <Friend
        name="Elton"
        hobbies={['Piano', 'Singing', 'Dancing']}
      />        

    </div>
  );
}

export default App;

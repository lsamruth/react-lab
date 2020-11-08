import logo from './logo.svg';
import './App.css';
import ClickCounter from './HOC/ClickCounter';
import HoverCounter from './HOC/HoverCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClickCounter/>
        <HoverCounter/>
      </header>
    </div>
  );
}

export default App;

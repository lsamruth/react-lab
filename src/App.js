import logo from './logo.svg';
import './App.css';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';

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

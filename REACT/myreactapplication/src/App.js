import logo from './logo.svg';
import './App.css';
// component
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is my first react project</h1>
        <ol>
          <li>React</li>
          <li>Node</li>
        </ol>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

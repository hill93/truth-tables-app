import logo from './logo.svg';
import './App.css';
import { useDeps } from './business/context/DepsContext';

function App() {
    const input = '~((B&A)=>(Cv(D<=>E)))';//'~((A&B)<=>~G)';//'(~A&~~B)'//'(~((A&B)<=>~G)=>~((A&B)<=>~G))';

    const {truthTableManager} = useDeps();

    const {getTruthTable, printErrors} = truthTableManager();

    getTruthTable(input);
    printErrors();

  return (
    <div className="App">
      <header className="App-header">
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

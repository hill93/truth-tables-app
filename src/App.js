import logo from './logo.svg';
import './App.css';
import { defaultDeps } from './business/context/Dependencies';

const App = services => {
    const input = '~((B&A)=>(Cv(D<=>E)))';//'~((A&B)<=>~G)';//'(~A&~~B)'//'(~((A&B)<=>~G)=>~((A&B)<=>~G))';

    console.log(services);

    const {truthTableManager} =  defaultDeps;

    console.log(truthTableManager);

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

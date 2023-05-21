import logo from './logo.svg';
import './App.css';
import { defaultDeps } from './business/context/Dependencies';

const App = services => {
    const input = {conclusion: '(((A&B)=>(CvD))<=>(E&(Fv~G)))', premises: []};//'~((B&A)=>(Cv(D<=>E)))';//'~((A&B)<=>~G)';//'(~A&~~B)'//'(~((A&B)<=>~G)=>~((A&B)<=>~G))';

    // const input = {
    //   premises: [
    //     '(A=>B)',
    //     '(AvC)',
    //     'D'
    //   ],
    //   conclusion: 'G'
    // }

    const {truthTableManagerCreator = defaultDeps.truthTableManagerCreator} =  services;

    const {createManager, printErrors} = truthTableManagerCreator({});

    const manager = createManager(input);
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

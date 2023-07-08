import './App.css';
import { defaultDeps } from './business/context/Dependencies';
import TruthTableInput from './components/input/TruthTableInput';

const App = services => {
    const input = {conclusion: /*''*/'(((A&B)=>(CvD))<=>(E&(Fv~G)))', premises: []};//'~((B&A)=>(Cv(D<=>E)))';//'~((A&B)<=>~G)';//'(~A&~~B)'//'(~((A&B)<=>~G)=>~((A&B)<=>~G))';

    // const input = {
    //   premises: [
    //     '(A=>B)',
    //     '(AvC)',
    //     'D'
    //   ],
    //   conclusion: 'G'
    // }

    const {truthTableManagerCreator = defaultDeps.truthTableManagerCreator} =  services;

    const {createManager} = truthTableManagerCreator({});

    const manager = createManager(input);

  return (
    <div className="App">
      <h1>Truth Table Generator</h1>
      <TruthTableInput/>
    </div>
  );
}

export default App;

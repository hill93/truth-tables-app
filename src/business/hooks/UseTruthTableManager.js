import { useState } from 'react';
import { defaultDeps } from '../context/Dependencies';

const useTruthTableManager = services => {
    const [truthTableManager, setTruthTableManager] = useState({});
    
    const {truthTableManagerCreator = defaultDeps.truthTableManagerCreator} =  services;

    const {createManager} = truthTableManagerCreator({});

    const initialiseManager = input => {
        setTruthTableManager({});
        setTruthTableManager(createManager(input));
    }

    const resetManager = () => {
        setTruthTableManager({});
    }

    const userInputUpdaterFactory = (i, j) => {
        return e => {
            truthTableManager.table[i][j].userInput = e.target.value;
            setTruthTableManager(truthTableManager);
            console.log(truthTableManager);
        }
    }

    const checkRowInputCorrect = i => {
        console.log('checking row')
        return truthTableManager.table[i].reduce(
            (acc, curr) => acc && curr.userInput === (curr.truthValue ? 'T' : 'F')
        ,true)
    }

    const checkRowInputFilled = i => {
        return !truthTableManager.table[i].some(x => x.userInput === '');
    }

    return {truthTableManager, initialiseManager, userInputUpdaterFactory, checkRowInputCorrect, resetManager};
}

export default useTruthTableManager;
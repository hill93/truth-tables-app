import { useState } from 'react';
import { defaultDeps } from '../context/Dependencies';

const useTruthTableManager = services => {
    const [truthTableManager, setTruthTableManager] = useState({});
    
    const {truthTableManagerCreator = defaultDeps.truthTableManagerCreator} =  services;

    const {createManager} = truthTableManagerCreator({});

    const initialiseManager = input => {
        setTruthTableManager(createManager(input));
    }

    const userInputUpdaterFactory = (i, j) => {
        return input => {
            truthTableManager.table[i][j].userInput = input;
            setTruthTableManager({...truthTableManager});
            console.log(truthTableManager);
        }
    }

    const checkRowInputCorrect = i => {
        console.log('checking row')
        return truthTableManager.table[i].filter(x => x.partType !== 'DetachedLetter').reduce(
            (acc, curr) => acc && curr.userInput === (curr.truthValue ? 'T' : 'F')
        ,true)
    }

    const checkRowInputFilled = i => {
        return !truthTableManager.table[i].filter(x => x.partType !== 'DetachedLetter')
            .some(x => x.userInput === '');
    }

    return {truthTableManager, initialiseManager, userInputUpdaterFactory, checkRowInputCorrect, checkRowInputFilled};
}

export default useTruthTableManager;
import { useState } from 'react';
import { defaultDeps } from '../context/Dependencies';

const useTruthTableManager = services => {
    const [truthTableManager, setTruthTableManager] = useState({});
    
    const {truthTableManagerCreator = defaultDeps.truthTableManagerCreator} =  services;

    const {createManager} = truthTableManagerCreator({});

    const initialiseManager = input => {
        setTruthTableManager(createManager(input));
    }

    return {truthTableManager, initialiseManager};
}

export default useTruthTableManager;
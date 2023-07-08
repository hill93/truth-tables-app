import { defaultDeps } from '../context/Dependencies.js';

const truthTableManagerCreator = services => {
    const { truthTableManagerBuilder = defaultDeps.truthTableManagerBuilder,
        propLogicTreeCreator = defaultDeps.propLogicTreeCreator
    } = services;
    
    const { initialise: initialiseManager,
        addPremiseDataToManager,
        addConclusionDataToManager,
        addTruthTableToManager,
        addErrorToManager,
        removeErrorFromManager,
        getManager
    } = truthTableManagerBuilder({});

    const {createTree} = propLogicTreeCreator({addError: addErrorToManager});

    const emptyInputMsg = 'Please enter a conclusion.'
    const errors = [emptyInputMsg];

    return {
        createManager(input){
            initialiseManager(errors);

            const manager = getManager();

            if(input.conclusion === ''){
                console.log('no conclusion!!!')
                return manager;
            }

            removeErrorFromManager(emptyInputMsg)

            let premiseTrees = [];

            input.premises.forEach(premise =>{
                premiseTrees.push(createTree(premise))
            });

            let conclusionTree = createTree(input.conclusion);

            if(manager.errors.length === 0){
                addPremiseDataToManager(premiseTrees, input)
                addConclusionDataToManager(conclusionTree, input)
                addTruthTableToManager();
            }

            console.log('manager:', manager);
            return manager;
        }
    }
}

export default truthTableManagerCreator;
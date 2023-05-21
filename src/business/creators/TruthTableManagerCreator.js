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

    const emptyInputMsg = 'Please enter an argument or theory.'
    const errors = [emptyInputMsg];

    return {
        printErrors(){
            errors.forEach(x => console.log(`Error: ${x}`))
        },

        createManager(input){
            initialiseManager(errors);

            const manager = getManager();

            if (input !== ''){
                removeErrorFromManager(emptyInputMsg)
            }

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
        }
    }
}

export default truthTableManagerCreator;
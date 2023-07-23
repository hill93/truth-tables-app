import { defaultDeps } from "../context/Dependencies";

const truthTableManagerBuilder = services => {
    const { truthTableMetadataCreator = defaultDeps.truthTableMetadataCreator, 
        truthStackCreator = defaultDeps.truthStackCreator, 
        truthTableCreator = defaultDeps.truthTableCreator,
        truthTableMetadataHelper = defaultDeps.truthTableMetadataHelper
    } = services;

    const {create : createTable} = truthTableCreator({});

    const { addConclusionPrefix, addPremiseSeparator } = truthTableMetadataHelper({});

    let createMetadata;
    let createStack;

    const refreshCreators = () => {
        createMetadata = truthTableMetadataCreator({}).create;
        createStack = truthStackCreator({}).create;
    }

    let manager;

    return {
        initialise(errorList) {
            manager = {premiseData: [], errors: errorList};
        },

        addPremiseDataToManager(premiseTrees, input) {
            let premiseMetadata;

            for (let i = 0; i < premiseTrees.length; i++) {
                refreshCreators();

                if (premiseMetadata) {
                    manager.premiseData[i-1].metadata = addPremiseSeparator(premiseMetadata);
                }

                premiseMetadata = createMetadata(premiseTrees[i], input.premises[i]);

                manager.premiseData.push({
                        stack: createStack(premiseTrees[i]), 
                        metadata: premiseMetadata
                    }
                )
            }
        },

        addConclusionDataToManager(conclusionTree, input) {
            refreshCreators();

            const conclusionMetadata = createMetadata(conclusionTree, input.conclusion);

            addConclusionPrefix(conclusionMetadata);

            manager.conclusionData = {
                stack: createStack(conclusionTree),
                metadata: conclusionMetadata
            };
        },

        addTruthTableToManager() {
            manager.table = createTable(manager);
        },

        addValidityToManager() {
            manager.validity = !manager.table.some(
                row => row.filter(x => x.partType === 'Premise' && x.mainConnective).every(x => x.truthValue)
                    && row.filter(x => x.partType === 'Conclusion' && x.mainConnective).every(x => !x.truthValue)
            );

            console.log('validity', manager.validity)
        },

        getManager() {
            return manager;
        },

        addErrorToManager(offendingSymbol, line, column, msg, input) {
            manager.errors.push({
                offendingSymbol,
                line,
                column,
                msg,
                input
            })
        },

        removeErrorFromManager(errorMsg) {
            manager.errors.splice(manager.errors.indexOf(errorMsg), 1)
        }
    }
}

export default truthTableManagerBuilder;
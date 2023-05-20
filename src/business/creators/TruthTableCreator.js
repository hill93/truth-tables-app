import { defaultDeps } from "../context/Dependencies";

const truthTableCreator = services => {
    const{truthTableHelper = defaultDeps.truthTableHelper} = services;

    const{createUniverseList, createTable} = truthTableHelper({});
    
    return {
        create(stack, metadata){
            const universeList = createUniverseList(metadata);

            console.log(universeList);
            
            const truthTable = createTable(universeList, stack, metadata);

            console.log(truthTable);
        }
    }
}

export default truthTableCreator;
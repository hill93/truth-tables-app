import { defaultDeps } from "../context/Dependencies";

const useTruthTableCreator = (services) => {
    const{truthTableHelper} = services || defaultDeps;

    const{createUniverseList, createTable} = truthTableHelper();
    
    return {
        create(stack, metadata){
            const universeList = createUniverseList(metadata);

            console.log(universeList);
            
            const truthTable = createTable(universeList, stack, metadata);

            console.log(truthTable);
        }
    }
}

export default useTruthTableCreator;
import { defaultDeps } from "../context/Dependencies";

const truthTableCreator = services => {
    const{truthTableHelper = defaultDeps.truthTableHelper} = services;

    const{createUniverseList, createTable} = truthTableHelper({});
    
    return {
        create(manager){
            const universeList = createUniverseList(manager);

            console.log(universeList);
            
           // const truthTable = createTable(universeList, stack, metadata);

            //console.log(truthTable);
        }
    }
}

export default truthTableCreator;
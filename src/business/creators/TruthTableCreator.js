import { defaultDeps } from "../context/Dependencies";

const truthTableCreator = services => {
    const{truthTableHelper = defaultDeps.truthTableHelper} = services;

    const{createUniverseList, addTablePart} = truthTableHelper({});
    
    return {
        create(manager){
            const universeList = createUniverseList(manager);

            console.log(universeList);

            let truthTable;

            manager.premiseData.forEach(data => {
                truthTable = addTablePart(universeList, data.stack, data.metadata);
            });

            truthTable = addTablePart(
                universeList, manager.conclusionData.stack, manager.conclusionData.metadata
            );
            
           // const truthTable = createTable(universeList, stack, metadata);

            console.log(truthTable);
        }
    }
}

export default truthTableCreator;
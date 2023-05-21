import { defaultDeps } from "../context/Dependencies";

const truthTableCreator = services => {
    const{truthTableBuilder = defaultDeps.truthTableBuilder} = services;

    const{createUniverseList, addTablePart} = truthTableBuilder({});
    
    return {
        create(manager){
            const universeList = createUniverseList(manager);

            let truthTable;

            manager.premiseData.forEach(data => {
                truthTable = addTablePart(universeList, data.stack, data.metadata);
            });

            truthTable = addTablePart(
                universeList, manager.conclusionData.stack, manager.conclusionData.metadata
            );

            console.log(truthTable);
        }
    }
}

export default truthTableCreator;
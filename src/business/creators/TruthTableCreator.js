import { defaultDeps } from "../context/Dependencies";

const truthTableCreator = services => {
    const{truthTableBuilder = defaultDeps.truthTableBuilder} = services;

    const{createUniverseList, addTablePart} = truthTableBuilder({});
    
    return {
        create(manager){
            let truthTable = createUniverseList(manager);

            manager.premiseData.forEach(data => {
                truthTable = addTablePart(truthTable, data.stack, data.metadata);
            });

            truthTable = addTablePart(
                truthTable, manager.conclusionData.stack, manager.conclusionData.metadata
            );

            console.log(truthTable);
        }
    }
}

export default truthTableCreator;
import { defaultDeps } from "../context/Dependencies";

const truthTableCreator = services => {
    const{truthTableBuilder = defaultDeps.truthTableBuilder} = services;

    const{createUniverseList, addTablePart} = truthTableBuilder({});
    
    return {
        create(manager){
            let truthTable = createUniverseList(manager);

            manager.premiseData.forEach(data => {
                truthTable = addTablePart(truthTable, data.stack, data.metadata, 'Premise');
            });

            truthTable = addTablePart(
                truthTable, manager.conclusionData.stack, manager.conclusionData.metadata, 'Conclusion'
            );

            console.log(truthTable);

            return truthTable;
        }
    }
}

export default truthTableCreator;
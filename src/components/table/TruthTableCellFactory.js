import DetachedLetterCell from "./DetachedLetterCell";
import TruthTableEditableCell from "./TruthTableEditableCell";

const truthTableCellFactory = ({tableUpdater, j, tableItem}) => {
    if (tableItem.partType === 'DetachedLetter'){
        return <DetachedLetterCell key = {j} tableItem={tableItem}/>
    }

    return <TruthTableEditableCell 
                tableUpdater={tableUpdater} 
                key={j} 
                tableItem={tableItem}
            />;
}

export default truthTableCellFactory;
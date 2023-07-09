import DetachedLetterCell from "./DetachedLetterCell";
import TruthTableEditableCell from "./TruthTableEditableCell";

const truthTableCellFactory = ({userInputUpdater, j, tableItem}) => {
    if (tableItem.partType === 'DetachedLetter'){
        return <DetachedLetterCell key = {j} tableItem={tableItem}/>
    }

    return <TruthTableEditableCell 
                userInputUpdater={userInputUpdater} 
                key={j} 
                tableItem={tableItem}
            />;
}

export default truthTableCellFactory;
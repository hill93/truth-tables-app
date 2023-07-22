import DetachedLetterCell from "./DetachedLetterCell";
import TruthTableEditableCell from "./TruthTableEditableCell";

const truthTableCellFactory = ({updateInput, j, tableItem}) => {
    if (tableItem.partType === 'DetachedLetter'){
        return <DetachedLetterCell key = {j} tableItem={tableItem}/>
    }

    return <TruthTableEditableCell 
                updateInput={updateInput} 
                j={j}
                tableItem={tableItem}
                key={j} 
            />;
}

export default truthTableCellFactory;
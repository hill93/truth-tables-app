import truthTableCellFactory from './TruthTableCellFactory';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

const TruthTableRow = ({userInputUpdaterFactory, i, tableRow, checkRowInputCorrect, checkRowInputFilled}) => {
    console.log(`truth row ${i} rendered`);

    return (
        <tr className={
            !checkRowInputFilled(i) || checkRowInputCorrect(i) ? '' 
                : 'incorrectRow'
        }>
            {
                tableRow.map((tableItem, j) => {
                    const updateInput = userInputUpdaterFactory(i,j);
    
                    return truthTableCellFactory({updateInput, j, tableItem});
                })
            }
            {checkRowInputFilled(i) ? 
                <td>
                    {<FontAwesomeIcon 
                        icon={checkRowInputCorrect(i) ? faCheck : faXmark} 
                        style={{'color': checkRowInputCorrect(i) ? 'lightgreen' : 'red'}}
                    />}
            
                </td> 
                : null}
        </tr>
    )
}

export default TruthTableRow;
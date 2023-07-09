import truthTableCellFactory from './TruthTableCellFactory';
import useRowInput from '../../business/hooks/UseRowInput';

const TruthTableRow = ({userInputUpdaterFactory, i, tableRow}) => {
    const {rowInputFilled, rowInputCorrect, updateRowInputFilled, updateRowInputCorrect} = useRowInput();

    return (
        <tr>
            {
                tableRow.map((tableItem, j) => {
                    const userInputUpdater = userInputUpdaterFactory(i,j);

                    const tableUpdater = input => {
                        userInputUpdater(input);
                        updateRowInputCorrect(tableRow);
                        updateRowInputFilled(tableRow);
                    };
    
                    return truthTableCellFactory({tableUpdater, j, tableItem});
                })
            }
            {rowInputFilled ? 
                <td>
                    {rowInputCorrect ? 'CORRECT!' : 'NOPE'}
                </td> : null}
        </tr>
    )
}

export default TruthTableRow;
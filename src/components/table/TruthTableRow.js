import truthTableCellFactory from './TruthTableCellFactory';

const TruthTableRow = ({userInputUpdaterFactory, i, tableRow, checkRowInputCorrect, checkRowInputFilled}) => {
    console.log(`truth row ${i} rendered`);

    return (
        <tr>
            {
                tableRow.map((tableItem, j) => {
                    const updateInput = userInputUpdaterFactory(i,j);
    
                    return truthTableCellFactory({updateInput, j, tableItem});
                })
            }
            {checkRowInputFilled(i) ? 
                <td>
                    {checkRowInputCorrect(i) ? 'CORRECT!' : 'NOPE'}
                </td> : null}
        </tr>
    )
}

export default TruthTableRow;
import { useState } from 'react';
import truthTableCellFactory from './TruthTableCellFactory';

const TruthTableRow = ({userInputUpdaterFactory, i, tableRow}) => {
    // const rowInputCorrect = tableRow.reduce(
    //     (acc, curr) => acc && curr.userInput === (curr.truthValue ? 'T' : 'F')
    // ,true)

    const [rowInputCorrect, setRowInputCorrect] = useState(false);

    console.log('table row rendered')

    return (
        <tr>
            {
                tableRow.map((tableItem, j) => {
                    const userInputUpdater = input => {
                        userInputUpdaterFactory(i,j)(input);
                        console.log(`tableRow`, tableRow);
                        console.log(`rowInputCorrect`, rowInputCorrect);
                        setRowInputCorrect(
                            tableRow.reduce(
                                (acc, curr) => acc && curr.userInput === (curr.truthValue ? 'T' : 'F')
                            ,true)
                        );
                    };
    
                    return truthTableCellFactory({userInputUpdater, j, tableItem});
                })
            }
            <td>{rowInputCorrect ? 'CORRECT!' : 'NOPE'}</td>
        </tr>
    )
}

export default TruthTableRow;
import TruthTableRow from './TruthTableRow';
import ValidityChecker from './ValidityChecker';
import './css/TruthTable.css'

const TruthTable = ({ truthTableManager, userInputUpdaterFactory, checkRowInputFilled, checkRowInputCorrect }) => {
    return (
        <>
            <table className="truthTable">
                <thead>
                    <tr>
                        {
                            truthTableManager.table[0].map((tableItem, i) =>
                                <th key={i}>{tableItem.header}</th>
                            )
                        }
                    </tr>   
                </thead>
                <tbody>
                    {
                        truthTableManager.table.map((tableRow, i) => 
                            <TruthTableRow 
                                userInputUpdaterFactory = {userInputUpdaterFactory} 
                                i={i}
                                key={i} 
                                tableRow={tableRow}
                                checkRowInputFilled={checkRowInputFilled}
                                checkRowInputCorrect={checkRowInputCorrect}
                            />
                        )
                    }       
                </tbody>
            </table>
            <ValidityChecker valid = {truthTableManager.validity}/>
        </>
    )
}

export default TruthTable;
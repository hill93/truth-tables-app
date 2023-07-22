import TruthTableRow from './TruthTableRow';
import './css/TruthTable.css'

const TruthTable = ({ truthTableArr, userInputUpdaterFactory, checkRowInputFilled, checkRowInputCorrect }) => {
    console.log('truth table rendering!!')
    return (
        <table className="truthTable">
            <thead>
                <tr>
                    {
                        truthTableArr[0].map((tableItem, i) =>
                            <th key={i}>{tableItem.header}</th>
                        )
                    }
                </tr>   
            </thead>
            <tbody>
                {
                    truthTableArr.map((tableRow, i) => 
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
    )
}

export default TruthTable;
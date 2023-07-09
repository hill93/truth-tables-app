import TruthTableRow from './TruthTableRow';
import './css/TruthTable.css'

const TruthTable = ({ truthTableArr, userInputUpdaterFactory }) => {
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
                        />
                    )
                }       
            </tbody>
        </table>
    )
}

export default TruthTable;
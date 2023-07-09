import './css/TruthTable.css'

const TruthTable = ({ truthTableArr }) => {
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
                        <tr key={i}>
                            {
                                tableRow.map((tableItem, j) => 
                                    <td key={j}>{tableItem.truthValue ? 'T' : 'F'}</td>
                                )
                            }
                        </tr>
                    )
                }       
            </tbody>
        </table>
    )
}

export default TruthTable;
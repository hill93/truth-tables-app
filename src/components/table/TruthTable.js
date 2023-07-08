const TruthTable = ({ truthTableArr }) => {
    return (
        <table>
            <thead>
                <tr>
                    {
                        truthTableArr[0].map(tableItem =>
                            <th>{tableItem.header}</th>
                        )
                    }
                </tr>
            </thead>
            <tbody>
                {
                    truthTableArr.map(tableRow => 
                        <tr>
                            {
                                tableRow.map(tableItem => 
                                    <td>{tableItem.truthValue ? 'T' : 'F'}</td>
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
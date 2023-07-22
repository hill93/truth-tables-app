import './css/TruthTable.css';

const TruthTableEditableCell = ({ updateInput, j, tableItem}) => {
    return (
        <td key={j}>
            <input
                key={j}
                type="text"
                onChange={e => updateInput(e.target.value)}
                className='truthTableEditableCell'
                value={tableItem.userInput}
            />
        </td>
    )
}

export default TruthTableEditableCell;
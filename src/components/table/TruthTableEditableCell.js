import './css/TruthTable.css';

const TruthTableEditableCell = ({ userInputUpdater, j, tableItem}) => {
    return (
        <td key={j}>
            <input
                type="text"
                id="input"
                onChange={userInputUpdater}
                className='truthTableEditableCell'
            />
        </td>
    )
}

export default TruthTableEditableCell;
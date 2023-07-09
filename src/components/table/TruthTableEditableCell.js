import './css/TruthTable.css';

const TruthTableEditableCell = ({ tableUpdater, j, tableItem}) => {
    return (
        <td key={j}>
            <input
                type="text"
                id="input"
                onChange={tableUpdater}
                className='truthTableEditableCell'
            />
        </td>
    )
}

export default TruthTableEditableCell;
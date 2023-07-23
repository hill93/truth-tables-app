import './css/TruthTable.css';
import Recording from './Recording.wav';

const TruthTableEditableCell = ({ updateInput, j, tableItem}) => {
    return (
        <td key={j}>
            <input
                key={j}
                type="text"
                onChange={e => {updateInput(e.target.value); /*new Audio(Recording).play();*/}}
                className='truthTableEditableCell'
                value={tableItem.userInput}
            />
        </td>
    )
}

export default TruthTableEditableCell;
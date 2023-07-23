import './css/TruthTable.css';
import { IMaskInput } from 'react-imask';
import Recording from './Recording.wav';

const TruthTableEditableCell = ({ updateInput, tableItem}) => {
    return (
        <td>
            <IMaskInput
                mask={/^[FT]{1}$/}
                onAccept={e => {updateInput(e); /*new Audio(Recording).play();*/}}
                className='truthTableEditableCell'
                value={tableItem.userInput}
            />
        </td>
    )
}

export default TruthTableEditableCell;
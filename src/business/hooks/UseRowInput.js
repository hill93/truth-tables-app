import { useState } from "react";

const useRowInput = () => {
    const [rowInputFilled, setRowInputFilled] = useState(false);
    const [rowInputCorrect, setRowInputCorrect] = useState(false);

    const updateRowInputFilled = tableRow => {
        console.log('is row filled', tableRow)
        setRowInputFilled(
            !tableRow.some(x => x.userInput === '' && x.partType !== 'DetachedLetter')
        )
    };

    const updateRowInputCorrect = tableRow => {
        setRowInputCorrect(
            tableRow.filter(x => x.partType !== 'DetachedLetter').reduce(
                (acc, curr) => acc && curr.userInput === (curr.truthValue ? 'T' : 'F')
            ,true)
        )
    };

    return {rowInputFilled, rowInputCorrect, updateRowInputFilled, updateRowInputCorrect};
}

export default useRowInput;
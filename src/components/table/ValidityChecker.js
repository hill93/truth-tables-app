import { useState } from "react";

const ValidityChecker = ({valid}) => {
    const [thinksValid, setThinksValid] = useState("");

    const isCorrect = () => {
        return thinksValid === (valid ? 'Yes' : 'No');
    }

    return (
        <>
            <label htmlFor="input">Valid argument?</label>
            <div>
                <label htmlFor="validYes">Yes</label>
                <input type="radio" id="validYes" name="validArgument" value="Yes" onChange={e => setThinksValid(e.target.value)}/>
                <label htmlFor="validNo">No</label>
                <input type="radio" id="validNo" name="validArgument" value="No" onChange={e => setThinksValid(e.target.value)}/>
            </div>
            {thinksValid !== '' ? isCorrect() ?
                <p>Well done, you are correct!</p> :
                <p>Boo, you suck</p> :
                null
            }
        </>
    )
}

export default ValidityChecker;
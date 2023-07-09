import './css/TruthTableInput.css'
import React from 'react';

const PremiseInput = ({premiseNo, handleInputChange}) => {
  return (
    <div className='sentenceInputs'>
      <label htmlFor="input" style={{'paddingRight': '4px'}}>Premise {premiseNo}:</label>
      <input
        type="text"
        id="input"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default PremiseInput;

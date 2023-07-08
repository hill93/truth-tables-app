import React from 'react';

const PremiseInput = ({premiseNo, handleInputChange}) => {
  return (
    <div>
      <label htmlFor="input">Premise {premiseNo}:</label>
      <input
        type="text"
        id="input"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default PremiseInput;

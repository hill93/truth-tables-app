import React, { useState } from 'react';
import PremiseInput from './PremiseInput';

const TruthTableInput = () => {
  const [truthTableInput, setTruthTableInput] = useState({
    premises:[],
    conclusion:''
  });

  const handleConclusionChange = (e) => {
    setTruthTableInput({
      ...truthTableInput,
      conclusion: e.target.value
    });
  };

  const handlePremiseChange = (i) => {
    return (e) => {
      truthTableInput.premises[i] = e.target.value;
      setTruthTableInput(truthTableInput);
    }
  }

  const handleAddPremiseClick = () => {
    setTruthTableInput({
      ...truthTableInput,
      premises: [...truthTableInput.premises, '']
    })
  };

  const handleRemovePremiseClick = () => {
    setTruthTableInput({
      ...truthTableInput,
      premises: truthTableInput.premises.slice(0, truthTableInput.premises.length - 1)
    })
  };

  const handleCreateClick = () => {
    console.log('Create button clicked');
    console.log(truthTableInput);
  };

  const premiseComponents = [];

  for (let i = 0; i < truthTableInput.premises.length; i++) {
    premiseComponents.push(
      <PremiseInput key={i} premiseNo={i+1} handleInputChange = {handlePremiseChange(i)}/>
    )
  }

  return (
    <div>
    <button onClick={handleAddPremiseClick}>Add Premise</button>
    <button onClick={handleRemovePremiseClick}>Remove Premise</button>
      {premiseComponents}
      <div>
        <label htmlFor="input">Conclusion:</label>
        <input
          type="text"
          id="input"
          onChange={handleConclusionChange}
        />
      </div>
      <button onClick={handleCreateClick}>Create</button>
    </div>
  );
};

export default TruthTableInput;

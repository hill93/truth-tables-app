const useTruthTableInput = initialiseManager => {
  const [truthTableInput, setTruthTableInput] = useState({
    premises:[],
    conclusion:''
  });

  const changeConclusion = input => {
    setTruthTableInput({
        ...truthTableInput,
        conclusion: input
      });
  };

  const changePremise = (input, i) =>{
    truthTableInput.premises[i] = input;
    setTruthTableInput(truthTableInput);
  }

  const addPremise = () => {
    setTruthTableInput({
      ...truthTableInput,
      premises: [...truthTableInput.premises, '']
    })
  };

  const removePremise = () => {
    setTruthTableInput({
      ...truthTableInput,
      premises: truthTableInput.premises.slice(0, truthTableInput.premises.length - 1)
    })
  };

  const createTable = () => {
    initialiseManager(truthTableInput);
  };
}

export default useTruthTableInput;
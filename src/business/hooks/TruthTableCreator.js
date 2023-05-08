const useTruthTableCreator = () => {
    //CENTRALISE REGEXS!!!!!
    const getOnlyLetters = metadata => {
        const result = metadata.filter(x => x.text.match(/^[A-Z]$/)).map(x => x.text);

        return [... new Set(result.sort())];
    }

    const createUniverseList = letters => {
        let noOfUniverses = 2 ** (letters.length);
        let noOfTruths = noOfUniverses / 2;

        let universeList = [];

        letters.forEach(x => {
            let currentTruthValue = true;
            let j = 0;
            for (let i = 0; i < noOfUniverses; i++) {
                if (j === noOfTruths){
                    j = 0;
                    currentTruthValue = !currentTruthValue;
                }
                let rowToUpdate = universeList[i];

                if (!rowToUpdate){
                    universeList.push({});
                    rowToUpdate = universeList[i];
                }

                rowToUpdate[x] = currentTruthValue;
                j++;
            }
            console.log(noOfTruths)
            noOfTruths /= 2;
        })
        return universeList;
    }

    return {
        create(stack, metadata){
            const letters = getOnlyLetters(metadata);
            const universeList = createUniverseList(letters);
            console.log(letters);
            console.log(universeList);

        }
    }
}

export default useTruthTableCreator;
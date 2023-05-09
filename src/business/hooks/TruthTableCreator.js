import { useDeps } from "../context/DepsContext";

const useTruthTableCreator = () => {
    const {truthCalculators} = useDeps();

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
                    universeList.push([]);
                    rowToUpdate = universeList[i];
                }

                rowToUpdate.push({header: x, truthValue: currentTruthValue, showOnTable: true});
                j++;
            }
            console.log(noOfTruths)
            noOfTruths /= 2;
        })
        return universeList;
    }

    const cleanTruthStack = truthStack => {
        truthStack.forEach(x => {
            x.processed = false;
            x.truthValue = null;
        });
    }

    const createTruthTable = (universeList, truthStack, metadata) => {
        universeList.forEach(x => {
            for (let i = 0; i < truthStack.length; i++) {
                const calculator = truthCalculators.find(x => x.canCalculate(truthStack[i].truthValuablePart))

                truthStack[i].truthValue = calculator.calculate(i, truthStack, x);
            }

            metadata.forEach(y => {
                x.push({
                    header: y.truthTableHeader, 
                    truthValue: truthStack.find(z => z.text === y.text).truthValue, 
                    showOnTable: false
                });
            });

            console.log('truthStack', truthStack);
            console.log('universe', x);

            cleanTruthStack(truthStack);
        });

        return universeList;
    }

    return {
        create(stack, metadata){
            const letters = getOnlyLetters(metadata);
            const universeList = createUniverseList(letters);

            console.log(letters);
            console.log(universeList);
            
            const truthTable = createTruthTable(universeList, stack, metadata);

            console.log(truthTable);
        }
    }
}

export default useTruthTableCreator;
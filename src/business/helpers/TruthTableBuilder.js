import { defaultDeps } from "../context/Dependencies";

const truthTableBuilder = services => {
    const{ lettersGetter = defaultDeps.lettersGetter, 
        truthCalculators = defaultDeps.truthCalculators } = services;

    const{ getLetters } = lettersGetter({});
    const calculators = truthCalculators.map(x => x({}));

    const cleanTruthStack = truthStack => {
        truthStack.forEach(x => {
            x.processed = false;
            x.truthValue = null;
        });
    }

    return {
        createUniverseList(manager) {
            let letters = getLetters(manager);

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

                    rowToUpdate.push({header: x, truthValue: currentTruthValue, partType: 'DetachedLetter'});
                    j++;
                }
                noOfTruths /= 2;
            })
            return universeList;
        },
        
        addTablePart(universeList, truthStack, metadata, type){
            universeList.forEach(x => {
                for (let i = 0; i < truthStack.length; i++) {
                    const calculator = calculators.find(x => x.canCalculate(truthStack[i].truthValuablePart))
    
                    truthStack[i].truthValue = calculator.calculate(i, truthStack, x);

                    truthStack[i].mainConnective = i === truthStack.length - 1;
                }
    
                metadata.forEach(y => {
                    x.push({
                        header: y.truthTableHeader, 
                        truthValue: truthStack.find(z => z.text === y.text).truthValue, 
                        partType: type,
                        mainConnective: truthStack.find(z => z.text === y.text).mainConnective,
                        userInput: ''
                    });
                });
    
                cleanTruthStack(truthStack);
            });
    
            return universeList;
        }
    }
}

export default truthTableBuilder;
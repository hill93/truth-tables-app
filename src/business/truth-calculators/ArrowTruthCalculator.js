import { useDeps } from "../context/DepsContext";

const useArrowTruthCalculator = () => {
    // const {sidesGetter} = useDeps();
    // const {get: getSides} = sidesGetter();

    return {
        canCalculate(truthValuablePart){
            return truthValuablePart === '=>';
        },

        calculate(position, truthStack, universeList) {
            const depth = truthStack[position].depth;

            const slicedArray = truthStack.slice(0, position);
            const leftRowToProcess = slicedArray.find(x => x.depth === depth + 1 && !x.processed && x.side === 'L');
            const rightRowToProcess = slicedArray.find(x => x.depth === depth + 1 && !x.processed && x.side === 'R');

            truthStack.find(x => x === leftRowToProcess).processed = true;
            truthStack.find(x => x === rightRowToProcess).processed = true;

            //const sides = getSides(truthStack, position, depth);
        
            return (!leftRowToProcess.truthValue || rightRowToProcess.truthValue);
            //return (!sides.left || sides.right);
        }
    }
}

export default useArrowTruthCalculator;
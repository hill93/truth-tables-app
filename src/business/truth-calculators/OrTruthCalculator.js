import { defaultDeps } from "../context/Dependencies";

const useOrTruthCalculator = services => {
    const {sidesGetter} = services || defaultDeps;
    const {get: getSides} = sidesGetter();

    return {
        canCalculate(truthValuablePart){
            return truthValuablePart === 'v';
        },

        calculate(position, truthStack, universeList) {
            const depth = truthStack[position].depth;

            const sides = getSides(truthStack, position, depth);
        
            return (sides.left || sides.right);
        }
    }
}

export default useOrTruthCalculator;
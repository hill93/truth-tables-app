import { defaultDeps } from "../context/Dependencies";

const useAmpersandTruthCalculator = services => {
    const {sidesGetter = defaultDeps.sidesGetter} = services;
    const {get: getSides} = sidesGetter();

    return {
        canCalculate(truthValuablePart){
            return truthValuablePart === '&';
        },

        calculate(position, truthStack, universeList) {
            const depth = truthStack[position].depth;

            const sides = getSides(truthStack, position, depth);
        
            return (sides.left && sides.right);
        }
    }
}

export default useAmpersandTruthCalculator;
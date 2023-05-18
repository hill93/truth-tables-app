import SYMBOLS from "../constants/TokenConstants";
import { defaultDeps } from "../context/Dependencies";

const doubleArrowTruthCalculator = services => {
    const {sidesGetter = defaultDeps.sidesGetter,
        symbols = SYMBOLS} = services;
    const {get: getSides} = sidesGetter();

    return {
        canCalculate(truthValuablePart){
            return truthValuablePart === symbols.doubleArrow;
        },

        calculate(position, truthStack, universeList) {
            const depth = truthStack[position].depth;

            const sides = getSides(truthStack, position, depth);
        
            return (sides.left && sides.right) 
                || (!sides.left && !sides.right);
        }
    }
}

export default doubleArrowTruthCalculator;
import SYMBOLS from "../constants/TokenConstants";
import { defaultDeps } from "../context/Dependencies";

const arrowTruthCalculator = services => {
    const {sidesGetter = defaultDeps.sidesGetter,
        symbols = SYMBOLS} = services;
    const {get: getSides} = sidesGetter();

    return {
        canCalculate(truthValuablePart){
            return truthValuablePart === symbols.arrow;
        },

        calculate(position, truthStack, universeList) {
            const depth = truthStack[position].depth;

            const sides = getSides(truthStack, position, depth);
            
            return (!sides.left || sides.right);
        }
    }
}

export default arrowTruthCalculator;
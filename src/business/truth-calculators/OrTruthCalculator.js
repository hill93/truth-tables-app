import SYMBOLS from "../constants/TokenConstants";
import { defaultDeps } from "../context/Dependencies";

const orTruthCalculator = services => {
    const {sidesGetter = defaultDeps.sidesGetter,
        symbols = SYMBOLS} = services;
    const {get: getSides} = sidesGetter();

    return {
        canCalculate(truthValuablePart){
            return truthValuablePart === symbols.or;
        },

        calculate(position, truthStack, universeList) {
            const depth = truthStack[position].depth;

            const sides = getSides(truthStack, position, depth);
        
            return (sides.left || sides.right);
        }
    }
}

export default orTruthCalculator;
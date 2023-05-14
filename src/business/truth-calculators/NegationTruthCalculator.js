import SYMBOLS from "../constants/TokenConstants";

const negationTruthCalculator = services => {
    const {symbols = SYMBOLS} = services;

    return {
        canCalculate(truthValuablePart){
            return truthValuablePart === symbols.negation;
        },

        calculate(position, truthStack, universeList) {
            return !truthStack[position-1].truthValue;
        }
    }
}

export default negationTruthCalculator;
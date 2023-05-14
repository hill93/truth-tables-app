import SYMBOLS from "../constants/TokenConstants";

const sentenceTruthCalculator = services => {
    const {symbols = SYMBOLS} = services;

    return {
        canCalculate(truthValuablePart){
            return  new RegExp(`^[${symbols.sentence}]$`).test(truthValuablePart);
        },

        calculate(position, truthStack, universe) {
            const column = truthStack[position].text;

            return universe.find(x => x.header === column).truthValue;
        }
    }
}

export default sentenceTruthCalculator;
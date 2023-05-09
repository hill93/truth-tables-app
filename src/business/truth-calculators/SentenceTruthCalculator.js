const sentenceTruthCalculator = () => {
    return {
        canCalculate(truthValuablePart){
            return  new RegExp('^[A-Z]$').test(truthValuablePart);
        },

        calculate(position, truthStack, universe) {
            const column = truthStack[position].text;

            return universe.find(x => x.header == column).truthValue;
        }
    }
}

export default sentenceTruthCalculator;
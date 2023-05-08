const sentenceTruthCalculator = () => {
    return {
        canCalculate(truthValuablePart){
            return  new RegExp('^[A-Z]$').test(truthValuablePart);
        },

        calculate(position, truthStack, universe) {
            const column = truthStack[position].text;

            return universe[column];
        }
    }
}
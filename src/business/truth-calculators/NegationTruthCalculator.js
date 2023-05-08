const negationTruthCalculator = () => {
    return {
        canCalculate(truthValuablePart){
            return truthValuablePart === '~';
        },

        calculate(position, truthStack, universeList) {
            return !truthStack[position-1].truthValue;
        }
    }
}
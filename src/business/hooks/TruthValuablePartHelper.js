const useTruthValuablePartHelper = () => {
    const negationRegex = '~';
    const doubleArrowRegex = '<=>';
    const sentenceRegex = 'A-Z';
    const connectiveRegex = '&|v|=>';

    return {
        extractTruthValuablePart(ctx){
            return ctx.getText().match(`^[${sentenceRegex}]$`) ?? 
                ctx.children[0]?.getText() === negationRegex ? ctx.children[0].getText()
                : ctx.children[2]?.getText().match(`^(${doubleArrowRegex}|${connectiveRegex})$`) ? ctx.children[2].getText() 
                : '';
        },

        endsWithNonConnectiveTruthValuablePart(input) {
            return input.match(`.*([${sentenceRegex}${negationRegex}])$`);
        },
    
        endsWithConnective(input) {
            if (input.match(`.*${doubleArrowRegex}$`)){
                return doubleArrowRegex;
            }
            return input.match(`.*(${connectiveRegex})$`);
        }
    }
}

export default useTruthValuablePartHelper;
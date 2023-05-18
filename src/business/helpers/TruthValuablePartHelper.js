import SYMBOLS from "../constants/TokenConstants";

const truthValuablePartHelper = services => {
    const {ampersand = SYMBOLS.ampersand,
        or = SYMBOLS.or,
        arrow = SYMBOLS.arrow,
        negation = SYMBOLS.negation,
        doubleArrow = SYMBOLS.doubleArrow,
        sentence = SYMBOLS.sentence} = services;
    const connectiveRegex = `${ampersand}|${or}|${arrow}`;

    return {
        extractTruthValuablePart(ctx){
            return ctx.getText().match(`^[${sentence}]$`) ? ctx.getText()
                 : ctx.children[0]?.getText() === negation ? ctx.children[0]?.getText()
                 : ctx.children[2]?.getText().match(`^(${doubleArrow}|${connectiveRegex})$`) ? ctx.children[2].getText() :
                '';
        },

        endsWithNonConnectiveTruthValuablePart(input) {
            return input.match(`.*([${sentence}${negation}])$`);
        },
    
        endsWithConnective(input) {
            if (input.match(`.*${doubleArrow}$`)){
                return doubleArrow;
            }
            return input.match(`.*(${connectiveRegex})$`);
        }
    }
}

export default truthValuablePartHelper;
import SYMBOLS from "../constants/TokenConstants";

const truthTableMetadataHelper = services => {
    const{ premiseSeparator = SYMBOLS.premiseSeparator,
        conclusionPrefix = SYMBOLS.conclusionPrefix,
        rightBracket = SYMBOLS.rightBracket
    } = services;

    const sortByColumnOrderDesc = (a, b) => {
        return b.orderOnTable - a.orderOnTable;
    }

    return {
        addConclusionPrefix(metadata) {
            const metadataRow = metadata[0];
            metadataRow.truthTableHeader = `${conclusionPrefix}${metadataRow.truthTableHeader}`;
        },
        
        addPremiseSeparator(metadata) {
            const metadataRow = metadata[metadata.length - 1];
            metadataRow.truthTableHeader += premiseSeparator;

            return metadata;
        },

        addMissingParentheses(visitedTree, input) {
            const lastColumn = visitedTree.sort(sortByColumnOrderDesc)[0];
    
            if (!lastColumn.truthTableHeader.endsWith(rightBracket) && input.endsWith(rightBracket)){
                let i = input.length - 1;
    
                while (input[i] === rightBracket){
                    lastColumn.truthTableHeader += rightBracket;
                    i--;
                }
            }
        },

        sortByColumnOrderAsc(a, b) {
            return a.orderOnTable - b.orderOnTable;
        }
    }
}

export default truthTableMetadataHelper;
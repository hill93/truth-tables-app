import { defaultDeps } from "../context/Dependencies";

const truthTableMetadataCreator = services => {
    let tableStr = '';
    let depth = 0;
    let visitedTree = [];
    let order = 1;

    const{ truthValuablePartHelper = defaultDeps.truthValuablePartHelper,
        truthTableMetadataHelper = defaultDeps.truthTableMetadataHelper
    } = services;

    const { extractTruthValuablePart, 
        endsWithNonConnectiveTruthValuablePart, 
        endsWithConnective
    } = truthValuablePartHelper({});

    const { addMissingParentheses,
        sortByColumnOrderAsc
    } = truthTableMetadataHelper({});

    const visitor = () => {
        return{
            visitChildren(ctx) {
                if (!ctx) {
                    return;
                }
            
                if (ctx.children) {
                    return ctx.children.map(child => {
                        if (child.children && child.children.length !== 0) {

                            depth = child.depth();
                            visitedTree.push({
                                depth: depth,
                                text: child.getText(),
                                truthValuablePart: extractTruthValuablePart(child),
                                truthTableHeader: null,
                                orderOnTable: 0
                            })
                            console.log(`depth: ${child.depth()}, text: ${child.getText()}, connective: ${child.children[2]}, negation: ${child.children[0]}`);
                            return child.accept(this);
                        } else {
                            tableStr += child.getText();
                            
                            console.log(`tableStr in else: ${tableStr}, ends with truth valuable part: ${endsWithNonConnectiveTruthValuablePart(tableStr) || endsWithConnective(tableStr)}`);

                            let columnToUpdate;

                            if (endsWithNonConnectiveTruthValuablePart(tableStr)){
                                columnToUpdate = visitedTree.find(x => !x.truthTableHeader && x.depth === depth && x.truthValuablePart === child.getText())
                            } 
                            
                            if (endsWithConnective(tableStr)){
                                columnToUpdate = visitedTree.find(x => !x.truthTableHeader && x.text === child.getParent().getText())
                            }

                            if(columnToUpdate){
                                columnToUpdate.truthTableHeader = tableStr;
                                columnToUpdate.orderOnTable = order;

                                tableStr = '';
                                order++;
                            }

                            return child.getText();
                        }
                    });

                }
            }
        }}

    return {
        create(tree, input){
            tree.accept(visitor());
            addMissingParentheses(visitedTree, input);
            return visitedTree.sort(sortByColumnOrderAsc)
        }
    }
}

export default truthTableMetadataCreator;
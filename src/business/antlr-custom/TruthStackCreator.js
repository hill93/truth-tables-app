import { ParseTreeWalker } from "antlr4";
import PropLogicListener from "../../grammars/PropLogicListener";
import { defaultDeps } from "../context/Dependencies";

const truthStackCreator = services => {
    const truthStack = [];

    const {truthValuablePartHelper = defaultDeps.truthValuablePartHelper} = services;
    const {extractTruthValuablePart} = truthValuablePartHelper({});

    class TruthStackListener extends PropLogicListener {
        exitExpr(ctx){
            let leftSide = truthStack.find(x => x.depth === ctx.depth() && x.side === 'L' && !x.partnered);
            if (leftSide){
                leftSide.partnered = true;
            }

            const side = leftSide ? 'R' : 'L';

            truthStack.push({
                depth: ctx.depth(),
                text: ctx.getText(),
                side: side,
                truthValuablePart: extractTruthValuablePart(ctx),
                processed: false,
                partnered: side === 'R',
                truthValue: null
            });
        }
    }

    return {
        create(tree){
            const walker = new ParseTreeWalker();
            walker.walk(new TruthStackListener(), tree);
            return truthStack;
        }
    }
}

export default truthStackCreator;
import { ParseTreeWalker } from "antlr4";
import PropLogicListener from "../../../grammars/PropLogicListener";
import { useDeps } from "../../context/DepsContext";

const useTruthStackCreator = () => {
    const truthStack = [];

    const {useTruthValuablePartHelper} = useDeps();
    const {extractTruthValuablePart} = useTruthValuablePartHelper();

    class TruthStackListener extends PropLogicListener {
        exitExpr(ctx){
            let leftSide = truthStack.find(x => x.depth == ctx.depth() && x.side === 'L' && !x.partnered);
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

export default useTruthStackCreator;
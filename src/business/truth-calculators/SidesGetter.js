const sidesGetter = () => {
    return {
        get(truthStack, position, depth) {
            const slicedArray = truthStack.slice(0, position);
            const leftRowToProcess = slicedArray.find(x => x.depth === depth + 1 && !x.processed && x.side === 'L');
            const rightRowToProcess = slicedArray.find(x => x.depth === depth + 1 && !x.processed && x.side === 'R');

            truthStack.find(x => x === leftRowToProcess).processed = true;
            truthStack.find(x => x === rightRowToProcess).processed = true;

            return {left: leftRowToProcess.truthValue, right: rightRowToProcess.truthValue}
        }
    }
}

export default sidesGetter;
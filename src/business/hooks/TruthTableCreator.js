const useTruthTableCreator = () => {
    //CENTRALISE REGEXS!!!!!
    const getOnlyLetters = metadata => {
        const result = metadata.filter(x => x.text.match(/^[A-Z]$/)).map(x => x.text);

        return [... new Set(result.sort())];
    }

    return {
        create(stack, metadata){
            const letters = getOnlyLetters(metadata);

            console.log(letters);

            let noOfTruths = 2 ** (letters.length - 1);

            letters.forEach(x => {
                console.log(noOfTruths)
                noOfTruths /= 2;
            })

        }
    }
}

export default useTruthTableCreator;
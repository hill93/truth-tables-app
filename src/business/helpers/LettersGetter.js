import SYMBOLS from "../constants/TokenConstants";

const lettersGetter = services => {
    const { sentence = SYMBOLS.sentence } = services;

    return {
        getLetters(manager){
            const conclusionMetadata = manager.conclusionData.metadata;
            let result = conclusionMetadata.filter(x => x.text.match(`^[${sentence}]$`)).map(x => x.text);

            manager.premiseData.forEach(data => {
                result = result.concat(data.metadata.filter(x => x.text.match(`^[${sentence}]$`)).map(x => x.text))
            });

            return [...new Set(result.sort())];
        }
    }
}

export default lettersGetter;
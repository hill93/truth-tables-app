const lettersGetter = () => {
    return {
        getLetters(metadata){
            const result = metadata.filter(x => x.text.match(/^[A-Z]$/)).map(x => x.text);

            return [...new Set(result.sort())];
        }
    }
}

export default lettersGetter;
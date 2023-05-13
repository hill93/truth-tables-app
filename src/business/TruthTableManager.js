import { InputStream, CommonTokenStream } from 'antlr4';
import PropLogicLexer from '../grammars/PropLogicLexer.js';
import PropLogicParser from '../grammars/PropLogicParser.js';
import { defaultDeps } from './context/Dependencies.js';

const useTruthTableManager = services => {
    const { useTruthTableMetadataCreator = defaultDeps.useTruthTableMetadataCreator, 
        useTruthStackCreator = defaultDeps.useTruthStackCreator, 
        useTruthTableCreator = defaultDeps.useTruthTableCreator
    } = services;

    const {create : createMetadata} = useTruthTableMetadataCreator({});
    const {create : createStack} = useTruthStackCreator({});
    const {create : createTable} = useTruthTableCreator({});

    const emptyInputMsg = 'Please enter an argument or theory.'
    const errors = [emptyInputMsg];

    const addError = (recognizer, offendingSymbol, line, column, msg, err) => {
        console.log(`${offendingSymbol} line ${line}, col ${column}: ${msg}`);
        errors.push(msg);
    }
    
    const parseInput = (input) => {
        const chars = new InputStream(input);

        const lexer = new PropLogicLexer(chars);
        lexer.removeErrorListeners();
        lexer.addErrorListener({
            syntaxError: addError
        });
    
        lexer.strictMode = false; // do not use js strictMode
    
        const tokens = new CommonTokenStream(lexer);

        const parser = new PropLogicParser(tokens);
        parser.buildParseTrees = true;
        parser.removeErrorListeners();
        parser.addErrorListener({
            syntaxError: addError
        });
    
        const tree = parser.program();
        if(input !== ''){
            errors.splice(errors.indexOf(emptyInputMsg), 1)
        }

        return tree;
    }

    return {
        printErrors(){
            errors.forEach(x => console.log(`Error: ${x}`))
        },

        getTruthTable(input){
            const tree = parseInput(input);
            const stack = createStack(tree);
            const metadata = createMetadata(tree, input);
            createTable(stack, metadata);

            console.log(stack);
            console.log(metadata);
        }
    }
}

export default useTruthTableManager;
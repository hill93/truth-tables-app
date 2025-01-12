import { InputStream, CommonTokenStream } from 'antlr4';
import PropLogicLexer from '../../grammars/PropLogicLexer.js';
import PropLogicParser from '../../grammars/PropLogicParser.js';

const propLogicTreeCreator = services => {
    const{addError} = services;

    return {
        createTree(input) {
            const addTheError = (recognizer, offendingSymbol, line, column, msg, err) => {
                addError(offendingSymbol, line, column, msg, input);
            };

            const chars = new InputStream(input);
    
            const lexer = new PropLogicLexer(chars);
            lexer.removeErrorListeners();
            lexer.addErrorListener({
                syntaxError: addTheError
            });
        
            lexer.strictMode = false; // do not use js strictMode
        
            const tokens = new CommonTokenStream(lexer);
    
            const parser = new PropLogicParser(tokens);
            parser.buildParseTrees = true;
            parser.removeErrorListeners();
            parser.addErrorListener({
                syntaxError: addTheError
            });
        
            const tree = parser.program();
    
            return tree;
        }
    }
}

export default propLogicTreeCreator;
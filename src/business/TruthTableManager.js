import { InputStream, CommonTokenStream } from 'antlr4';
import PropLogicLexer from '../grammars/PropLogicLexer.js';
import PropLogicParser from '../grammars/PropLogicParser.js';
import { defaultDeps } from './context/Dependencies.js';

const truthTableManager = services => {
    const { truthTableMetadataCreator = defaultDeps.truthTableMetadataCreator, 
        truthStackCreator = defaultDeps.truthStackCreator, 
        truthTableCreator = defaultDeps.truthTableCreator,
        truthTableMetadataHelper = defaultDeps.truthTableMetadataHelper
    } = services;

    const {create : createTable} = truthTableCreator({});
    const { addConclusionPrefix, addPremiseSeparator } = truthTableMetadataHelper({});

    let createMetadata;
    let createStack;

    const refreshCreators = () => {
        createMetadata = truthTableMetadataCreator({}).create;
        createStack = truthStackCreator({}).create;
    }

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
            let premiseTrees = [];

            input.premises.forEach(premise =>{
                premiseTrees.push(parseInput(premise))
            });

            let conclusionTree = parseInput(input.conclusion);

            let manager = {premiseData: []};

            let premiseMetadata;

            for (let i = 0; i < premiseTrees.length; i++) {
                refreshCreators();

                if (premiseMetadata) {
                    manager.premiseData[i-1].metadata = addPremiseSeparator(premiseMetadata);
                }

                premiseMetadata = createMetadata(premiseTrees[i], input.premises[i]);

                manager.premiseData.push({
                        stack: createStack(premiseTrees[i]), 
                        metadata: premiseMetadata
                    }
                )
            }

            refreshCreators();

            const conclusionMetadata = createMetadata(conclusionTree, input.conclusion);

            addConclusionPrefix(conclusionMetadata);

            manager.conclusionData = {
                stack: createStack(conclusionTree),
                metadata: conclusionMetadata
            };

            console.log('manager:', manager);
            createTable(manager);
        }
    }
}

export default truthTableManager;
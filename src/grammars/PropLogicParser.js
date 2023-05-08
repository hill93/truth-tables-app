// Generated from ./src/grammars/PropLogic.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';
import PropLogicListener from './PropLogicListener.js';
import PropLogicVisitor from './PropLogicVisitor.js';

const serializedATN = [4,1,9,37,2,0,7,0,2,1,7,1,1,0,1,0,1,0,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,3,1,35,8,1,1,1,0,0,2,0,2,0,0,39,0,4,1,0,0,0,2,34,
1,0,0,0,4,5,3,2,1,0,5,6,5,0,0,1,6,1,1,0,0,0,7,35,5,8,0,0,8,9,5,3,0,0,9,35,
3,2,1,0,10,11,5,6,0,0,11,12,3,2,1,0,12,13,5,1,0,0,13,14,3,2,1,0,14,15,5,
7,0,0,15,35,1,0,0,0,16,17,5,6,0,0,17,18,3,2,1,0,18,19,5,2,0,0,19,20,3,2,
1,0,20,21,5,7,0,0,21,35,1,0,0,0,22,23,5,6,0,0,23,24,3,2,1,0,24,25,5,4,0,
0,25,26,3,2,1,0,26,27,5,7,0,0,27,35,1,0,0,0,28,29,5,6,0,0,29,30,3,2,1,0,
30,31,5,5,0,0,31,32,3,2,1,0,32,33,5,7,0,0,33,35,1,0,0,0,34,7,1,0,0,0,34,
8,1,0,0,0,34,10,1,0,0,0,34,16,1,0,0,0,34,22,1,0,0,0,34,28,1,0,0,0,35,3,1,
0,0,0,1,34];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class PropLogicParser extends antlr4.Parser {

    static grammarFileName = "PropLogic.g4";
    static literalNames = [ null, "'&'", "'v'", "'~'", "'=>'", "'<=>'", 
                            "'('", "')'" ];
    static symbolicNames = [ null, "AND", "OR", "NOT", "ARR", "DARR", "LPAREN", 
                             "RPAREN", "SENT", "WS" ];
    static ruleNames = [ "program", "expr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = PropLogicParser.ruleNames;
        this.literalNames = PropLogicParser.literalNames;
        this.symbolicNames = PropLogicParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, PropLogicParser.RULE_program);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 4;
	        this.expr();
	        this.state = 5;
	        this.match(PropLogicParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expr() {
	    let localctx = new ExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, PropLogicParser.RULE_expr);
	    try {
	        this.state = 34;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 7;
	            this.match(PropLogicParser.SENT);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 8;
	            this.match(PropLogicParser.NOT);
	            this.state = 9;
	            this.expr();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 10;
	            this.match(PropLogicParser.LPAREN);
	            this.state = 11;
	            this.expr();
	            this.state = 12;
	            this.match(PropLogicParser.AND);
	            this.state = 13;
	            this.expr();
	            this.state = 14;
	            this.match(PropLogicParser.RPAREN);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 16;
	            this.match(PropLogicParser.LPAREN);
	            this.state = 17;
	            this.expr();
	            this.state = 18;
	            this.match(PropLogicParser.OR);
	            this.state = 19;
	            this.expr();
	            this.state = 20;
	            this.match(PropLogicParser.RPAREN);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 22;
	            this.match(PropLogicParser.LPAREN);
	            this.state = 23;
	            this.expr();
	            this.state = 24;
	            this.match(PropLogicParser.ARR);
	            this.state = 25;
	            this.expr();
	            this.state = 26;
	            this.match(PropLogicParser.RPAREN);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 28;
	            this.match(PropLogicParser.LPAREN);
	            this.state = 29;
	            this.expr();
	            this.state = 30;
	            this.match(PropLogicParser.DARR);
	            this.state = 31;
	            this.expr();
	            this.state = 32;
	            this.match(PropLogicParser.RPAREN);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

PropLogicParser.EOF = antlr4.Token.EOF;
PropLogicParser.AND = 1;
PropLogicParser.OR = 2;
PropLogicParser.NOT = 3;
PropLogicParser.ARR = 4;
PropLogicParser.DARR = 5;
PropLogicParser.LPAREN = 6;
PropLogicParser.RPAREN = 7;
PropLogicParser.SENT = 8;
PropLogicParser.WS = 9;

PropLogicParser.RULE_program = 0;
PropLogicParser.RULE_expr = 1;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PropLogicParser.RULE_program;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	EOF() {
	    return this.getToken(PropLogicParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PropLogicListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PropLogicListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PropLogicVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PropLogicParser.RULE_expr;
    }

	SENT() {
	    return this.getToken(PropLogicParser.SENT, 0);
	};

	NOT() {
	    return this.getToken(PropLogicParser.NOT, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	LPAREN() {
	    return this.getToken(PropLogicParser.LPAREN, 0);
	};

	AND() {
	    return this.getToken(PropLogicParser.AND, 0);
	};

	RPAREN() {
	    return this.getToken(PropLogicParser.RPAREN, 0);
	};

	OR() {
	    return this.getToken(PropLogicParser.OR, 0);
	};

	ARR() {
	    return this.getToken(PropLogicParser.ARR, 0);
	};

	DARR() {
	    return this.getToken(PropLogicParser.DARR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PropLogicListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PropLogicListener ) {
	        listener.exitExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PropLogicVisitor ) {
	        return visitor.visitExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




PropLogicParser.ProgramContext = ProgramContext; 
PropLogicParser.ExprContext = ExprContext; 

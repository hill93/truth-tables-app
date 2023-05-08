// Generated from ./src/grammars/PropLogic.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by PropLogicParser.

export default class PropLogicVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by PropLogicParser#program.
	visitProgram(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by PropLogicParser#expr.
	visitExpr(ctx) {
	  return this.visitChildren(ctx);
	}



}
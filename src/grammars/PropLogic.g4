grammar PropLogic;

AND : '&' ;
OR : 'v' ;
NOT : '~' ;
ARR : '=>' ;
DARR : '<=>' ;
LPAREN : '(' ;
RPAREN : ')' ;

SENT: [A-Z];

WS : [ \t\r\n]+ -> skip ;

program
    : expr EOF
    ;

expr: SENT
    | '~'expr
    | '('expr'&'expr')'
    | '('expr'v'expr')'
    | '('expr'=>'expr')'
    | '('expr'<=>'expr')'
    ;
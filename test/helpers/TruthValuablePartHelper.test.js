import truthValuablePartHelper from "../../src/business/helpers/TruthValuablePartHelper"

const stubServices = {
    ampersand: '&',
    or: 'or',
    arrow: '=>',
    negation: '~',
    doubleArrow: '<=>',
    sentence: 'A-Z'
};

const {extractTruthValuablePart,
    endsWithNonConnectiveTruthValuablePart,
    endsWithConnective} = truthValuablePartHelper(stubServices);

const stubCtx1Text = 'C';

const stubCtx1 = {
    getText: () => stubCtx1Text,
    children: []
};

const [stubCtx2Text, 
    stubCtx2Child1Text, 
    stubCtx2Child2Text]  = ['~G', '~', 'G'];

const [stubCtx2Child1, stubCtx2Child2] = 
    [{ getText: () => stubCtx2Child1Text },
    { getText: () => stubCtx2Child2Text }];

const stubCtx2 = {
    getText: () => stubCtx2Text,
    children: [
        stubCtx2Child1,
        stubCtx2Child2
    ]
};

const [
    stubCtx3Text, 
    stubCtx3Child1Text, 
    stubCtx3Child2Text, 
    stubCtx3Child3Text,
    stubCtx3Child4Text,
    stubCtx3Child5Text
]  = ['(~G=>F)', '(', '~G', '=>', 'F', ')'];

const [stubCtx3Child1, stubCtx3Child2, stubCtx3Child3, stubCtx3Child4, stubCtx3Child5] = 
    [{ getText: () => stubCtx3Child1Text },
    { getText: () => stubCtx3Child2Text },
    { getText: () => stubCtx3Child3Text },
    { getText: () => stubCtx3Child4Text },
    { getText: () => stubCtx3Child5Text }];

const stubCtx3 = {
    getText: () => stubCtx3Text,
    children: [
        stubCtx3Child1,
        stubCtx3Child2,
        stubCtx3Child3,
        stubCtx3Child4,
        stubCtx3Child5
    ]
};

const stubCases1 = [[stubCtx1, stubCtx1Text], [stubCtx2, stubCtx2Child1Text], [stubCtx3, stubCtx3Child3Text]]

describe('truth valuable part helper extract truth valuable part', () => {
    test.each(stubCases1)(
        '%p returns %p as expected',
        (stubToken, expectedResult) => {
            const result = extractTruthValuablePart(stubToken);
            expect(result).toEqual(expectedResult);
        })
});

const stubCases2 = [
    ['A', ['A', 'A']], ['(B', ['(B', 'B']], 
    [stubServices.arrow, null], [stubServices.negation, [stubServices.negation, stubServices.negation]], 
    [stubServices.ampersand, null], [stubServices.doubleArrow, null],
    [stubServices.or, null]
];

describe('truth valuable part helper ends with non connective part', () => {
    test.each(stubCases2)(
        '%p returns %p as expected',
        (stubToken, expectedResult) => {
            const result = endsWithNonConnectiveTruthValuablePart(stubToken);
            expect(result?.toString()).toEqual(expectedResult?.toString());
        })
});

const stubCases3 = [
    ['A', null], ['(B', null], 
    [stubServices.arrow, [stubServices.arrow, stubServices.arrow]], [stubServices.negation, null], 
    [`))${stubServices.ampersand}`, [`))${stubServices.ampersand}`, stubServices.ampersand]], 
    [stubServices.doubleArrow, stubServices.doubleArrow],
    [`)))${stubServices.or}`, [`)))${stubServices.or}`, stubServices.or]]
];

describe('truth valuable part helper ends with connective part', () => {
    test.each(stubCases3)(
        '%p returns %p as expected',
        (stubToken, expectedResult) => {
            const result = endsWithConnective(stubToken);
            expect(result?.toString()).toEqual(expectedResult?.toString());
        })
});
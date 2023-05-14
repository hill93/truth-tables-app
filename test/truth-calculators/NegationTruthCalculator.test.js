import negationTruthCalculator from "../../src/business/truth-calculators/NegationTruthCalculator";

const stubServices = {negation: '~'};
const { canCalculate, calculate } = negationTruthCalculator(stubServices);

const stubCases1 = [['r', false], ['~', true], ['&', false], ['G', false]];

describe('negation truth calculator can calculate', () => {
    test.each(stubCases1)(
        '%p returns %p as expected',
        (stubToken, expectedResult) => {
            const result = canCalculate(stubToken);
            expect(result).toEqual(expectedResult);
        })
});

const stubTruthStack = [
    { text: 'A'}, { text: '~A'}
]

const stubCases2 = [[true, false], [false, true]];

describe('negation truth calculator calculate', () => {
    test.each(stubCases2)(
        'negated %p returns %p as expected',
        (stubNegatedTruth, expectedResult) => {
            stubTruthStack[0].truthValue = stubNegatedTruth;

            const result = calculate(1, stubTruthStack);
            expect(result).toEqual(expectedResult);
        }
    )
})
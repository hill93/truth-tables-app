import sentenceTruthCalculator from "../../src/business/truth-calculators/SentenceTruthCalculator";

const stubServices = {sentence: 'A-Z'};
const { canCalculate, calculate } = sentenceTruthCalculator(stubServices);

const stubCases1 = [['r', false], ['C', true], ['&', false], ['G', true]];

describe('sentence truth calculator can calculate', () => {
    test.each(stubCases1)(
        '%p returns %p as expected',
        (stubToken, expectedResult) => {
            const result = canCalculate(stubToken);
            expect(result).toEqual(expectedResult);
        })
});

const stubTruthStack = [
    { text: 'A'}, { text: 'B'}
]
const stubUniverse = [
    {header: 'B', truthValue: false}, {header: 'A', truthValue: true}
]

const stubCases2 = [[0, true], [1, false]];

describe('sentence truth calculator calculate', () => {
    test.each(stubCases2)(
        '%p returns %p as expected',
        (stubPosition, expectedResult) => {
            const result = calculate(stubPosition, stubTruthStack, stubUniverse);
            expect(result).toEqual(expectedResult);
        }
    )
})
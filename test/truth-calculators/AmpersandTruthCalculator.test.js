import ampersandTruthCalculator from "../../src/business/truth-calculators/AmpersandTruthCalculator";

const mockGetSides = jest.fn();

const stubServices = {
    ampersand: '&', 
    sidesGetter: () => {return {get: mockGetSides}}
};
const { canCalculate, calculate } = ampersandTruthCalculator(stubServices);

const stubCases1 = [['r', false], ['~', false], ['&', true], ['G', false]];

describe('ampersand truth calculator can calculate', () => {
    test.each(stubCases1)(
        '%p returns %p as expected',
        (stubToken, expectedResult) => {
            const result = canCalculate(stubToken);
            expect(result).toEqual(expectedResult);
        })
});

const stubTruthStack = [
    { depth: 3}
]

const stubCases2 = [
    [true, true, true], 
    [true, false, false], 
    [false, true, false], 
    [false, false, false]
];

describe('ampersand truth calculator calculate', () => {
    test.each(stubCases2)(
        '%p AND %p returns %p as expected',
        (stubLeftTruth, stubRightTruth, expectedResult) => {
            mockGetSides.mockReturnValue({left: stubLeftTruth, right: stubRightTruth});

            const result = calculate(0, stubTruthStack);
            expect(result).toEqual(expectedResult);
        }
    )
})
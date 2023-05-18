import doubleArrowTruthCalculator from "../../src/business/truth-calculators/DoubleArrowTruthCalculator";

const mockGetSides = jest.fn();

const stubServices = {
    doubleArrow: '<=>', 
    sidesGetter: () => {return {get: mockGetSides}}
};
const { canCalculate, calculate } = doubleArrowTruthCalculator(stubServices);

const stubCases1 = [['r', false], ['<=>', true], ['&', false], ['G', false]];

describe('double arrow truth calculator can calculate', () => {
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
    [false, false, true]
];

describe('double arrow truth calculator calculate', () => {
    test.each(stubCases2)(
        '%p IFF %p returns %p as expected',
        (stubLeftTruth, stubRightTruth, expectedResult) => {
            mockGetSides.mockReturnValue({left: stubLeftTruth, right: stubRightTruth});

            const result = calculate(0, stubTruthStack);
            expect(result).toEqual(expectedResult);
        }
    )
})
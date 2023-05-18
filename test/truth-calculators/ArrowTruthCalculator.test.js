import arrowTruthCalculator from "../../src/business/truth-calculators/ArrowTruthCalculator";

const mockGetSides = jest.fn();

const stubServices = {
    arrow: '=>', 
    sidesGetter: () => {return {get: mockGetSides}}
};
const { canCalculate, calculate } = arrowTruthCalculator(stubServices);

const stubCases1 = [['=>', true], ['~', false], ['&', false], ['G', false]];

describe('arrow truth calculator can calculate', () => {
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
    [false, true, true], 
    [false, false, true]
];

describe('arrow truth calculator calculate', () => {
    test.each(stubCases2)(
        '%p => %p returns %p as expected',
        (stubLeftTruth, stubRightTruth, expectedResult) => {
            mockGetSides.mockReturnValue({left: stubLeftTruth, right: stubRightTruth});

            const result = calculate(0, stubTruthStack);
            expect(result).toEqual(expectedResult);
        }
    )
})
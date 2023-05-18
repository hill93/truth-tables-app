import orTruthCalculator from "../../src/business/truth-calculators/OrTruthCalculator";

const mockGetSides = jest.fn();

const stubServices = {
    or: 'v', 
    sidesGetter: () => {return {get: mockGetSides}}
};
const { canCalculate, calculate } = orTruthCalculator(stubServices)

const stubCases1 = [['v', true], ['~', false], ['&', false], ['G', false]];

describe('or truth calculator can calculate', () => {
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
    [true, false, true], 
    [false, true, true], 
    [false, false, false]
];

describe('or truth calculator calculate', () => {
    test.each(stubCases2)(
        '%p OR %p returns %p as expected',
        (stubLeftTruth, stubRightTruth, expectedResult) => {
            mockGetSides.mockReturnValue({left: stubLeftTruth, right: stubRightTruth});

            const result = calculate(0, stubTruthStack);
            expect(result).toEqual(expectedResult);
        }
    )
})
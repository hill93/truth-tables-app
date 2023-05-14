import sidesGetter from "../../src/business/truth-calculators/SidesGetter";

//npm test -- -t 'expected sides are got'
test('expected sides are got', () => {
    const { get } = sidesGetter();

    const stubTruthStack = [
        { depth: 5, processed: true, side: "L", truthValue: false },
        { depth: 5, processed: true, side: "R", truthValue: true },
        { depth: 4, processed: true, side: "L", truthValue: true },
        { depth: 5, processed: false, side: "L", truthValue: true},
        { depth: 5, processed: false, side: "R", truthValue: false},
        { depth: 4, processed: false, side: "R", truthValue: false},
        { depth: 3, processed: false, side: "L", truthValue: false},
        { depth: 4, processed: false, side: "L", truthValue: false},
        { depth: 5, processed: false, side: "L", truthValue: false},
        { depth: 6, processed: false, side: "L", truthValue: false},
        { depth: 5, processed: false, side: "R", truthValue: true},
        { depth: 4, processed: false, side: "R", truthValue: false},
        { depth: 3, processed: false, side: "R", truthValue: false},
        { depth: 2, processed: false, side: "L", truthValue: false}
    ]

    const result = get(stubTruthStack, 5, 4);

    expect(result.left).toBe(true);
    expect(result.right).toBe(false);
    expect(stubTruthStack[3].processed).toBe(true);
    expect(stubTruthStack[4].processed).toBe(true);
})
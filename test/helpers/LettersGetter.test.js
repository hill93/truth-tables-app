import lettersGetter from "../../src/business/helpers/LettersGetter";

test('expected letters are got', () => {
    const stubServices = {
        sentence: 'A-Z'
    };
    
    const { getLetters } = lettersGetter(stubServices);
    
    const stubLetter1 = 'D';
    const stubLetter2 = 'C';
    const stubLetter3 = 'B';
    const stubLetter4 = 'A';
    
    const stubConclusionMetadata = [
        {text: stubLetter1, anotherField: 'something'},
        {text: stubLetter3, anotherField: 'something'},
        {text: '(D&B)', anotherField: 'something'}
    ];
    
    const stubPremiseMetadata1 = [
        {text: stubLetter2, anotherField: 'something'},
        {text: stubLetter3, anotherField: 'something'},
        {text: '(CvB)', anotherField: 'something'}
    ];
    
    const stubPremiseMetadata2 = [
        {text: stubLetter3, anotherField: 'something'},
        {text: stubLetter1, anotherField: 'something'},
        {text: '(B=>C)', anotherField: 'something'}
    ];
    
    const stubPremiseMetadata3 = [
        {text: stubLetter2, anotherField: 'something'},
        {text: stubLetter4, anotherField: 'something'},
        {text: '(C&A)', anotherField: 'something'}
    ];
    
    const stubManager = {
        premiseData: [
            {metadata: stubPremiseMetadata1},
            {metadata: stubPremiseMetadata2},
            {metadata: stubPremiseMetadata3}
        ],
        conclusionData: {
            metadata: stubConclusionMetadata
        }
    };

    const expectedResult = [
        stubLetter4,
        stubLetter3,
        stubLetter2,
        stubLetter1
    ];

    const result = getLetters(stubManager);

    expect(result.toString()).toBe(expectedResult.toString());
})

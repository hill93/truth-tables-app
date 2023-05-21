import truthTableMetadataCreator from "../antlr-custom/TruthTableMetadataCreator";
import truthStackCreator from "../antlr-custom/TruthStackCreator";
import truthValuablePartHelper from "../helpers/TruthValuablePartHelper";
import truthTableManagerCreator from "../creators/TruthTableManagerCreator";
import truthTableCreator from "../creators/TruthTableCreator";
import sentenceTruthCalculator from "../truth-calculators/SentenceTruthCalculator";
import ampersandTruthCalculator from "../truth-calculators/AmpersandTruthCalculator";
import arrowTruthCalculator from "../truth-calculators/ArrowTruthCalculator";
import doubleArrowTruthCalculator from "../truth-calculators/DoubleArrowTruthCalculator";
import orTruthCalculator from "../truth-calculators/OrTruthCalculator";
import negationTruthCalculator from "../truth-calculators/NegationTruthCalculator";
import sidesGetter from "../truth-calculators/SidesGetter";
import lettersGetter from "../helpers/LettersGetter";
import truthTableBuilder from "../helpers/TruthTableBuilder";
import truthTableMetadataHelper from "../helpers/TruthTableMetadataHelper";
import truthTableManagerBuilder from "../helpers/TruthTableManagerBuilder";
import propLogicTreeCreator from "../antlr-custom/PropLogicTreeCreator";

export const defaultDeps = {
    truthTableManagerCreator: truthTableManagerCreator,
    truthTableMetadataCreator: truthTableMetadataCreator,
    truthStackCreator: truthStackCreator,
    truthValuablePartHelper: truthValuablePartHelper,
    truthTableCreator: truthTableCreator,
    truthCalculators: [
        sentenceTruthCalculator,
        ampersandTruthCalculator,
        arrowTruthCalculator,
        doubleArrowTruthCalculator,
        orTruthCalculator,
        negationTruthCalculator
    ],
    sidesGetter: sidesGetter,
    lettersGetter: lettersGetter,
    truthTableBuilder: truthTableBuilder,
    truthTableMetadataHelper: truthTableMetadataHelper,
    truthTableManagerBuilder: truthTableManagerBuilder,
    propLogicTreeCreator: propLogicTreeCreator
}
import useTruthTableMetadataCreator from "../hooks/custom-visitors/TruthTableMetadataCreator";
import useTruthStackCreator from "../hooks/custom-listeners/TruthStackCreator";
import truthValuablePartHelper from "../helpers/TruthValuablePartHelper";
import truthTableManager from "../TruthTableManager";
import useTruthTableCreator from "../hooks/TruthTableCreator";
import sentenceTruthCalculator from "../truth-calculators/SentenceTruthCalculator";
import ampersandTruthCalculator from "../truth-calculators/AmpersandTruthCalculator";
import arrowTruthCalculator from "../truth-calculators/ArrowTruthCalculator";
import doubleArrowTruthCalculator from "../truth-calculators/DoubleArrowTruthCalculator";
import orTruthCalculator from "../truth-calculators/OrTruthCalculator";
import negationTruthCalculator from "../truth-calculators/NegationTruthCalculator";
import sidesGetter from "../truth-calculators/SidesGetter";
import lettersGetter from "../helpers/LettersGetter";
import truthTableHelper from "../helpers/TruthTableHelper";

export const defaultDeps = {
    truthTableManager: truthTableManager,
    useTruthTableMetadataCreator: useTruthTableMetadataCreator,
    useTruthStackCreator: useTruthStackCreator,
    truthValuablePartHelper: truthValuablePartHelper,
    useTruthTableCreator: useTruthTableCreator,
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
    truthTableHelper: truthTableHelper
}
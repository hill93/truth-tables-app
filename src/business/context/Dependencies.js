import useTruthTableMetadataCreator from "../hooks/custom-visitors/TruthTableMetadataCreator";
import useTruthStackCreator from "../hooks/custom-listeners/TruthStackCreator";
import useTruthValuablePartHelper from "../hooks/TruthValuablePartHelper";
import truthTableManager from "../TruthTableManager";
import useTruthTableCreator from "../hooks/TruthTableCreator";

export const defaultDeps = {
    truthTableManager: truthTableManager,
    useTruthTableMetadataCreator: useTruthTableMetadataCreator,
    useTruthStackCreator: useTruthStackCreator,
    useTruthValuablePartHelper: useTruthValuablePartHelper,
    useTruthTableCreator: useTruthTableCreator
}
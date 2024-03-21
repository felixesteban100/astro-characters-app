import FeatureTabContainer from "./FeatureTabContainer"
import Stats from "../Stats"

type FeatureTabStatsProps = {
    selectedCharacter: Character
}

export default function FeatureTabStats({ selectedCharacter }: FeatureTabStatsProps) {
    return (
        <FeatureTabContainer
            valueTab="Stats"
            extraClassNames="border-2"
        >
            <Stats selectedCharacter={selectedCharacter} />
        </FeatureTabContainer>
    )
}

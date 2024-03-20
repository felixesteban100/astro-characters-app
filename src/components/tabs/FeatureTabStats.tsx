import FeatureTabContainer from "./FeatureTabContainer"
import Stats from "../Stats"
import { getRandomIdRecursively } from "@/lib/charactersUtils"

type FeatureTabStatsProps = {
    selectedCharacter: Character
}

export default function FeatureTabStats({ selectedCharacter }: FeatureTabStatsProps) {
    return (
        <FeatureTabContainer
            valueTab="Stats"
            extraClassNames="border-2"
        >
            <>
                <a href={`/fight?first=${selectedCharacter.id}&second=${getRandomIdRecursively()}`}></a>
                <Stats selectedCharacter={selectedCharacter} />
            </>
        </FeatureTabContainer>
    )
}

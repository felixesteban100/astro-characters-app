import FeatureTabContainer from "./FeatureTabContainer"
import StatContainer from "../stats/StatContainer"
import { getTeamByUniverse } from "../../lib/constants"
import { GetColorOfTheLogoByTeam } from "../../lib/charactersUtils"

type FeatureTabTeamsProps = {
    selectedCharacter: Character,
}

function FeatureTabTeams({ selectedCharacter }: FeatureTabTeamsProps) {

    return (
        <div>
            <FeatureTabContainer
                valueTab="Teams"
                extraClassNames="border-2"
            >
                <StatContainer>
                    {/* <div>Teams</div> */}
                    {
                        getTeamsImagesByCharacter(selectedCharacter).length > 0 ?
                            <div
                                className="w-full flex flex-col flex-wrap justify-center items-center gap-5 my-5 pb-10"
                            >
                                {
                                    getTeamsImagesByCharacter(selectedCharacter).map((teamFound) => {
                                        return (
                                            <a
                                                href={`/characters?universe=${selectedCharacter.biography.publisher}&team=${teamFound.value}`}
                                                className="mt-5 mx-auto flex gap-1 flex-col cursor-pointer group/items"
                                            >
                                                <img
                                                    className={`${GetColorOfTheLogoByTeam(teamFound.name)}`}
                                                    width={500}
                                                    height={500}
                                                    src={teamFound?.img}
                                                    alt={teamFound?.name}
                                                />
                                                <p className="font-semibold text-primary text-xl group-hover/items:underline">{teamFound?.name}</p>
                                            </a>
                                        )
                                    })
                                }
                            </div>
                            :
                            <div className="w-full flex flex-col flex-wrap justify-center items-center gap-5 my-5">
                                <div className="text-xl font-bold text-center my-5">No teams</div>
                            </div>
                    }
                </StatContainer>
            </FeatureTabContainer>

        </div>
    )
}

export function getTeamsImagesByCharacter(selectedCharacter: Character) {
    const imagesget = getTeamByUniverse(
        selectedCharacter.biography.publisher
    ).reduce((acc, teamToFind) => {
        const teamsByCharacter =
            selectedCharacter.connections.groupAffiliation.split(/,|;/);
        let imageTeam;

        function findWordBetweenSpaces(
            inputString: string,
            targetWord: string
        ): boolean {
            const regex = new RegExp(`\\b${targetWord}\\b`);
            return regex.test(inputString);
        }

        teamsByCharacter.forEach((team) => {
            if (
                findWordBetweenSpaces(
                    team.trim().toLowerCase(),
                    teamToFind.value.toLowerCase().trim()
                )
                
            ) {
                imageTeam = teamToFind;
            }
        });
        if (imageTeam) acc.push(imageTeam);
        return acc;
    }, new Array());

    const uniqueIds = new Set();
    const filteredArray = imagesget.filter((obj) => {
        const value = obj.value;
        if (value !== undefined && !uniqueIds.has(value)) {
            uniqueIds.add(value);
            return true;
        }
        return false;
    });

    return filteredArray;
}

export default FeatureTabTeams
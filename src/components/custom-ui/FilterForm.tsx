import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { teamByUniverseStore } from '../../state/teamByUniverseStore'
import SelectFilterCharacters from "../../components/custom-ui/SelectFilterCharacters";
import {
    ALLALIGMENTS,
    ALLGENDERS,
    ALLRACES,
    ALLUNIVERSE,
    getTeamByUniverse,
} from "../../lib/constants";
import { useStore } from '@nanostores/react';
// import { teamStore } from "@/state/teamStore";


type FilterFormProps = {
    characterName: string;
    gender: string;
    side: string;
    race: string;
    universe: string;
    team: string;
}


export default function FilterForm({ characterName, gender, side, race, universe, team }: FilterFormProps) {
    const teamByUniverse = useStore(teamByUniverseStore);
    
    // teamByUniverseStore.set(getTeamByUniverse(universe))
    // const teamS = useStore(teamStore);
    
    return (
        <div className="w-full mb-10 flex flex-col gap-5 mt-10">
            <a href="/characters">Fight</a>

            <Label className="flex flex-col gap-5">
                CharacterName/s:
                <Input
                    type="text"
                    name="characterName"
                    defaultValue={characterName}
                />
            </Label>

            <SelectFilterCharacters
                options={ALLGENDERS}
                placeholder="Gender"
                defaultValue={gender}
                paramName="gender"
            />

            <SelectFilterCharacters
                options={ALLALIGMENTS}
                placeholder="Aligment"
                defaultValue={side}
                paramName="side"
            />

            <SelectFilterCharacters
                options={ALLRACES}
                placeholder="Race"
                defaultValue={race}
                paramName="race"
            />

            <SelectFilterCharacters
                options={ALLUNIVERSE}
                placeholder="Universe"
                defaultValue={universe}
                paramName="universe"
                /* onChange={(value: string) => {
                    teamByUniverseStore.set(getTeamByUniverse(value));
                }} */
            />

            {/* {(teamByUniverse && teamByUniverse.length > 0) && (
                <SelectFilterCharacters
                    options={teamByUniverse}
                    placeholder="Teams"
                    defaultValue={team}
                    paramName="team"
                />
            )} */}
        </div>
    )
}

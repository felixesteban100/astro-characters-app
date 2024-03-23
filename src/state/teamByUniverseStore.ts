import { atom } from 'nanostores';

export const teamByUniverseStore = atom(new Array())

export function setTeamByUniverseStore(universe: string) {
    // $users.set([...$users.get(), user]);
}
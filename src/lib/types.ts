export type Character = {
    powerstats: {
        intelligence: number;
        strength: number;
        speed: number;
        durability: number;
        power: number;
        combat: number;
        total: number;
    };
    appearance: {
        gender: string;
        race: string | null;
        height: [string, string];
        weight: [string, string];
        eyeColor: string;
        hairColor: string;
        age: string;
    };
    biography: {
        fullName: string;
        alterEgos: string;
        aliases: string[];
        placeOfBirth: string;
        firstAppearance: string;
        publisher: string;
        alignment: string;
    };
    work: {
        occupation: string;
        base: string;
    };
    connections: {
        groupAffiliation: string[];
        relatives: string;
    };
    images: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        // mdi?: string;
        // md2?: string;
        [key: string]: string
    };
    _id: string;
    id: number;
    name: string;
    slug: string;
    comics?: string[];
    powers: (string | number)[]
}

export type CharacterWithJoinTeamUniversePower = {
    powerstats: {
        intelligence: number;
        strength: number;
        speed: number;
        durability: number;
        power: number;
        combat: number;
        total: number;
    };
    appearance: {
        gender: string;
        race: string | null;
        height: [string, string];
        weight: [string, string];
        eyeColor: string;
        hairColor: string;
        age: string;
    };
    biography: {
        fullName: string;
        alterEgos: string;
        aliases: string[];
        placeOfBirth: string;
        firstAppearance: string;
        publisher: Omit<Universe, "teams">;
        alignment: string;
    };
    work: {
        occupation: string;
        base: string;
    };
    connections: {
        groupAffiliation: Omit<Team, "members" | "universe">[];
        relatives: string;
    };
    images: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        // mdi?: string;
        // md2?: string;
        [key: string]: string
    };
    _id: string;
    id: number;
    name: string;
    slug: string;
    comics?: string[];
    powers: Power[]
}

export type Universe = {
    id: number;
    name: string,
    value: string,
    teams: number[]
    img: string,
    comics?: string[]
}

export type UniverseWithJoinTeams = {
    id: number;
    name: string,
    value: string,
    teams: Omit<Team, "members" | "universe" | "comics">[]
    img: string,
    comics?: string[]
}

export type Team = {
    id: number
    name: string,
    value: string,
    description: string,
    members: { name: string, id: number }[], // OLD 
    // members: { id: number }[], // NEW 
    universe: { name: string, value: string, img: string }, // OLD
    // universe: { value: string }, // NEW 
    img: string,
    comics: string[]
}

export type TeamWithJoinCharacterUniverse = {
    id: number
    name: string,
    value: string,
    description: string,
    members: Omit<Character, "comics" | "slug" | "powerstats" | "appearance" | "biography" | "work" | "connections" | "powers">[],
    universe: Omit<Universe, "teams" | "comics">
    img: string,
    comics: string[]
}
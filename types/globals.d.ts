/* CHARACTER */
declare type Character = {
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
        description: string;
    };
    biography: {
        fullName: string;
        alterEgos: string;
        aliases: string[];
        placeOfBirth: string;
        firstAppearance: string;
        publisher: string;
        alignment: string;
        origin: ""
    };
    work: {
        occupation: string;
        base: string;
    };
    connections: {
        groupAffiliation: string[];
        relatives: string;
        enemies: string[]
    };
    images: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        // mdi?: string;
        // md2?: string;
        [key: string]: string;
    };
    _id: string;
    id: number;
    name: string;
    slug: string;
    comics?: string[];
    powers: (string | number)[];
    weaknesses: string[];
    logo: string;
    tier: number;
    character_class: number;
};
declare type CharacterWithJoinTeamUniversePower = Omit<Character, "biography.publisher" | "connections.groupAffiliation" | "powers"> & {
    biography: {
        publisher: Omit<Universe, "teams">;
    };
    connections: {
        groupAffiliation: Omit<Team, "universe">[];
    };
    powers: Power[]
}

/* TEAM */
declare type Team = {
    id: number;
    name: string,
    value: string,
    description: string,
    universe: { name: string, value: string }, // OLD
    logo: string,
    comics: string[]
    leaders: string[]
}
declare type TeamWithJoinCharacterUniverse = Omit<Team, "universe"> & {
    members: Omit<Character, "comics" | "slug" | "powerstats" | "appearance" | "biography" | "work" | "connections" | "powers">[],
    universe: Omit<Universe, "teams" | "comics">
}

/* UNIVERSE */
declare type Universe = {
    id: number;
    name: string,
    value: string,
    teams: number[]
    logo: string,
    comics?: string[]
    description: string
}
declare type UniverseWithJoinTeams = Omit<Universe, "teams"> & {
    teams: Omit<Team, "universe" | "comics">[]
}

/* POWER */
declare type Power = {
    _id: string;
    id: number;
    name: string,
    value: string,
    img: string,
    description: string,
    score: number
    tier: number
}


declare type QueryOptions = {
    id?: number | { $in: number[] }
    name?: { $in: RegExp[] }/* RegExp | */ /* RegExp[] */ /* { "$or": RegExp[] } */;
    "biography.fullName"?: { $in: RegExp[] } /* RegExp | */ /* RegExp[] *//* { "$or": RegExp[] }; */
    "biography.alignment"?: string;
    "biography.publisher.value"?: string;
    "connections.groupAffiliation.value"?: string | RegExp;
    "appearance.gender"?: string;
    "appearance.race"?: string | RegExp;
    "powers.value"?: string | RegExp;
};

declare type CharacterInfo = {
    // name: string;
    // id: string;
    link: string
} & Character

declare type CharacterAttributes = {
    'connections.groupAffiliation': string,
    'biography.alignment': string,
    'appearance.gender': string,
    'appearance.race': string,
    'biography.publisher': string
}

declare type RandomImage = { selectedRandomImage: { key: string, value: string } }

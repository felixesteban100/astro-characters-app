
export function getTeamAggregationOptions(universe: string | undefined) {
    const normalLookup = [{
        $lookup: {
            from: "universes",
            localField: "universe",
            foreignField: "id",
            pipeline: [{ $project: { teams: 0, comics: 0 } }],
            as: "universe",
        },
    },
    {
        $lookup: {
            from: "characters",
            localField: "id",
            foreignField: "connections.groupAffiliation",
            pipeline: [
                {
                    $project: {
                        slug: 0,
                        powerstats: 0,
                        appearance: 0,
                        biography: 0,
                        work: 0,
                        connections: 0,
                        powers: 0,
                    },
                },
            ],
            as: "members",
        },
    }]

    if (universe !== undefined) return [
        ...normalLookup,
        { $match: universe !== "All" ? { "universe.value": universe } : {} }
    ]

    return normalLookup
}

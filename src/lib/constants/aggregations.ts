
export function getTeamAggregationOptions(queryOptions: {
    "universe.value": string;
} | {
    "universe.value"?: undefined;
} | {
    "name"?: string
}) {
    return [
        {
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
        },
        { $match: { ...queryOptions } },
    ]
}

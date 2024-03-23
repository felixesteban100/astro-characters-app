import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ALLALIGMENTS, ALLGENDERS, ALLRACES, ALLUNIVERSE, getTeamByUniverse } from "@/lib/constants"

const formSchema = z.object({
    characterName: z.string(),
    // characterOrFullName: z.boolean(),
    // includesOrExact: z.boolean(),
    // howMany: z.string(),
    show_all: z.boolean(),
    side: z.string(),
    universe: z.string(),
    team: z.string(),
    gender: z.string(),
    race: z.string(),

    // sortBy: z.enum(sortByValues),
    sortBy: z.string(),
    // sortDirection: z.enum(['asc', 'desc'])
    sortDirection: z.string(),
})

// export type sortByType = z.infer<typeof formSchema.shape.sortBy>
// export type sortDirectionType = z.infer<typeof formSchema.shape.sortDirection>

type FilterCharactersProps = {
    characterName: string;
    gender: string;
    side: string;
    race: string;
    universe: string;
    team: string;
}

export default function FilterCharacters({ characterName, gender, side, race, universe, team }: FilterCharactersProps) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            characterName: characterName,
            // characterOrFullName: characterOrFullName,
            // includesOrExact: includesOrExact,
            // howMany: searchParams.get('howMany') ?? "50",
            // show_all: searchParams.get('show_all') === "true",
            side: side,
            universe: universe,
            team: team,
            gender: gender,
            race: race,

            // sortBy: sortBy,
            // sortDirection: sortDirection
        },
    })

    // const sortByValues = ["name", "id", "_id", "powerstats.power", "powerstats.intelligence", "powerstats.strength", "powerstats.durability", "powerstats.combat", "powerstats.speed"]
    // const sideValues = ["All", "good", "bad", "neutral"]
    const teamByUniverse: { name: string, value: string }[] = getTeamByUniverse(form.watch().universe)

    function onSubmit(values: z.infer<typeof formSchema>) {
        
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="h-[78vh] overflow-y-scroll"
            >
                <FormField
                    control={form.control}
                    name="characterName"
                    render={({ field }) => (
                        <FormItem className="w-[95%] mx-auto">
                            {/* <FormLabel>{form.getValues().characterOrFullName ? 'Full Name' : "Name"}</FormLabel> */}
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                {/* <Input placeholder={form.getValues().characterOrFullName ? "Bruce, Tony, Peter" : "Batman, Iron Man, Spider-Man"} {...field} /> */}
                                <Input placeholder={"Batman, Iron Man, Spider-Man"} {...field} />
                            </FormControl>
                            <FormDescription>
                                {/* Example: {form.getValues().characterOrFullName ? "Bruce, Tony, Peter" : "Batman, Iron Man, Spider-Man"} */}
                                Example: Batman, Iron Man, Spider-Man
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                
                <FormField
                    control={form.control}
                    name="side"
                    render={({ field }) => (
                        <FormItem className="w-[95%] mx-auto mt-5">
                            <FormLabel>Side</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a side" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {ALLALIGMENTS.map((c) => (
                                        <SelectItem key={c.value} value={c.value}>{c.name}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormDescription>
                                Example: good, bad, neutral
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                        <FormItem className="w-[95%] mx-auto mt-5">
                            <FormLabel>Gender</FormLabel>
                            <select onChange={(e) => field.onChange(e.target.value)} defaultValue={field.value}>
                                {/* <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a gender" />
                                    </SelectTrigger>
                                </FormControl> */}
                                {/* <SelectContent> */}
                                    {ALLGENDERS.map((c) => (
                                        <option key={c.value} value={c.value}>{c.name}</option>
                                    ))}
                                {/* </SelectContent> */}
                            </select>
                            <FormDescription>
                                Example: both, female, male
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="race"
                    render={({ field }) => (
                        <FormItem className="w-[95%] mx-auto mt-5">
                            <FormLabel>Race</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a race" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <ScrollArea className="h-[200px]">
                                        {ALLRACES.map((c) => (
                                            <SelectItem key={c.value} value={c.value}>{c.name}</SelectItem>
                                        ))}
                                    </ScrollArea>
                                </SelectContent>
                            </Select>
                            <FormDescription>
                                Example: human, alien, kryptonian...
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="universe"
                    render={({ field }) => (
                        <FormItem className="w-[95%] mx-auto mt-5">
                            <FormLabel>Universe</FormLabel>
                            <Select
                                onValueChange={(e) => {
                                    field.onChange(e)
                                    form.setValue('team', 'All')
                                }}
                                defaultValue={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a universe" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <ScrollArea className="h-[200px]">
                                        {ALLUNIVERSE.map((c, index) => (
                                            <SelectItem key={`${c.value}-${index}`} value={c.value}>{c.name}</SelectItem>
                                        ))}
                                    </ScrollArea>
                                </SelectContent>
                            </Select>
                            <FormDescription>
                                Example: Marvel, DC, Shueisha...
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* {
                    teamByUniverse.length > 0 ?
                        <FormField
                            control={form.control}
                            name="team"
                            render={({ field }) => (
                                <FormItem className="w-[95%] mx-auto mt-5">
                                    <FormLabel>Team</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a team" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <ScrollArea className="h-[200px]">
                                                <SelectItem value="All">All teams</SelectItem>
                                                {teamByUniverse.map((c, index) => (
                                                    <SelectItem key={`${c.value}-${index}`} value={c.value}>{c.name}</SelectItem>
                                                ))}
                                            </ScrollArea>
                                        </SelectContent>
                                    </Select>
                                    <FormDescription>
                                        Example: Avengers, Justice League...
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        : null
                } */}

                <div className="w-full flex justify-end">
                    <Button type="submit">Filter</Button>
                </div>
            </form>
        </Form>

    )
}

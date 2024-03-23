import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FeatureTabStats from "./FeatureTabStats";
import FeatureTabAppereance from "./FeatureTabAppereance";
import FeatureTabBiography from "./FeatureTabBiography";
import FeatureTabTeams from "./FeatureTabTeams";
import FeatureTabComics from "./FeatureTabComics";
import { BarChart4, Eye, Library, PictureInPicture } from "lucide-react";
import { GrGroup } from "react-icons/gr";

type CharacterFeaturesProps = {
    selectedCharacter: Character,
    tab: string;
}

export default function CharacterFeatures({ selectedCharacter, tab }: CharacterFeaturesProps) {
    return (
        <Tabs
            defaultValue={tab}
            className="h-full w-full "
            // lg:w-[70%] md:flex-initial lg:mt-16
        >
            <TabsList className={`grid w-full grid-cols-5 bg-accent`}>
                <TabsTrigger className='text-base-content hidden md:block' value="Stats">Stats</TabsTrigger>
                <TabsTrigger className='text-base-content md:hidden flex justify-center' value="Stats"><BarChart4 size={20} /></TabsTrigger>
                <TabsTrigger className='text-base-content hidden md:block' value="Appereance">Appereance</TabsTrigger>
                <TabsTrigger className='text-base-content md:hidden flex justify-center' value="Appereance"><Eye size={20} /></TabsTrigger>
                <TabsTrigger className='text-base-content hidden md:block' value="Biography">Biography</TabsTrigger>
                <TabsTrigger className='text-base-content md:hidden flex justify-center' value="Biography"><Library size={20} /></TabsTrigger>
                <TabsTrigger className='text-base-content hidden md:block' value="Teams">Teams</TabsTrigger>
                <TabsTrigger className='text-base-content md:hidden flex justify-center' value="Teams"><GrGroup size={20} /></TabsTrigger>
                <TabsTrigger className='text-base-content hidden md:block' value="Comics">Comics</TabsTrigger>
                <TabsTrigger className='text-base-content md:hidden flex justify-center' value="Comics"><PictureInPicture size={20} /></TabsTrigger>
            </TabsList>
            <FeatureTabStats selectedCharacter={selectedCharacter}/>
            <FeatureTabAppereance selectedCharacter={selectedCharacter}/>
            <FeatureTabBiography selectedCharacter={selectedCharacter}/>
            <FeatureTabTeams selectedCharacter={selectedCharacter}/>
            <FeatureTabComics selectedCharacter={selectedCharacter}  />
        </Tabs>
        
    )
}


{/*  */}

        /* <Tabs defaultValue="account" className="">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Make changes to your account here.</TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs> */
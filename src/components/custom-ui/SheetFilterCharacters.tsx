import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import type { ReactNode } from "react";
import { FilterX } from "lucide-react";

type SheetFilterCharactersProps = {
    children: ReactNode | ReactNode[];
}

export default function SheetFilterCharacters({ children }: SheetFilterCharactersProps) {
    return (
        <Sheet>
            <SheetTrigger>
                <Button variant={"ghost"}><FilterX /></Button>
            </SheetTrigger>
            <SheetContent>
                {/* <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                        This action cannot be undone. This will permanently delete your
                        account and remove your data from our servers.
                    </SheetDescription>
                </SheetHeader> */}
                {children}
            </SheetContent>
        </Sheet>
    )
}

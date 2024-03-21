import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { ReactNode } from "react";

type SheetNavProps = {
  children: ReactNode;
}

export default function SheetNav({ children }: SheetNavProps) {
  return (
    <Sheet>
      <SheetTrigger className="block md:hidden">
        <Button variant={"ghost"}>
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>
        {children}
      </SheetContent>
    </Sheet>
  );
}

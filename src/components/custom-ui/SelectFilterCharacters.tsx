import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label";

type SelectFilterCharactersProps = {
    defaultValue: string;
    options: { value: string, name: string }[] ;
    placeholder: string;
    paramName: string;
    onChange?: (value: string) => void;
}

export default function SelectFilterCharacters({ defaultValue, options, placeholder, paramName, onChange }: SelectFilterCharactersProps) {
    return (
        <Label className="flex flex-col gap-5">
              {placeholder}:
        <Select name={paramName} defaultValue={defaultValue ?? "light"} onValueChange={onChange}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                {options.map((c) => (
                    <SelectItem key={c.value} value={c.value}>{c.name}</SelectItem>
                ))}
            </SelectContent>
        </Select>
        </Label>
    )
}

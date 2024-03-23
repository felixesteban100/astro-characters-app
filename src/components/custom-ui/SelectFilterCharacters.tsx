import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label";

type SelectFilterCharactersProps<T> = {
    defaultValue: string;
    options: { value: string, name: string }[];
    placeholder: string;
    paramName: string;
    onChange?: (value: string) => void
}

export default function SelectFilterCharacters({ defaultValue, options, placeholder, paramName, onChange}: SelectFilterCharactersProps<{ name: string; value: string; img: string;}[]>) {
    return (
        <Label className="flex flex-col gap-5">
              {placeholder}:
        <Select name={paramName} defaultValue={defaultValue} onValueChange={onChange}>
            <SelectTrigger className="">
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

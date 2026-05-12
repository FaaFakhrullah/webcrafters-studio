import { Select } from "@/components/ui/select";

export function FilterDropdown({
  name,
  options,
  defaultValue
}: {
  name: string;
  options: string[];
  defaultValue?: string;
}) {
  return (
    <Select name={name} defaultValue={defaultValue || options[0]}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option.replaceAll("_", " ")}
        </option>
      ))}
    </Select>
  );
}
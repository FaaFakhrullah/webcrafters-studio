import { Input } from "@/components/ui/input";

export function SearchInput({
  name = "q",
  placeholder = "Search...",
  defaultValue
}: {
  name?: string;
  placeholder?: string;
  defaultValue?: string;
}) {
  return <Input name={name} placeholder={placeholder} defaultValue={defaultValue} />;
}
export function FormSuccessMessage({ message }: { message: string }) {
  return <p className="rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700">{message}</p>;
}
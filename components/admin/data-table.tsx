import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type DataTableProps<T> = {
  headers: string[];
  rows: T[];
  renderRow: (row: T) => React.ReactNode;
};

export function DataTable<T>({ headers, rows, renderRow }: DataTableProps<T>) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {headers.map((header) => (
            <TableHead key={header}>{header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row, index) => (
          <TableRow key={index}>{renderRow(row)}</TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export { TableCell };
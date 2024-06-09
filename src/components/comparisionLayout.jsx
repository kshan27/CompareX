import { Table, TableBody, TableRow, TableCell } from "@/components/ui/table"

export default function ComparisionLayout() {
    return (
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
            <section>
            <h2 className="text-xl font-semibold mb-4">August comparison</h2>
            <Table>
                <TableBody>
                  {Array.from({ length: 10 }).map((_, index) => (
                    <TableRow key={index}>
                      <TableCell className="w-[10%]">
                        <span className="text-green-500 text-xs"> New </span>
                      </TableCell>
                      <TableCell className="w-[90%]">
                        Product A offers Advanced AI-driven automation, while B prioritizes intuitive user interfaces.
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              </section>
        </div>
    )
}
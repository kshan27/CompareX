import { Table, TableBody, TableRow, TableCell } from "@/components/ui/table"
import { getFilteredComparisions } from '@/lib/compareFuns';

export default function ComparisionLayout({title, comparisions, searchTerm}) {

    const filteredComps = getFilteredComparisions(comparisions, searchTerm);
    
    return (
        <div className="relative flex flex-col justify-start rounded-sm overflow-hidden bg-white-color p-6 sm:py-10 mb-5">
            <section>
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            <Table>
                <TableBody>
                  {filteredComps && Array.from(filteredComps).map((row, index) => (
                    <TableRow key={index}>
                      <TableCell className="w-[10%]">
                        <span className="text-green-500 text-xs"> New </span>
                      </TableCell>
                      <TableCell className="w-[90%]">
                        {row}
                      </TableCell>
                    </TableRow>
                  ))}
                  {!filteredComps && <TableRow> 
                    <TableCell className="w-[100%]">
                        <strong> No comparisions found for selected products in current month. </strong>
                    </TableCell>
                  </TableRow>
                  }
                </TableBody>
              </Table>
              </section>
        </div>
    )
}
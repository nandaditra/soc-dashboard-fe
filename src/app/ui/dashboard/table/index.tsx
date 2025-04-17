import ListTable from "../listtable";
import "./design.css"

type ListPhising = {
    id:string,
    url:string, 
    registrar_reported:string,  
    registrar_resolved:string,  
    safebrowsing_reported:string,  
    safebrowsing_resolved:string, 
    takedown_reported:string,  
    takedown_resolved:string,  
    ddos_reported:string,  
    ddos_resolved:string,  
    komdigi_reported:string,  
    komdigi_resolved:string,  
}

interface TableProps {
    items: ListPhising[],
    onDelete:(id:string) => void
    onEdit:(id:string) => void
}

export default function Table(
{ items, onEdit, onDelete}: TableProps
){
    return (
        <div className="overflow-auto max-h-[600px] scrollbarr">
            <table className="min-w-[1200px] mt-4 table-auto text-center border-collapse w-full">
                <thead className="text-xs">
                    <tr className="font-normal bg-gray-200 dark:bg-slate-800">
                        <th rowSpan={2} className="px-4 py-2 font-medium whitespace-nowrap w-72">Phishing URL</th>
                        <th colSpan={2} className="px-4 py-2 font-medium border-b border-gray-500">Report Registrar</th>
                        <th colSpan={2} className="px-4 py-2 font-medium border-b border-gray-500">Safebrowsing</th>
                        <th colSpan={2} className="px-4 py-2 font-medium border-b border-gray-500">Takedown Provider</th>
                        <th colSpan={2} className="px-4 py-2 font-medium border-b border-gray-500">DDoS</th>
                        <th colSpan={2} className="px-4 py-2 font-medium border-b border-gray-500">Komdigi</th>
                        <th rowSpan={2} colSpan={2} className="px-4 py-2">Action</th>
                    </tr>
                    <tr className="border-b border-gray-500 dark:bg-slate-800">
                        <th className="px-4 py-2">Reported</th>
                        <th className="px-4 py-2">Resolved</th>
                        <th className="px-4 py-2">Reported</th>
                        <th className="px-4 py-2">Resolved</th>
                        <th className="px-4 py-2">Reported</th>
                        <th className="px-4 py-2">Resolved</th>
                        <th className="px-4 py-2">Reported</th>
                        <th className="px-4 py-2">Resolved</th>
                        <th className="px-4 py-2">Reported</th>
                        <th className="px-4 py-2">Resolved</th>
                    </tr>
                </thead>
                <tbody className="text-sm">
                {items.map((data, i) => (
                    <ListTable
                    key={i}
                    index={i}
                    phishing={data}
                    editDataById={onEdit}
                    deleteDataById={onDelete}
                    />
                ))}
                </tbody>
            </table>
            </div>
    )
}
import ListTable from "../listtable";

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
        <table className="table-auto mt-4 text-center w-full text-xs">
            <tbody className="text-sm">
            <tr className="font-normal">
                <th rowSpan={2} className="px-4 py-2 font-medium">Phishing URL</th>
                <th colSpan={2} className="px-4 py-2 font-medium border-b-1 border-gray-500">Report Registrar</th>
                <th colSpan={2} className="px-4 py-2 font-medium border-b-1 border-gray-500">Safebrowsing</th>
                <th colSpan={2} className="px-4 py-2 font-medium border-b-1 border-gray-500">Takedown Provider</th>
                <th colSpan={2} className="px-4 py-2 font-medium border-b-1 border-gray-500">DDoS</th>
                <th colSpan={2} className="px-4 py-2 font-medium border-b-1 border-gray-500">Komdigi</th>
                <th colSpan={2} rowSpan={2} className="px-4 py-2">Action</th>
            </tr>
            <tr className="border-b-1 border-gray-500">
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
            
                {
                    items.map((data, i)=> 
                        <ListTable
                          key={i}
                          index={i}
                          phishing={data}
                          editDataById={onEdit}
                          deleteDataById={onDelete}
                        />
                    )
                    }
             </tbody>
        </table>
    )
}
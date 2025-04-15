interface DataTable {
    id:number,
    name:string,
    url:string,
    domain:string,
    created_at:string,
    updated_at:string,
    dos_time:string
}

export default function ListTable({
    id, 
    name, 
    url,
    domain,
    created_at,
    updated_at,
    dos_time,       
}:DataTable) {
    return (
        <tr key={id} className="border-b-1 border-gray-500">
             <td className="py-2 dark:text-white">{id+1}</td>
             <td className="py-2 dark:text-white">{name}</td>
             <td className="py-2 text-gray-500">{url}</td>
             <td className="py-2 text-gray-500">{domain}</td>
             <td className="py-2 text-gray-500">{created_at}</td>
             <td className="py-2 text-gray-500">{updated_at}</td>
             <td className="py-2 text-gray-500">{dos_time}</td>
        </tr> 
    )
}
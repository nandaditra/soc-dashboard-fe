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

    function formatTime(time:string) {
        const date = new Date(time);
        
        // Convert to GMT+7
        date.setHours(date.getHours() + 7);
        
        // Format to YYYY-MM-DD HH:mm:ss
        const yyyy = date.getFullYear();
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const dd = String(date.getDate()).padStart(2, '0');
        const hh = String(date.getHours()).padStart(2, '0');
        const min = String(date.getMinutes()).padStart(2, '0');
        
        const formatted = `${yyyy}-${mm}-${dd} ${hh}:${min}`;
        return formatted
    }
    
    return (
        <tr key={id} className="border-b-1 border-gray-500">
             <td className="py-2 dark:text-white">{id+1}</td>
             <td className="py-2 dark:text-white">{name}</td>
             <td className="py-2 text-gray-500">{url}</td>
             <td className="py-2 text-gray-500">{domain}</td>
             <td className="py-2 text-gray-500">{formatTime(created_at)}</td>
             <td className="py-2 text-gray-500">{formatTime(updated_at)}</td>
             <td className="py-2 text-gray-500">{formatTime(dos_time)}</td>
        </tr> 
    )
}
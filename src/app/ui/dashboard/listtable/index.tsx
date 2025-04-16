import Image from "next/image";
import edit from "../../../../../public/pen-to-square-solid (1).svg"
import trash from "../../../../../public/trash-solid (1).svg"

type DataTable = {
    id:string,
    name:string,
    url:string,
    domain:string,
    created_at:string,
    updated_at:string,
    dos_time:string
}


interface ListTableProps {
   index:number,
   phishing: DataTable,
   editDataById: (id: string) => void;
   deleteDataById: (id:string) => void;
}

export default function ListTable({
   index, 
   phishing, 
   editDataById, 
   deleteDataById  
}:ListTableProps) {

    function formatTime(time:string) {
        const date = new Date(time);
        
        date.setHours(date.getHours() + 7);
        const yyyy = date.getFullYear();
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const dd = String(date.getDate()).padStart(2, '0');
        const hh = String(date.getHours()).padStart(2, '0');
        const min = String(date.getMinutes()).padStart(2, '0');
        
        const formatted = `${yyyy}-${mm}-${dd} ${hh}:${min}`;
        return formatted
    }
    
    return (
        <tr key={phishing.id} className="border-b-1 border-gray-500">
             <td className="py-2 dark:text-white">{index+1}</td>
             <td className="py-2 dark:text-white">{phishing.name}</td>
             <td className="py-2 text-gray-500">{phishing.url}</td>
             <td className="py-2 text-gray-500">{phishing.domain}</td>
             <td className="py-2 text-gray-500">{formatTime(phishing.created_at)}</td>
             <td className="py-2 text-gray-500">{formatTime(phishing.updated_at)}</td>
             <td className="py-2 text-gray-500">{formatTime(phishing.dos_time)}</td>
             <td className="py-2 text-gray-500 flex items-center flex-wrap">
                <Image 
                   src={edit} 
                   width={15} 
                   height={15} 
                   alt="edit file"
                   className="mx-auto"
                   onClick={()=>editDataById(phishing.id)}
                   />
                <Image 
                   src={trash} 
                   width={15} 
                   height={15} 
                   alt="delete file"
                   className="mx-auto"
                   onClick={()=> deleteDataById(phishing.id)}
                   />
            </td>
        </tr> 
    )
}
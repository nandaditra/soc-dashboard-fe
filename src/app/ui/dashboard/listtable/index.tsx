import Image from "next/image";
import edit from "../../../../../public/pen-to-square-solid (1).svg"
import trash from "../../../../../public/trash-solid (1).svg"

type DataTable = {
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


interface ListTableProps {
   index:number,
   phishing: DataTable,
   editDataById: (id: string) => void;
   deleteDataById: (id:string) => void;
}

export default function ListTable({
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

    function formatTimestamp(datetime: string): string {
        const date = new Date(datetime);
      
        // Adjust to your timezone if needed (example: GMT+7 for Jakarta)
        const options: Intl.DateTimeFormatOptions = {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "Asia/Jakarta", 
        };
      
        const formatted = new Intl.DateTimeFormat("en-GB", options).format(date);
    
        const [day, month, yearAndTime] = formatted.split("/");
        const [year, time] = yearAndTime.split(", ");
      
        return `${year}-${month}-${day} ${time}`;
      }
    
    return (
        <tr key={phishing.id} className="border-b-1 border-gray-500">
             <td className="py-2 dark:text-white text-xs font-normal">{phishing.url}</td>
             <td className="py-2 text-gray-500">{phishing.registrar_reported}</td>
             <td className="py-2 text-gray-500">{phishing.registrar_resolved}</td>
             <td className="py-2 text-gray-500">{phishing.safebrowsing_reported}</td>
             <td className="py-2 text-gray-500">{phishing.safebrowsing_resolved}</td>
             <td className="py-2 text-gray-500">{phishing.takedown_reported}</td>
             <td className="py-2 text-gray-500">{phishing.takedown_resolved}</td>
             <td className="py-2 text-gray-500">{phishing.ddos_reported}</td>
             <td className="py-2 text-gray-500">{phishing.ddos_resolved}</td>
             <td className="py-2 text-gray-500">{phishing.komdigi_reported}</td>
             <td className="py-2 text-gray-500">{phishing.komdigi_resolved}</td>
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
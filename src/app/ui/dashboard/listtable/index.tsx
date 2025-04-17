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
   index,
   phishing, 
   editDataById, 
   deleteDataById  
}:ListTableProps) {

    function formatTime(time:string) {
        const date = new Date(time);
        
        date.setHours(date.getHours());
        const yyyy = String(date.getFullYear()).substring(2,4);
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const dd = String(date.getDate()).padStart(2, '0');
        const hh = String(date.getHours()).padStart(2, '0');
        const min = String(date.getMinutes()).padStart(2, '0');
        
        const formatted = `${dd}/${mm}/${yyyy} ${hh}:${min}`;
        return formatted
    }

    if((index+1)%2==1) {
        return (
            <tr key={phishing.id} className="border-b-1 border-gray-500 gap-4">
                 <td className="py-2 dark:text-white text-sm font-normal w-50 border-1 border-gray-500">{phishing.url.substring(0,40)}</td>
                 <td className="py-2 text-white text-sm border-1 border-gray-500">{phishing.registrar_reported ? formatTime(phishing.registrar_reported) : ""}</td>
                 <td className="py-2 text-white text-sm border-1 border-gray-500">{phishing.registrar_resolved ? formatTime(phishing.registrar_resolved) : ""}</td>
                 <td className="py-2 text-white text-sm border-1 border-gray-500">{phishing.safebrowsing_reported ? formatTime(phishing.safebrowsing_reported): ""}</td>
                 <td className="py-2 text-white text-sm border-1 border-gray-500">{phishing.safebrowsing_resolved ? formatTime(phishing.safebrowsing_resolved): ""}</td>
                 <td className="py-2 text-white text-sm border-1 border-gray-500">{phishing.takedown_reported ? formatTime(phishing.takedown_reported): ""}</td>
                 <td className="py-2 text-white text-sm border-1 border-gray-500">{phishing.takedown_resolved ? formatTime(phishing.takedown_resolved): ""}</td>
                 <td className="py-2 text-white text-sm border-1 border-gray-500">{phishing.ddos_reported ? formatTime(phishing.ddos_reported): ""}</td>
                 <td className="py-2 text-white text-sm border-1 border-gray-500">{phishing.ddos_resolved ? formatTime(phishing.ddos_resolved): ""}</td>
                 <td className="py-2 text-white text-sm border-1 border-gray-500">{phishing.komdigi_reported ? formatTime(phishing.komdigi_reported): ""}</td>
                 <td className="py-2 text-white text-sm border-1 border-gray-500">{phishing.komdigi_resolved ? formatTime(phishing.komdigi_resolved): ""}</td>
                 <td className="py-2 text-white text-sm border-1 border-gray-500">
                    <div className="relative my-auto m-full items-center justify-center flex-wrap">
                        <button onClick={()=>editDataById(phishing.id)}>
                          <Image 
                            src={edit} 
                            width={15} 
                            height={15} 
                            alt="edit file"
                            className="mx-1"
                            />
                        </button>
                        <button onClick={()=> deleteDataById(phishing.id)}>
                            <Image 
                              src={trash} 
                              width={15} 
                              height={15} 
                              alt="delete file"
                              className="mx-1"
                            />
                        </button>
                    </div>
                </td>
            </tr> 
        ) 
    } else {
         return (

            <tr key={phishing.id} className="border-b-1 border-gray-500 gap-4">
                 <td className="py-2 dark:text-white text-sm font-normal w-50 border-1 border-gray-500 dark:bg-gray-800">{phishing.url.substring(0,40)}</td>
                 <td className="py-2 text-white text-sm border-1 border-gray-500 dark:bg-gray-800">{phishing.registrar_reported ? formatTime(phishing.registrar_reported) : ""}</td>
                 <td className="py-2 text-white text-sm border-1 border-gray-500 dark:bg-gray-800">{phishing.registrar_resolved ? formatTime(phishing.registrar_resolved) : ""}</td>
                 <td className="py-2 text-white text-sm border-1 border-gray-500 dark:bg-gray-800">{phishing.safebrowsing_reported ? formatTime(phishing.safebrowsing_reported): ""}</td>
                 <td className="py-2 text-white text-sm border-1 border-gray-500 dark:bg-gray-800">{phishing.safebrowsing_resolved ? formatTime(phishing.safebrowsing_resolved): ""}</td>
                 <td className="py-2 text-white text-sm border-1 border-gray-500 dark:bg-gray-800">{phishing.takedown_reported ? formatTime(phishing.takedown_reported): ""}</td>
                 <td className="py-2 text-white text-sm border-1 border-gray-500 dark:bg-gray-800">{phishing.takedown_resolved ? formatTime(phishing.takedown_resolved): ""}</td>
                 <td className="py-2 text-white text-sm border-1 border-gray-500 dark:bg-gray-800">{phishing.ddos_reported ? formatTime(phishing.ddos_reported): ""}</td>
                 <td className="py-2 text-white text-sm border-1 border-gray-500 dark:bg-gray-800">{phishing.ddos_resolved ? formatTime(phishing.ddos_resolved): ""}</td>
                 <td className="py-2 text-white text-sm border-1 border-gray-500 dark:bg-gray-800">{phishing.komdigi_reported ? formatTime(phishing.komdigi_reported): ""}</td>
                 <td className="py-2 text-white text-sm border-1 border-gray-500 dark:bg-gray-800">{phishing.komdigi_resolved ? formatTime(phishing.komdigi_resolved): ""}</td>
                 <td className="py-2 text-white text-sm border-1 border-gray-500 dark:bg-gray-800">
                    <div className="relative my-auto m-full items-center justify-center flex-wrap">
                        <button onClick={()=>editDataById(phishing.id)}>
                          <Image 
                            src={edit} 
                            width={15} 
                            height={15} 
                            alt="edit file"
                            className="mx-1"
                            />
                        </button>
                        <button onClick={()=> deleteDataById(phishing.id)}>
                            <Image 
                              src={trash} 
                              width={15} 
                              height={15} 
                              alt="delete file"
                              className="mx-1"
                            />
                        </button>
                    </div>
                </td>
            </tr> 
        ) 
    }
}
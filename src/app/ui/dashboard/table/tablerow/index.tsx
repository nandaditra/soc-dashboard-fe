import DataSel from "../../datasel";
import ButtonAction from "@/app/ui/button/button-action";

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

interface TableRowProps {
    phishing: DataTable,
    isEven: boolean,
    editDataById: (id: string) => void;
    deleteDataById: (id:string) => void;
}

export default function TableRow(
    {phishing,isEven,editDataById, deleteDataById}
:TableRowProps
) {
    return (
        <tr key={phishing.id} className="border-b-1 border-gray-500 gap-4">
                 <DataSel data={phishing.url} type={"url"} isEven={isEven} />
                 <DataSel data={phishing.registrar_reported} type="time" isEven={isEven}/>
                 <DataSel data={phishing.registrar_resolved} type="time" isEven={isEven}/>
                 <DataSel data={phishing.safebrowsing_reported} type="time" isEven={isEven}/>
                 <DataSel data={phishing.safebrowsing_resolved} type="time" isEven={isEven}/>
                 <DataSel data={phishing.takedown_reported} type="time" isEven={isEven}/>
                 <DataSel data={phishing.takedown_resolved} type="time" isEven={isEven}/>
                 <DataSel data={phishing.ddos_reported } type="time" isEven={isEven}/>
                 <DataSel data={phishing.ddos_resolved } type="time" isEven={isEven}/>
                 <DataSel data={phishing.komdigi_reported } type="time" isEven={isEven}/>
                 <DataSel data={phishing.komdigi_resolved} type="time" isEven={isEven}/>
                 <td className={`py-2 dark:text-white text-sm border-1 border-gray-500 bg-gray-800 text-white ${isEven ? 'bg-gray-800': ''}`}>
                    <div className="relative my-auto m-full items-center justify-center flex-wrap">
                        <ButtonAction id={phishing.id} type="edit" onOperation={editDataById}/>
                        <ButtonAction id={phishing.id} type="delete" onOperation={deleteDataById}/>
                    </div>
                </td>
        </tr> 
    )
}

import TableRow from "../table/tablerow";

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
    if((index+1)%2==1) {
        return (
            <TableRow 
               phishing={phishing} 
               isEven={false} 
               editDataById={editDataById} 
               deleteDataById={deleteDataById}
            />
        ) 
    } else {
         return (
            <TableRow 
                phishing={phishing} 
                isEven={true} 
                editDataById={editDataById} 
                deleteDataById={deleteDataById}
            />
        ) 
    }
}
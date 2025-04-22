import ListTable from "../listtable";
import "./design.css"
import TableHead from "./tablehead";

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
    onLoad:boolean;
    onDelete:(id:string) => void
    onEdit:(id:string) => void
}

export default function Table(
{ items, onEdit, onDelete}: TableProps
){
    return (
        <div className="overflow-auto max-h-[600px] scrollbarr">
            <table className="min-w-[1200px] mt-4 text-center border-collapse w-full">
                <thead className="text-xs sticky top-0 rounded-t-lg">
                    <tr className="dark:bg-gray-800">
                        <TableHead row={2} width={"w-2/5"} col={1} content={"Phishing URL"}/>
                        <TableHead row={1} width={""} col={2} content={"Report Registrar"}/>
                        <TableHead row={1} width={""} col={2} content={"Safebrowsing"}/>
                        <TableHead row={1} width={""} col={2} content={"Takedown Provider"}/>
                        <TableHead row={1} width={""} col={2} content={"DDoS"}/>
                        <TableHead row={1} width={""} col={2} content={"Komdigi"}/>
                        <TableHead row={2} width={""} col={2} content={"Action"}/>
                    </tr>
                    <tr className="dark:bg-gray-800">
                        <TableHead row={1} width={""} col={1} content={"Reported"}/>
                        <TableHead row={1} width={""} col={1} content={"Resolved"}/>
                        <TableHead row={1} width={""} col={1} content={"Reported"}/>
                        <TableHead row={1} width={""} col={1} content={"Resolved"}/>
                        <TableHead row={1} width={""} col={1} content={"Reported"}/>
                        <TableHead row={1} width={""} col={1} content={"Resolved"}/>
                        <TableHead row={1} width={""} col={1} content={"Reported"}/>
                        <TableHead row={1} width={""} col={1} content={"Resolved"}/>
                        <TableHead row={1} width={""} col={1} content={"Reported"}/>
                        <TableHead row={1} width={""} col={1} content={"Resolved"}/>
                    </tr>
                </thead>
                <tbody className="text-sm pt-20">
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
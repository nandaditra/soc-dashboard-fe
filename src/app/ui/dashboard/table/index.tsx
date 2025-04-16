import ListTable from "../listtable";

type ListPhising = {
    index:number,
    id:string,
    name:string,
    url:string,
    domain:string,
    created_at:string,
    updated_at:string,
    dos_time:string
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
        <table className="table-auto mt-4 text-center w-full">
            <thead className="border-b-1 border-gray-500 py-4 dark:text-white">
                    <tr className="text-sm">
                    <th className="w-4 pb-2">No</th>
                    <th className="w-24 pb-2">Title</th>
                    <th className="w-24 pb-2">Url</th>
                    <th className="w-10 pb-2">Domain</th>
                    <th className="w-16 pb-2">Created At</th>
                    <th className="w-16 pb-2">Updated At</th>
                    <th className="w-16 pb-2">Dos Time</th>
                    <th className="w-2 pb-2">Action</th>
                    </tr>
            </thead>
            
            <tbody className="text-sm">
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
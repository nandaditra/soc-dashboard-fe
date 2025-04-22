interface DataSelProps {
    data: string,
    type: string,
    isEven: boolean,
}

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

export default function DataSel({
    data,
    type,
    isEven,
}:
DataSelProps
) {
    return (
        <td className={`py-2 text-white text-sm border border-gray-500 px-1
            ${isEven ? "bg-gray-800" : ""} 
            ${type === "url" ? "w-50 break-words max-w-xs" : ""}`}>
            {
                type === "url" ? data :
                type === "time" && data !== "" ? formatTime(data) :
                ""
            }
        </td>
    )
    
}

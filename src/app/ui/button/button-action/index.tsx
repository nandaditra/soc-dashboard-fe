import Image from "next/image"
import edit from "../../../../../public/pen-to-square-solid (1).svg"
import trash from "../../../../../public/trash-solid (1).svg"

interface ButtonActionProps {
    id:string,
    type:string,
    onOperation:(id:string) => void
}

export default function ButtonAction(
    {id, type, onOperation}: ButtonActionProps
){
    return (
        <button onClick={()=>onOperation(id)}>
            <Image 
                src={type === "edit" ? edit :  trash} 
                width={15} 
                height={15} 
                alt={type === "edit" ? "edit file" : "delete file"}
                className="mx-1"
            />
        </button>
    )
}
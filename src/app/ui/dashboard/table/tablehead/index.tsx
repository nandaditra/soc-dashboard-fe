interface TableHeadProps {
    row:number,
    col:number,
    width:string,
    content:string,
}

export default function TableHead(
{
  row, 
  col,
  width, 
  content
}: 
  TableHeadProps
) {
    return (
        <th 
           rowSpan={row ? row: 1 }
           colSpan={col ? col: 1 }
           className={`px-4 py-2 border-1 border-gray-500 
            ${width ? width : ""}`
        }>
            {content}
        </th>
    )
}

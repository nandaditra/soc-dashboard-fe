interface ButtonPageProps {
   page:number,
   totalPage:number,
   content:string,
   onPagination : (id:number) => void
}

export default function ButtonPage({
   page,
   totalPage,
   content, 
   onPagination
}
:ButtonPageProps
) {
    return (
        <button
            onClick={() => onPagination(page - totalPage)}
            disabled={page === totalPage}
            className={`px-3 py-1 rounded ${
            page === totalPage ? "bg-sky-950 text-white cursor-not-allowed" : "bg-sky-600 text-white"
           }`}
           >
           {content}
        </button>
            
    )
}
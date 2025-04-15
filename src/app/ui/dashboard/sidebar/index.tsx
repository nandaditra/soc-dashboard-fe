import Link from "next/link";

export default function Sidebar(){
    return (
        <div className="w-1/6 bg-white">
            <div className="py-5">
                <p className="font-bold text-black font-bold text-2xl mx-2">SOC Dashboard</p>
                <div className="mt-4">
                    <button className="py-4 text-normal w-full focus:bg-sky-500 focus:text-white focus:font-bold focus:rounded-md text-left px-3">
                        <Link href={"/"}>Home</Link>
                    </button>
                    <button className="py-4 text-normal w-full focus:bg-sky-500 focus:text-white focus:font-bold focus:rounded-md text-left px-3">
                        <Link href={"/add-link"}>Input Data</Link>
                    </button>
                </div>
                </div>
        </div>
    )
}
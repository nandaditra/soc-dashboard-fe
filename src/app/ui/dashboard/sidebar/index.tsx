import Image from "next/image";
import Link from "next/link";
import home from "../../../../../public/house-solid (1).svg"
import plus from "../../../../../public/square-plus-solid (1).svg"

export default function Sidebar(){
    return (
        <div className="w-3xs bg-white dark:bg-slate-900 h-screen">
            <div className="py-5">
                <p className="font-bold text-black font-bold text-2xl mx-3 dark:text-white">SOC Dashboard</p>
                   <div className="mt-4">
                        <Link href={"/"}><button className="py-4 flex text-normal w-full focus:bg-blue-950 focus:text-white focus:font-bold focus:rounded-md text-left px-3 dark:text-white">
                           <Image 
                                src={home}
                                width={20}
                                height={20}
                                alt="Home Logo"
                                className="mx-2"
                            />
                            Home
                           </button>
                        </Link>
                    <Link href={"/add-link"}>
                        <button className="py-4 flex text-normal w-full focus:bg-blue-950 focus:text-white focus:font-bold focus:rounded-md text-left px-3 dark:text-white">
                           <Image 
                                src={plus}
                                width={20}
                                height={20}
                                alt="Home Logo"
                                className="mx-2"
                            />
                           Input Data
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
import Image from "next/image";
import Link from "next/link";
import home from "../../../../../public/house-solid (1).svg"
import plus from "../../../../../public/square-plus-solid (1).svg"
import logo from "../../../../../public/logo-soc.png"

export default function Sidebar(){
    return (
        <div className="w-3xs bg-white dark:bg-slate-900 h-screen">
            <div className="py-5">
                <Image
                    src={logo}
                    width={50}
                    height={50}
                    alt="Logo SOC"
                    className="w-3/5 mx-auto"
                />
                   <div className="mt-4 text-sm">
                        <Link href={"/"}><button className="py-4 flex text-normal w-full focus:bg-blue-950 focus:text-white focus:font-bold focus:rounded-md text-left px-3 dark:text-white">
                           <Image 
                                src={home}
                                width={20}
                                height={20}
                                alt="Home Logo"
                                className="mx-2"
                            />
                            <span className="invisible lg:visible">Home</span>
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
                           <span className="invisible lg:visible">Data</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
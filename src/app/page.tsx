"use client"

import { useEffect, useState, FormEvent, } from "react";
import Header from "./ui/header";
import ListTable from "./ui/dashboard/listtable";
import Sidebar from "./ui/dashboard/sidebar";
import Image from "next/image";
import glass from "../../public/magnifying-glass-solid.svg"

export default function Home() {
  const [search, setSearch] = useState<string>("");
  const [items, setItems] = useState([])

  useEffect(() => {
    async function getAllListData() {
        try {
          const response = await fetch('http://localhost:5000/api/phishing')

          if(!response.ok) {
            throw new Error("Failed get list data")
          }
          const data = await response.json();
          setItems(data)
        } catch(error) {
          console.log("Get Data error :", error)
        }
    }

    getAllListData();
  }, []);

  async function handleSearchByKeyword(event: FormEvent<HTMLFormElement>) {
       event.preventDefault();

       try {
        const response = await fetch(`http://localhost:5000/api/search?query=${encodeURIComponent(search)}`);
        if (!response.ok) {
          throw new Error("Search failed");
        }
    
        const data = await response.json();
        setItems(data); 
      } catch (error) {
        console.error("Search error:", error);
      }
  }


  return (
    <div className="bg-gray-100 dark:bg-black">
       <main className="">
            <div className="flex flex-column">
              <Sidebar />
              <div  className="w-full">
                  <Header />

                  <main className="md:px-2 mt-4">
                    <div className="container mx-auto md:px-10 pt-4 md:pb-16 rounded-md shadow-md bg-white dark:bg-slate-900">
                         <div className="flex">
                             <div className="mr-auto">
                                 <h1 className="text-black font-bold text-2xl mt-5 dark:text-white">Dashboard</h1>
                                 <p className="text-slate-500">List all the phising link</p>
                             </div>
                             <form onSubmit={handleSearchByKeyword} className="ml-auto rounded-full w-75">
                                 <div className="flex mt-4 border border-1 border-white rounded-full w-full py-1">
                                    <input 
                                       name="search" 
                                       type="text"
                                       className="focus:outline-none border-none w-full px-3 text-white py-1"
                                       onChange={(e) => setSearch(e.target.value)}
                                     />
                                     <Image
                                       src={glass}
                                       width={20}
                                       height={20}
                                       className="mr-3"
                                       alt="Icon Search"
                                     />
                                 </div>
                                </form>
                         </div>
                         <table className="table-auto mt-4 text-center w-full">
                            <thead className="border-b-1 border-gray-500 py-4 dark:text-white">
                              <tr className="text-sm">
                                <th className="w-4 pb-2">No</th>
                                <th className="w-12 pb-2">Title</th>
                                <th className="w-24 pb-2">Url</th>
                                <th className="w-10 pb-2">Domain</th>
                                <th className="w-16 pb-2">Created At</th>
                                <th className="w-16 pb-2">Updated At</th>
                                <th className="w-16 pb-2">Dos Time</th>
                              </tr>
                            </thead>
                            <tbody className="text-sm">
                              {
                                items.map((data, i)=> 
                                 <ListTable
                                   key={i}
                                   id={i}
                                   name={data["name"]}
                                   url={data["url"]}
                                   domain={data["domain"]}
                                   created_at={data["created_at"]}
                                   updated_at={data["updated_at"]}
                                   dos_time={data["dos_time"]}
                                  />
                              )
                              }
                            </tbody>
                          </table>
                          <div className="float-right my-5">
                            <div className="flex text-sm">
                                <button className="mx-3">prev</button>
                                <button className="mx-3">next</button>
                            </div>
                          </div>
                    </div>
                  </main>
              </div>
            </div>
       </main>
    </div>
  );
}

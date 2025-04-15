"use client"

import { useEffect, useState } from "react";
import Header from "./ui/header";
import ListTable from "./ui/dashboard/listtable";
import Sidebar from "./ui/dashboard/sidebar";

export default function Home() {
  const [page, setPage] = useState<number>(1);
  const [list, setList] = useState<number>(10);
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/api/phishing')
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);


  return (
    <div className="bg-gray-100 dark:bg-black">
       <main className="">
            <div className="flex flex-column">
              <Sidebar />
              <div  className="w-5/6">
                  <Header />

                  <main className="md:px-2 mt-4">
                    <div className="container mx-auto md:px-10 pt-4 md:pb-16 rounded-md shadow-md bg-white dark:bg-slate-900">
                         <h1 className="text-black font-bold text-2xl mt-5 dark:text-white">Dashboard</h1>
                         <p className="text-slate-500">List all the phising link</p>
                         <table className="table-auto mt-4 text-center w-full">
                            <thead className="border-b-1 border-gray-500 py-4 dark:text-white">
                              <tr className="text-sm">
                                <th className="w-4 pb-2">No</th>
                                <th className="w-12 pb-2">Title</th>
                                <th className="w-24 pb-2">Url</th>
                                <th className="w-10 pb-2">Domain</th>
                                <th className="w-10 pb-2">Created At</th>
                                <th className="w-10 pb-2">Updated At</th>
                                <th className="w-10 pb-2">Dos Time</th>
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

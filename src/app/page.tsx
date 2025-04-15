"use client"

import Link from "next/link";
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
    <div className="bg-gray-100">
       <main className="">
            <div className="flex flex-column">
              <Sidebar />
              <div  className="w-5/6">
                  <Header />

                  <main className="md:px-4 mt-4">
                    <div className="container mx-auto md:px-16 pt-4 md:pb-16 rounded-md shadow-md bg-white">
                         <h1 className="text-black font-bold text-2xl mt-5">Dashboard</h1>
                         <p className="text-slate-500">List all the phising link</p>
                         <table className="table-auto mt-4 text-center w-full">
                            <thead className="border-b-1 border-gray-500 py-4">
                              <tr className="text-sm">
                                <th className="w-4 pb-2">No</th>
                                <th className="w-12 pb-2">Title</th>
                                <th className="w-24 pb-2">Url</th>
                                <th className="w-10 pb-2">Domain</th>
                                <th className="w-16 pb-2">Created At</th>
                                <th className="w-16 pb-2">Updated At</th>
                              </tr>
                            </thead>
                            <tbody className="text-sm">
                              {
                                items.map((data, i)=> 
                                 <ListTable
                                   id={i}
                                   name={data["name"]}
                                   url={data["url"]}
                                   domain={data["domain"]}
                                   created_at={data["created_at"]}
                                   updated_at={data["updated_at"]}
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

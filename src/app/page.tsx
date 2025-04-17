"use client"

import { useEffect, useState, FormEvent, } from "react";
import Sidebar from "./ui/dashboard/sidebar";
import Image from "next/image";
import glass from "../../public/magnifying-glass-solid.svg"
import Table from "./ui/dashboard/table";
import Edit from "./ui/edit";

export default function Home() {
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [id, setId] = useState<string>("")

  useEffect(() => {
    async function getAllListData() {
      try {
        const response = await fetch(`http://localhost:5000/api/phishing?page=${page}&limit=10`);
        if (!response.ok) throw new Error("Failed get list data");
  
        const data = await response.json();
        setItems(data.data);
        setTotalPage(data.pagination.totalPages);
        setTotalItems(data.pagination.totalItems);
      } catch (error) {
        console.log("Get Data error :", error);
      }
    }
  
    getAllListData();
  }, [page]);
  

  async function handleSearchByKeyword(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPage(1);
  
    try {
      const response = await fetch(`http://localhost:5000/api/search?keyword=${encodeURIComponent(search)}`);
      if (!response.ok) {
        throw new Error("Search failed");
      }
  
      const data = await response.json();
      setItems(data.data); 
      setTotalItems(data.data.length);
      setTotalPage(1); // since search results may not have paginated data
    } catch (error) {
      console.error("Search error:", error);
    }
  }

  async function editDataById(id:string) {
    if(id) {
      setIsOpen(true)
      setId(id)
    }
  }

  async function deleteDataById(id:string) {
    const confirmDelete = window.confirm("Are you sure you want to delete this data?");
    if (!confirmDelete) return;
    try {
      const response = await fetch(`http://localhost:5000/api/phishing/${id}`, {
        method: "DELETE",
      });
  
      if (!response.ok) {
        throw new Error("Failed to delete data.");
      }

      alert("Data deleted successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Error deleting data:", error);
      alert("Failed to delete data.");
    }
  }

  return (
    <div className="bg-gray-100 dark:bg-black relative">
       <main className="">
            <div className="flex flex-column">
              <Sidebar />
              <div className="h-screen w-full block">
                  <div className="md:px-2 mt-4">
                    <div className="md:px-8 pt-4 md:pb-16 rounded-md shadow-md bg-white dark:bg-slate-900">
                         <div className="flex">
                             <div className="mr-auto">
                                 <h1 className="text-black font-bold text-2xl mt-5 dark:text-white">Dashboard</h1>
                                 <p className="text-slate-500">List all the phising link</p>
                             </div>
                             <form onSubmit={handleSearchByKeyword} className="ml-auto rounded-full w-100">
                                 <div className="flex mt-4 border border-1 border-white rounded-full w-full py-1">
                                    <input 
                                       name="search" 
                                       type="text"
                                       className="focus:outline-none bg-none rounded-full border-none w-full px-3 text-white py-1"
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
                          <div className="w-full">
                           <Table 
                             items={items} 
                             onDelete={deleteDataById}
                             onEdit={editDataById}
                           />
                          </div>
                          <div className="flex justify-between items-center my-5">
                        <p className="text-slate-500">
                          Showing page <b>{page}</b> of <b>{totalPage}</b> — Total: <b>{totalItems}</b> phishing links
                        </p>

                          <div className="flex gap-2">
                          
                            <button
                              onClick={() => setPage(page - 1)}
                              disabled={page === 1}
                              className={`px-3 py-1 rounded ${
                                page === 1 ? "bg-sky-950 text-white cursor-not-allowed" : "bg-sky-600 text-white"
                              }`}
                            >
                              Prev
                            </button>

                            <button
                              onClick={() => setPage(page + 1)}
                              disabled={page === totalPage}
                              className={`px-3 py-1 rounded ${
                                page === totalPage ? "bg-sky-950 text-white cursor-not-allowed" : "bg-sky-600 text-white"
                              }`}
                            >
                              Next
                            </button>
                          </div>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
       </main>

       <Edit isOpen={isOpen} phishingId={id}/>
    </div>
  );
}

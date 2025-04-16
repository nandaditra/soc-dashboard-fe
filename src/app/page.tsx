"use client"

import { useEffect, useState, FormEvent, } from "react";
import Header from "./ui/header";
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
  const [id, setId] = useState<string>("")

  useEffect(() => {
    async function getAllListData() {
        try {
          const response = await fetch('http://localhost:5000/api/phishing')

          if(!response.ok) {
            throw new Error("Failed get list data")
          }
          const data = await response.json();
          setItems(data.data)
        } catch(error) {
          console.log("Get Data error :", error)
        }
    }

    getAllListData();
  }, []);

  async function handleSearchByKeyword(event: FormEvent<HTMLFormElement>) {
       event.preventDefault();

       try {
        const response = await fetch(`http://localhost:5000/api/search?keyword=${encodeURIComponent(search)}`);
        if (!response.ok) {
          throw new Error("Search failed");
        }
    
        const data = await response.json();
        setItems(data.data); 
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
      // Optionally: refresh the list of data after deletion
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
              <div className="w-full">
                  <Header />

                  <main className="md:px-2 mt-4 mx-2">
                    <div className="container mx-auto md:px-8 pt-4 md:pb-16 rounded-md shadow-md bg-white dark:bg-slate-900">
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
                          <Table 
                            items={items} 
                            onDelete={deleteDataById}
                            onEdit={editDataById}
                          />
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

       <Edit isOpen={isOpen} phishingId={id}/>
    </div>
  );
}

"use client"

import { FormEvent, useState } from "react"
import Sidebar from "../ui/dashboard/sidebar"
import Header from "../ui/header"

export default function AddLink() {
    const [name, setName] = useState<string>("")
    const [url, setUrl] = useState<string>("")
    const [domain, setDomain] = useState<string>("")
    const [createdAt, setCreatedAt] = useState<string>("")
    const [updatedAt, setUpdateAt] = useState<string>("")
    const [dostime, setDosTime] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
         event.preventDefault()

         const formData = {
          name,
          url,
          domain,
          createdAt,
          updatedAt,
          dostime
        };

        const response = await fetch('http://localhost:5000/api/phishing', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
 
        const data = await response.json();
         if (response.ok) {
            alert('Data added successfully!');
         } else {
            alert(`Error: ${data.message}`);
         }

        setIsLoading(false);

        setName("");
        setUrl("");
        setDomain("");
        setCreatedAt("");
        setUpdateAt("");
    }
   
    return (
        <div className="bg-gray-100 dark:bg-black">
          <main className="">
             <div className="flex flex-column">
               <Sidebar />
               <div className="w-full">
                   <Header />
                   <main className="md:px-4 mt-4">
                      <div className="container mx-auto md:px-16 pt-4 md:pb-16 rounded-md shadow-md bg-white dark:bg-slate-900">
                         <h1 className="text-black font-bold text-2xl mt-3 dark:text-white">Add Link</h1>
                         <p className="text-slate-500">Add the phising link</p>
                         <form onSubmit={handleSubmit} className="mt-6">
                             <div className="my-3">
                                 <label className="text-md dark:text-white">Name</label><br/>
                                 <input 
                                   name="name" 
                                   type="text" 
                                   className="border rounded-md w-full p-2"
                                   onChange={(e) => setName(e.target.value)}
                                   />
                             </div>
                             <div className="my-3">
                                 <label className="text-md dark:text-white">Url</label><br/>
                                 <input 
                                    name="url" 
                                    type="text" 
                                    className="border rounded-md w-full p-2"
                                    onChange={(e) => setUrl(e.target.value)}
                                    />
                             </div>
                             <div className="my-3">
                                 <label className="text-md dark:text-white">Domain</label><br/>
                                 <input 
                                    name="domain" 
                                    type="text" 
                                    className="border rounded-md w-full p-2"
                                    onChange={(e) => setDomain(e.target.value)}
                                    />
                             </div>
                             <div className="my-3">
                                 <label className="text-md dark:text-white">Created At</label><br/>
                                 <input 
                                    name="created_at" 
                                    type="datetime-local"
                                    className="border rounded-md w-full p-2 text-white"
                                    onChange={(e) => setCreatedAt(e.target.value)}
                                    />
                             </div>
                             <div className="my-3">
                                 <label className="text-md dark:text-white">Updated At</label><br/>
                                 <input 
                                    name="updated_at" 
                                    type="datetime-local"
                                    className="border rounded-md w-full p-2 text-white"
                                    onChange={(e) => setUpdateAt(e.target.value)}
                                    />
                             </div>
                             <div className="my-3">
                                 <label className="text-md dark:text-white">Dos Time</label><br/>
                                 <input 
                                    name="dos_time" 
                                    type="datetime-local"
                                    className="border rounded-md w-full p-2 text-white"
                                    onChange={(e) => setDosTime(e.target.value)}
                                    />
                             </div>
                             <button
                                type="submit"
                                disabled={isLoading}
                                className="bg-sky-600 text-white px-6 py-2 rounded-full hover:bg-black"
                                >
                                 {isLoading ? "Submitting..." : "Submit"}
                              </button>
                         </form>
                      </div>
                   </main>
              </div>
            </div>
       </main>
    </div>
    )
}
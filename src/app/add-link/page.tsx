"use client"

import { FormEvent, useState } from "react"
import Sidebar from "../ui/dashboard/sidebar"
import Alert from "../ui/alert";

export default function AddLink() {
    const [url, setUrl] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [notification, setNotification] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("")
    const [status, setStatus] = useState<boolean>(false)
    const [registrar_reported, setRegistrarReported] = useState<string>("");
    const [registrar_resolved, setRegistrarResolved] = useState<string>("");
    const [safebrowsing_reported, setSafebrowsingReported] = useState<string>("");
    const [safebrowsing_resolved, setSafebrowsingResolved] = useState<string>("");
    const [takedown_reported, setTakedownReported] = useState<string>("");
    const [takedown_resolved, setTakedownResolved] = useState<string>("");
    const [ddos_reported, setDdosReported] = useState<string>("");
    const [ddos_resolved, setDdosResolved] = useState<string>("");
    const [komdigi_reported, setKomdigiReported] = useState<string>("");
    const [komdigi_resolved, setKomdigiResolved] = useState<string>("");
    
    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
         event.preventDefault();

         const formData = {
          url,
          registrar_reported,  
          registrar_resolved,  
          safebrowsing_reported,  
          safebrowsing_resolved, 
          takedown_reported,  
          takedown_resolved,  
          ddos_reported,  
          ddos_resolved,  
          komdigi_reported,  
          komdigi_resolved,  
        };

        const response = await fetch('http://localhost:5000/api/phishing', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
 
        const data = await response.json();
         if (response.ok) {
            setNotification(true);
            setMessage("Data added successfully")
            setStatus(true)
            window.location.reload();
         } else {
            setNotification(true);
            setMessage(`${data.message}`)
            setStatus(false)
         }

        setIsLoading(false);
        setRegistrarReported("");
        setRegistrarResolved("");
        setSafebrowsingReported("");
        setSafebrowsingResolved("");
        setTakedownReported("");
        setTakedownResolved("");
        setDdosReported("");
        setDdosResolved("");
        setKomdigiReported("");
        setKomdigiResolved("");
    }
   
    return (
        <div className="bg-gray-100 dark:bg-black relative">
             {notification ? <Alert status={status} message={message} onAlert={setNotification}/> : "" }
             <div className="flex flex-column">
               <Sidebar />
               <div className="w-full">
                   <main className="md:px-4 mt-4">
                      <div className="mx-auto md:px-8 pt-4 md:pb-16 rounded-md shadow-md bg-white dark:bg-slate-900">
                         <h1 className="text-black font-bold text-2xl mt-3 dark:text-white">Add Link</h1>
                         <p className="text-slate-500">Add the phishing link</p>
                         <form onSubmit={handleSubmit} className="mt-6">
                             <div className="my-3">
                                 <label className="text-sm dark:text-white">Url</label><br/>
                                 <input 
                                    name="url" 
                                    type="text" 
                                    className="border rounded-md w-full py-1 px-2"
                                    onChange={(e) => setUrl(e.target.value)}
                                    />
                             </div>

                             <div className="grid grid-cols-5 gap-4">
                                  <div className="py-3">
                                       <h3 className="font-bold text-md">Report Registrar</h3>

                                       <div className="my-3">
                                          <label className="text-sm dark:text-white text-light">reported</label><br/>
                                          <input 
                                             name="registrar_reported" 
                                             type="datetime-local"
                                             className="border rounded-md w-full p-2 text-white dark:[color-scheme:dark]"
                                             onChange={(e) => setRegistrarReported(e.target.value)}
                                             placeholder="" 
                                             />
                                       </div>
                                       <div className="my-3">
                                          <label className="text-sm dark:text-white text-light">resolved</label><br/>
                                          <input 
                                             name="registrar_resolved" 
                                             type="datetime-local"
                                             className="border rounded-md w-full p-2 text-white dark:[color-scheme:dark]"
                                             placeholder=""
                                             onChange={(e) => setRegistrarResolved(e.target.value)}
                                             />
                                       </div>
                                  </div>

                                  <div className="py-3">
                                       <h3 className="font-bold text-md">Safe Browsing</h3>

                                       <div className="my-3">
                                          <label className="text-sm dark:text-white text-light">reported</label><br/>
                                          <input 
                                             name="safebrowsing_reported" 
                                             type="datetime-local"
                                             className="border rounded-md w-full p-2 text-white dark:[color-scheme:dark]"
                                             placeholder=""
                                             onChange={(e) => setSafebrowsingReported(e.target.value)}
                                             />
                                       </div>
                                       <div className="my-3">
                                          <label className="text-sm dark:text-white text-light">resolved</label><br/>
                                          <input 
                                             name="safebrowsing_resolved" 
                                             type="datetime-local"
                                             className="border rounded-md w-full p-2 text-white dark:[color-scheme:dark]"
                                             placeholder=""
                                             onChange={(e) => setSafebrowsingResolved(e.target.value)}
                                             />
                                       </div>
                                  </div>

                                  <div className="py-3">
                                       <h3 className="font-bold text-md">Takedown</h3>

                                       <div className="my-3">
                                          <label className="text-sm dark:text-white text-light">reported</label><br/>
                                          <input 
                                             name="takedown_reported" 
                                             type="datetime-local"
                                             className="border rounded-md w-full p-2 text-white dark:[color-scheme:dark]"
                                             placeholder=""
                                             onChange={(e) => setTakedownReported(e.target.value)}
                                             />
                                       </div>
                                       <div className="my-3">
                                          <label className="text-sm dark:text-white text-light">resolved</label><br/>
                                          <input 
                                             name="takedown_resolved" 
                                             type="datetime-local"
                                             className="border rounded-md w-full p-2 text-white dark:[color-scheme:dark]"
                                             placeholder=""
                                             onChange={(e) => setTakedownResolved(e.target.value)}
                                             />
                                       </div>
                                  </div>

                                  <div className="py-3">
                                       <h3 className="font-bold text-md">Ddos</h3>

                                       <div className="my-3">
                                          <label className="text-sm dark:text-white text-light">reported</label><br/>
                                          <input 
                                             name="ddos_reported" 
                                             type="datetime-local"
                                             className="border rounded-md w-full p-2 text-white dark:[color-scheme:dark]"
                                             placeholder=""
                                             onChange={(e) => setDdosReported(e.target.value)}
                                             />
                                       </div>
                                       <div className="my-3">
                                          <label className="text-sm dark:text-white text-light">resolved</label><br/>
                                          <input 
                                             name="ddos_resolved" 
                                             type="datetime-local"
                                             className="border rounded-md w-full p-2 text-white dark:[color-scheme:dark]"
                                             placeholder=""
                                             onChange={(e) => setDdosResolved(e.target.value)}
                                             />
                                       </div>
                                  </div>

                                  <div className="py-3">
                                       <h3 className="font-bold text-md">Komdigi</h3>

                                       <div className="my-3">
                                          <label className="text-sm dark:text-white text-light">reported</label><br/>
                                          <input 
                                             name="komdigi_reported" 
                                             type="datetime-local"
                                             className="border rounded-md w-full p-2 text-white dark:[color-scheme:dark]"
                                             placeholder=""
                                             onChange={(e) => setKomdigiReported(e.target.value)}
                                             />
                                       </div>
                                       <div className="my-3">
                                          <label className="text-sm dark:text-white text-light">resolved</label><br/>
                                          <input 
                                             name="komdigi_resolved" 
                                             type="datetime-local"
                                             className="border rounded-md w-full p-2 text-white dark:[color-scheme:dark]"
                                             placeholder=""
                                             onChange={(e) => setKomdigiResolved(e.target.value)}
                                             />
                                       </div>
                                  </div>
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
    </div>
    )
}
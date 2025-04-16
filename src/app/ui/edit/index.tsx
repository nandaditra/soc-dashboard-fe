import { useState } from "react";

type Phishing = {
  id:string,
  name:string,
  url:string,
  domain:string,
  created_at:string,
  updated_at:string,
  dos_time:string  
}

interface EditProps {
  phishing: Phishing,
  onEditData: (id:string)=> void
  isOpen: boolean,
}
export default function Edit({
  phishing, 
  onEditData, 
  isOpen
}:
 EditProps
) {
  return (
    <div className="absolute rounded-md flex items-center justify-center top-0 h-screen w-screen">
            <div className="absolute bg-black opacity-50 h-screen w-screen"></div>
            <div className="absolute bg-slate-900 w-2/5 my-auto items-center justify-center block z-40 p-10 rounded-md">
                <form className="mt-6">
                      <div className="my-3">
                                 <label className="text-md dark:text-white">Name</label><br/>
                                 <input 
                                   name="name" 
                                   type="text" 
                                   className="border rounded-md w-full p-2"
                                  
                                   />
                             </div>
                             <div className="my-3">
                                 <label className="text-md dark:text-white">Url</label><br/>
                                 <input 
                                    name="url" 
                                    type="text" 
                                    className="border rounded-md w-full p-2"
                                  
                                    />
                             </div>
                             <div className="my-3">
                                 <label className="text-md dark:text-white">Domain</label><br/>
                                 <input 
                                    name="domain" 
                                    type="text" 
                                    className="border rounded-md w-full p-2"
                                    
                                    />
                             </div>
                             <div className="my-3">
                                 <label className="text-md dark:text-white">Created At</label><br/>
                                 <input 
                                    name="created_at" 
                                    type="datetime-local"
                                    className="border rounded-md w-full p-2 text-white"
                                    
                                    />
                             </div>
                             <div className="my-3">
                                 <label className="text-md dark:text-white">Updated At</label><br/>
                                 <input 
                                    name="updated_at" 
                                    type="datetime-local"
                                    className="border rounded-md w-full p-2 text-white"
                                  
                                    />
                             </div>
                             <div className="my-3">
                                 <label className="text-md dark:text-white">Dos Time</label><br/>
                                 <input 
                                    name="dos_time" 
                                    type="datetime-local"
                                    className="border rounded-md w-full p-2 text-white"
                                   
                                    />
                             </div>
                             <div className="flex gap-2 float-right my-2">
                              <button
                                  type="submit"
                                  className="text-white px-6 py-2 border-1 rounded-full"
                                  >
                                    Cancel
                                </button>
                              <button
                                  type="submit"
                                
                                  className="bg-sky-600 text-white px-6 py-2 rounded-full"
                                  >
                                    Update
                                </button>
                             </div>
                         </form>
            </div>
        </div>
      )
}
import { FormEvent, useEffect, useState } from "react";
import Alert from "../alert";

interface EditProps {
  isOpen: boolean;
  phishingId: string;
}

export default function Edit({ isOpen, phishingId }: EditProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("");
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

  useEffect(() => {
    const getDataById = async () => {
      if (!phishingId) return;
      try {
        const res = await fetch(`http://localhost:5000/api/phishing/${phishingId}`);
        const result = await res.json();
        setOpen(true);
        setUrl(result.url);
        setRegistrarReported(result.registrar_reported);
        setRegistrarResolved(result.registrar_resolved);
        setSafebrowsingReported(result.safebrowsing_reported);
        setSafebrowsingResolved(result.safebrowsing_resolved);
        setTakedownReported(result.takedown_reported);
        setTakedownResolved(result.takedown_resolved);
        setDdosReported(result.ddos_reported);
        setDdosResolved(result.ddos_resolved);
        setKomdigiReported(result.komdigi_reported);
        setKomdigiResolved(result.komdigi_resolved);
      } catch (error) {
        console.log("Still error", error);
      }
    };

    getDataById();
  }, [phishingId]);

  async function updateDataById(event: FormEvent<HTMLFormElement>) {
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

    try {
      const res = await fetch(`http://localhost:5000/api/phishing/${phishingId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      setMessage(result.message);
      setStatus(true)
      window.location.reload()
      setOpen(false);
    } catch (error) {
      console.error("Update failed:", error);
    }
  }

  if (open && isOpen) {
    return (
      <div className="absolute flex items-center justify-center top-0 bottom-0 left-0 right-0">
        {notification ? <Alert status={status} message={message} onAlert={setNotification}/> : "" }
        <div className="absolute bg-black opacity-50 h-screen w-screen"></div>
        <div className="absolute bg-gray-900 w-6xl my-auto mx-auto items-center z-40 p-10 rounded-md">
          <h1 className="text-center font-bold text-xl text-white">Update Data</h1>
          <form onSubmit={updateDataById} className="mt-6">
               <div className="my-3">
                  <label className="text-sm text-white dark:text-white">Url</label><br/>
                  <input 
                    name="url" 
                    type="text" 
                    className="border rounded-md w-full py-1 px-2"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    />
              </div>

              <div className="grid md:grid-cols-5 gap-4">
                  <div className="py-3">
                        <h3 className="font-bold text-md">Report Registrar</h3>

                        <div className="my-3">
                          <label className="text-sm text-white text-white dark:text-white text-light">reported</label><br/>
                          <input 
                              name="registrar_reported" 
                              type="datetime-local"
                              className="border rounded-md w-full [color-scheme:dark] py-1 px-2 text-white dark:[color-scheme:dark]"
                              value={registrar_reported}
                              onChange={(e) => setRegistrarReported(e.target.value)}
                              />
                        </div>
                        <div className="my-3">
                          <label className="text-sm text-white dark:text-white text-light">resolved</label><br/>
                          <input 
                              name="registrar_resolved" 
                              type="datetime-local"
                              className="border rounded-md w-full [color-scheme:dark] py-1 px-2 text-white dark:[color-scheme:dark]"
                              value={registrar_resolved}
                              onChange={(e) => setRegistrarResolved(e.target.value)}
                              />
                        </div>
                  </div>

                  <div className="py-3">
                        <h3 className="font-bold text-md">Safe Browsing</h3>
                        <div className="my-3">
                          <label className="text-sm text-white dark:text-white text-light">reported</label><br/>
                          <input 
                              name="safebrowsing_reported" 
                              type="datetime-local"
                              className="border rounded-md w-full [color-scheme:dark] py-1 px-2 text-white dark:[color-scheme:dark]"
                              value={safebrowsing_reported}
                              onChange={(e) => setSafebrowsingReported(e.target.value)}
                              />
                        </div>
                        <div className="my-3">
                          <label className="text-sm text-white dark:text-white text-light">resolved</label><br/>
                          <input 
                              name="safebrowsing_resolved" 
                              type="datetime-local"
                              className="border rounded-md w-full [color-scheme:dark] py-1 px-2 text-white dark:[color-scheme:dark]"
                              value={safebrowsing_resolved}
                              onChange={(e) => setSafebrowsingResolved(e.target.value)}
                              />
                        </div>
                  </div>

                  <div className="py-3">
                        <h3 className="font-bold text-md">Takedown</h3>

                        <div className="my-3">
                          <label className="text-sm text-white dark:text-white text-light">reported</label><br/>
                          <input 
                              name="takedown_reported" 
                              type="datetime-local"
                              className="border rounded-md w-full [color-scheme:dark] py-1 px-2 text-white dark:[color-scheme:dark]"
                              value={takedown_reported}
                              onChange={(e) => setTakedownReported(e.target.value)}
                              />
                        </div>
                        <div className="my-3">
                          <label className="text-sm text-white dark:text-white text-light">resolved</label><br/>
                          <input 
                              name="takedown_resolved" 
                              type="datetime-local"
                              className="border rounded-md w-full [color-scheme:dark]  py-1 px-2 text-white dark:[color-scheme:dark]"
                              value={takedown_resolved}
                              onChange={(e) => setTakedownResolved(e.target.value)}
                              />
                        </div>
                  </div>

                  <div className="py-3">
                        <h3 className="font-bold text-md">Ddos</h3>

                        <div className="my-3">
                          <label className="text-sm text-white dark:text-white text-light">reported</label><br/>
                          <input 
                              name="ddos_reported" 
                              type="datetime-local"
                              className="border rounded-md w-full [color-scheme:dark] py-1 px-2 text-white dark:[color-scheme:dark]"
                              value={ddos_reported}
                              onChange={(e) => setDdosReported(e.target.value)}
                              />
                        </div>
                        <div className="my-3">
                          <label className="text-sm text-white dark:text-white text-light">resolved</label><br/>
                          <input 
                              name="ddos_resolved" 
                              type="datetime-local"
                              className="border rounded-md w-full [color-scheme:dark] py-1 px-2 text-white dark:[color-scheme:dark]"
                              value={ddos_resolved}
                              onChange={(e) => setDdosResolved(e.target.value)}
                              />
                        </div>
                  </div>

                  <div className="py-3">
                        <h3 className="font-bold text-md">Komdigi</h3>

                        <div className="my-3">
                          <label className="text-sm text-white dark:text-white text-light">reported</label><br/>
                          <input 
                              name="komdigi_reported" 
                              type="datetime-local"
                              className="border rounded-md w-full [color-scheme:dark] py-1 px-2 text-white dark:[color-scheme:dark]"
                              value={komdigi_reported}
                              onChange={(e) => setKomdigiReported(e.target.value)}
                              />
                        </div>
                        <div className="my-3">
                          <label className="text-sm text-white dark:text-white text-light">resolved</label><br/>
                          <input 
                              name="komdigi_resolved" 
                              type="datetime-local"
                              className="border rounded-md w-full [color-scheme:dark] py-1 px-2 text-white dark:[color-scheme:dark]"
                              value={komdigi_resolved}
                              onChange={(e) => setKomdigiResolved(e.target.value)}
                              />
                        </div>
                  </div>
              </div>
            <div className="flex gap-2 float-right my-2">
              <button
                type="button"
                className="text-white px-6 py-2 border-1 rounded-full"
                onClick={() => {
                  setOpen(false);
                  window.location.reload(); 
                }}
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="bg-sky-600 text-white px-6 py-2 rounded-full">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return null;
}

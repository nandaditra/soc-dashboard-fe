import { FormEvent, useEffect, useState } from "react";

type Phishing = {
  id: string;
  name: string;
  url: string;
  domain: string;
  created_at: string;
  updated_at: string;
  dos_time: string;
};

interface EditProps {
  isOpen: boolean;
  phishingId: string;
}

export default function Edit({ isOpen, phishingId }: EditProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [domain, setDomain] = useState<string>("");
  const [createdAt, setCreatedAt] = useState<string>("");
  const [updatedAt, setUpdateAt] = useState<string>("");
  const [dostime, setDosTime] = useState<string>("");

  useEffect(() => {
    const getDataById = async () => {
      if (!phishingId) return;
      try {
        const res = await fetch(`http://localhost:5000/api/phishing/${phishingId}`);
        const result = await res.json();
        setOpen(true);

        // Initialize form fields with result
        setName(result.name);
        setUrl(result.url);
        setDomain(result.domain);
        setCreatedAt(formatDatetimeLocal(result.created_at));
        setUpdateAt(formatDatetimeLocal(result.updated_at));
        setDosTime(formatDatetimeLocal(result.dos_time));
      } catch (error) {
        console.log("Still error", error);
      }
    };

    getDataById();
  }, [phishingId]);

  function formatDatetimeLocal(datetime: string) {
    const date = new Date(datetime);
    return date.toISOString().slice(0, 16);
  }

  async function updateDataById(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = {
      name,
      url,
      domain,
      created_at: createdAt,
      updated_at: new Date(updatedAt).toISOString(),
      dos_time: dostime,
    };

    try {
      const res = await fetch(`http://localhost:5000/api/phishing/${phishingId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      alert(result.message);
      window.location.reload()
      setOpen(false); // Close modal
    } catch (error) {
      console.error("Update failed:", error);
    }
  }

  if (open && isOpen) {
    return (
      <div className="absolute rounded-md flex items-center justify-center top-0 h-screen w-screen">
        <div className="absolute bg-black opacity-50 h-screen w-screen"></div>
        <div className="absolute bg-slate-900 w-xl my-auto items-center justify-center block z-40 p-10 rounded-md">
          <h1 className="text-center font-bold text-xl text-white">Update Data</h1>
          <form onSubmit={updateDataById} className="mt-6">
            <div className="my-3">
              <label className="text-md dark:text-white">Name</label>
              <input
                name="name"
                type="text"
                className="border rounded-md w-full p-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="my-3">
              <label className="text-md dark:text-white">Url</label>
              <input
                name="url"
                type="text"
                className="border rounded-md w-full p-2"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <div className="my-3">
              <label className="text-md dark:text-white">Domain</label>
              <input
                name="domain"
                type="text"
                className="border rounded-md w-full p-2"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
              />
            </div>
            <div className="my-3">
              <label className="text-md dark:text-white">Created At</label>
              <input
                name="created_at"
                type="datetime-local"
                className="border rounded-md w-full p-2 text-white dark:[color-scheme:dark]"
                value={createdAt}
                onChange={(e) => setCreatedAt(e.target.value)}
              />
            </div>
            <div className="my-3">
              <label className="text-md dark:text-white">Updated At</label>
              <input
                name="updated_at"
                type="datetime-local"
                className="border rounded-md w-full p-2 text-white dark:[color-scheme:dark]"
                value={updatedAt}
                onChange={(e) => setUpdateAt(e.target.value)}
              />
            </div>
            <div className="my-3">
              <label className="text-md dark:text-white">Dos Time</label>
              <input
                name="dos_time"
                type="datetime-local"
                className="border rounded-md w-full p-2 text-white dark:[color-scheme:dark]"
                value={dostime}
                onChange={(e) => setDosTime(e.target.value)}
              />
            </div>
            <div className="flex gap-2 float-right my-2">
              <button
                type="button"
                className="text-white px-6 py-2 border-1 rounded-full"
                onClick={() => setOpen(false)}
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

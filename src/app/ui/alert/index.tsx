import { useEffect, useState } from "react";

interface AlertProps {
    status:boolean | undefined,
    message:string | undefined,
    onAlert:(check:boolean)=> void
}

export default function Alert({
    status, message, onAlert
}
:AlertProps
){
    const [show, setShow] = useState(true);

    const bgColor =
       status === true
        ? "bg-green-100 border-green-400 text-green-700"
        : "bg-red-100 border-red-400 text-red-700";

    const icon = status === true ? "Success! " : "Failed! ";

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setShow(false);
          onAlert(false)
        }, 2000);
    
        return () => clearTimeout(timeoutId);
      }, []);
    
    
    return (
        show && (
          <div className={`absolute flex border ${bgColor} px-4 py-3 rounded right-3 bottom-3 text-base`} role="alert">
            <p>
                <strong className="font-bold">
                    {icon}
                </strong> 
                    <span className="block sm:inline">
                        {message}
                    </span>
            </p>
            <button
              onClick={() =>setShow(false) }
              className="m-auto text-green-700 hover:text-green-900"
            >
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        )
      );
    }
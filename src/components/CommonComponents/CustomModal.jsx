import { useEffect, useState } from "react"
import { Cross } from "lucide-react"

export default function CustomModal({props, show, optionalButton,handlePopOver}){

    const [showModal, setShowModal] = useState(Boolean)

    // useEffect(()=>{
    //     setShowModal(show)
    // }, [show])

    const perfomeSomeAction = () =>{
        //setShowModal(showModal=>!showModal)
        handlePopOver(false)
    }

    return(
      <>
  {show && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out">
      {/* Modal container with scale animation */}
      <div className="animate-scaleUp bg-white rounded-xl shadow-xl border border-red-400 w-[90%] max-w-md p-6 relative">
        {/* Close icon */}
        <button
          onClick={() => perfomeSomeAction(false)}
          className="absolute top-3 right-3 text-red-500 hover:text-red-700"
        >
          <Cross className="w-5 h-5" />
        </button>

        {/* Modal Content */}
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-2xl font-bold text-center">{props.title}</h2>
          <p className="text-center">{props.modalContent}</p>

          {optionalButton && (
            <button
              onClick={perfomeSomeAction}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
            >
              {optionalButton}
            </button>
          )}
        </div>
      </div>
    </div>
  )}
</>

    )
}
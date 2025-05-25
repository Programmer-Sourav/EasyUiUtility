import { Cross } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function CustomPopUp({props, show, optionalButton, handlePopOver}){

    const [showPopup, setShowPopup] = useState(false)
    const popupRef = useRef(null)

     console.log(555, handlePopOver)

   const handleShowOrHidePopup = () =>{
        //setShowPopup(handlePopOver=>!handlePopOver)
        handlePopOver(false)
    }

    return(
        <> 
{show && (
      <div className="animate-scaleUp bg-white rounded-xl shadow-xl border border-red-400 w-[90%] max-w-md p-6 relative">
        {/* Close icon */}
        <button
          onClick={() => handleShowOrHidePopup()}
          className="absolute top-3 right-3 text-red-500 hover:text-red-700"
        >
          <Cross className="w-5 h-5"/>
        </button>

        {/* Modal Content */}
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-2xl font-bold text-center">{props.title}</h2>
          <p className="text-center">{props.modalContent}</p>

          {optionalButton && (
            <button
              onClick={() => handleShowOrHidePopup()}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
            >
              {optionalButton}
            </button>
          )}
        </div>
      </div>
  )}
        </>
    )
}
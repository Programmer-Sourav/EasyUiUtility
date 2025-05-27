export default function Menu({props}){

    return(
        <div className="animate-scaleUp  shadow-xl max-w-md relative w-[152px] m-4">
        <div className="flex flex-col w-auto p-2 h-auto bg-red-200 border border-red-400 rounded-xl"> 
          {
            props.dataList.map((item)=>(
                <ul>
                    <li>{item}</li>
                </ul>
            ))
          }
        </div>
        </div>
    )
}
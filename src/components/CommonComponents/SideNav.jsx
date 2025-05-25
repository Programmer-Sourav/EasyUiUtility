import DummyImage from "../../assets/kousik.jpeg"

export default function SideNav(){


    const navigateTo = () =>{
        
    }

    return(
        <nav className="flex flex-col justify-start items-start h-full w-full bg-amber-500">
         <img src={DummyImage} alt="some_image" loading="lazy" className="w-[164px] h-[164px] rounded-full m-16"/>
         <div className="flex flex-col justify-center items-start ml-16">
            <li className="text-xl list-none p-2" onClick={navigateTo()}>Home</li>
            <li className="text-xl list-none p-2" onClick={navigateTo()}>About</li>
            <li className="text-xl list-none p-2" onClick={navigateTo()}>Services</li>
            <li className="text-xl list-none p-2" onClick={navigateTo()}>Contact Us</li>
         </div>
        </nav>
    )
}
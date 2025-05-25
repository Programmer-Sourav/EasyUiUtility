import DummyImage from "../../assets/kousik.jpeg"

export default function TopNav(){


     const navigateTo = () =>{
        
    }

    return(
      
              <header className="flex flex-row justify-start items-center w-full bg-amber-300 h-[80px] px-6">
                     <img src={DummyImage} alt="logo_image" loading="lazy" className="w-[256px] h-[64px] rounded-full m-16"/>
                     <nav className="flex flex-row justify-center items-start ml-16 w-[512px]">
                        <li className="text-xl list-none p-2" onClick={navigateTo()}>Home</li>
                        <li className="text-xl list-none p-2" onClick={navigateTo()}>About</li>
                        <li className="text-xl list-none p-2" onClick={navigateTo()}>Services</li>
                        <li className="text-xl list-none p-2" onClick={navigateTo()}>Contact Us</li>
                     </nav>
                      <nav className="flex flex-row justify-around items-center ml-16 w-auto gap-2">
                        <button className="text-l list-none p-2 bg-gray-800 text-white w-[128px] h-auto text-center" onClick={navigateTo()}>Login</button>
                        <button className="text-l list-none p-2 bg-gray-800 text-white w-[128px] h-auto text-center" onClick={navigateTo()}>Wishlist</button>
                     </nav>
                    </header>
       
    )
}
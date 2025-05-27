import { useState } from 'react'
import './App.css'
import { Routes } from 'react-router'
import { Route } from 'react-router'

import Footer from './components/DarkMode/Footer'
import CustomButton from './components/CommonComponents/CustomButton'
import Menu from './components/CommonComponents/Menu'
import BreadCrumb from './components/CommonComponents/BreadCrumb'
import Billing from "./components/CommonComponents/pages/Billing"
import Cart from "./components/CommonComponents/pages/Cart"
import Payment from "./components/CommonComponents/pages/Payment"
import Shipping from "./components/CommonComponents/pages/Shipping"

import { Router } from 'lucide-react'

function App() {
 const [showOrHide, setShowOrHide] = useState(false)

 const modalInfo = (title, modalContent) => {
  return {title, modalContent}
};

// type mInfo = {
//   title: String || undefined,
//   modalContent : String || undefined
// }

const modalControl = {
  show: showOrHide
};

const modalActions = {
  optionalButton: "Okay"
};


const mi = modalInfo("My Custom Modal 123", "Lorem ipsum... Lorem Ipsum... Loren ipsum")


const handlePopOver = (data) =>{
  setShowOrHide(data)
}

const performActionOnButtonClick = () =>{
  console.log("Clicked")
  alert("Button Clicked!")
}

const dataList = ["Filter By Category", "Filter By Price", "Filter By Popularity", "Filter By Review"]

 console.log(1231, handlePopOver, showOrHide)

  return (
    <>
      <div>

      <button onClick={handlePopOver}>Show Modal</button>
      <CustomModal props={{...mi}} {...modalControl} {...modalActions} handlePopOver={handlePopOver}/>
      <CustomPopUp props={{...mi}} {...modalControl} {...modalActions} handlePopOver={handlePopOver}/>
      <SearchBar/> 
      <SearchBarGPT/>
      {/* <SideNav/> */}
      {/* <TopNav/>
      <MainContent/> */}
      <PageLayout  TopNavComponent={TopNav}
      SideNavComponent={SideNav}
      MainComponent={MainContent}
      SideContentComponent={SideContent}
      FooterComponent={Footer}/>

  <CustomButton
  props={{
    bgColor: "red-500",
    textColor: "red-500",
    buttonType: "outline",
    performActionOnButtonClick: performActionOnButtonClick
  }}
/>
<Menu props = {{dataList}}/>
<BreadCrumb/>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
   
      </div>
    </>
  )
}

export default App

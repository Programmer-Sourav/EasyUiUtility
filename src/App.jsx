import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import PageLayout from './components/CommonComponents/PageLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div>
         <PageLayout  TopNavComponent={TopNav}
      SideNavComponent={SideNav}
      MainComponent={MainContent}
      SideContentComponent={SideContent}
      FooterComponent={Footer}/>
  
    </div>
    </>
  )
}

export default App

import './App.css'
import Navbar from './Componets/Navbar'
import Body from './Componets/Body'
import Fotter from './Componets/Fotter'
import { Navigate,Route,Routes } from 'react-router-dom'
import Home from './home/Home'
import Signup from './Componets/Signup'
 
import Aboutus from './About/Aboutus'

function App() {

  return (
    <>
 <Routes>
<Route path="/" element={<Home />} />
<Route path="/signup" element={<Signup />} />
<Route path="/about" element={<Aboutus />} />
 </Routes>
 


    </>
  )
}

export default App

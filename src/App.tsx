import { Routes, Route } from "react-router"
import Navbar from "./components/Navbar/Navbar"


function App() {

  return (
    <>
     <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App

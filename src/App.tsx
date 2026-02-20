import { Routes, Route } from "react-router"
import Navbar from "./components/Navbar/Navbar"
import Report from "./components/Report/Report"
import Movies from "./components/Movies/Movies"

function App() {

  return (
    <>
     <Navbar />

      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/report" element={<Report/>} />
        <Route path="/movies" element={<Movies/>} />
         <Route path="/leaderboard" element={<Movies/>} />
      </Routes>
    </>
  )
}

export default App

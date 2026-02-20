import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Report from "./components/Report/Report";
import Movies from "./components/Movies/Movies";
import Landingpage from "./components/Landingpage/Landingpage";
import Leaderboard from "./components/Leaderboard/Leaderboard";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/report" element={<Report />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </>
  );
}

export default App;

import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "10px" }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/report">Report</NavLink>
      <NavLink to="/movies">Movies</NavLink>
    <NavLink to="/leaderboard">Leaderboard</NavLink>
    </nav>
  );
}
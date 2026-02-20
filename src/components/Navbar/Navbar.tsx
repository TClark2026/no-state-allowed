import { NavLink } from "react-router-dom";
import "./Navbar.scss"

export default function Navbar() {
  return (
    <nav >
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
      <NavLink to="/report" className={({ isActive }) => (isActive ? "active" : "")}>Report</NavLink>
      <NavLink to="/movies" className={({ isActive }) => (isActive ? "active" : "")}>Movies</NavLink>
      <NavLink to="/leaderboard" className={({ isActive }) => (isActive ? "active" : "")}>Leaderboard</NavLink>
    </nav>
  );
}
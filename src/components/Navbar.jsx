import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/dashboard" className="logo">
          Task<span>Flow</span>
        </NavLink>

        <div className="nav-links">
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/tasks">Tasks</NavLink>
          <NavLink to="/tasks/add">Add Task</NavLink>
          <NavLink to="/completed">Completed</NavLink>
        </div>

        <NavLink to="/login" className="logout-button">
          Logout
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
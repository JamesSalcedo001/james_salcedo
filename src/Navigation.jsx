import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <div id="nav-bar">
            <NavLink to="/james_salcedo" className="nav-links">Home</NavLink>
            <NavLink to="/james_salcedo/projects_list" className="nav-links">Projects</NavLink>
        </div>
    )
}

export default Navigation;
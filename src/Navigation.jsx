import { NavLink } from "react-router-dom";
import { useState } from "react";
import { LuMenuSquare} from "react-icons/lu";
import { CgCloseR } from "react-icons/cg";

function Navigation() {
    const [isShown, setIsShown] = useState(false)

    const toggleIsShown = () => {
        setIsShown(!isShown)
        if(!isShown) {
            setTimeout(() => {
                setIsShown(false)
            }, 3000)
        }
    }

        return (
            <div id="nav-container" className={isShown ? "open" : ""}>
                <button id="menu-button" onClick={toggleIsShown}>
                <h3>Menu</h3>
                    {isShown ? <CgCloseR size={42}/> : <LuMenuSquare size={42}/>}
                </button>
                    <div id="nav-bar">
                         <NavLink to="/" className="nav-links">Home</NavLink>
                         <NavLink to="/projects_list" className="nav-links">Projects</NavLink>
                    </div>
            </div>
        )
}

export default Navigation;
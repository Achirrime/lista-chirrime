import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className="flex justify-end items-center h-16 p-1">
            <ul className="flex space-x-16 font-bold text-2xl">
                <li>
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => isActive ? "text-teal-600" : "text-cyan-400"}
                    >
                        
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/students"
                        className={({ isActive }) => isActive ? "text-teal-500" : "text-cyan-400"}
                    >
                        Estudantes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/contacts"
                        className={({ isActive }) => isActive ? "text-teal-500" : "text-cyan-400"}
                    >
                        Contatos
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;

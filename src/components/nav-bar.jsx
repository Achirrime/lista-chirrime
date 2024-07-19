import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className="flex justify-between ml-4 h-16 p-1 -mt-10">
            <ul className="flex space-x-32 font-bold text-2xl">
                <li>
                    <NavLink to="/" >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/students">Estudantes</NavLink>
                </li>
                <li>
                    <NavLink to="/contacts">Contatos</NavLink>
                </li>
            </ul>
        </nav>
    );
}
export default NavLink;

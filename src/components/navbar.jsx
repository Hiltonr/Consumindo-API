import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul>
        
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/Galeria">Galeria</Link>
          </li>
        <li>
            <Link to="/Animais">Animais</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default Navbar;
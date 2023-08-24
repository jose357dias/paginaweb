import { Link, NavLink, Navigate } from 'react-router-dom';

export const NavbarPag = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-info p-2">
      <div className="navbar-collapse">
        <div className="navbar-nav">

          <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} to="home">
            Inicio
          </NavLink>

          <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} to="servicios">
            Servicios
          </NavLink>

          <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} to="clientes">
            Clientes
          </NavLink>

          <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} to="tecnologias">
            Tecnologias
          </NavLink>

         <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} to="contacto">
            Contactos
          </NavLink>
        </div>
      </div>
    </nav>
  )
} 


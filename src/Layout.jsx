import { NavLink, Outlet } from 'react-router';

export default function Layout() {
  return (
    <>
      <header className="header">
        <div className="brand">
          <img
            src="https://assets.codepen.io/16327/gsap-logo-light.svg"
            alt="GSAP"
          />
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" end>
                Homea
              </NavLink>
            </li>
            <li>
              <NavLink to="/scroll">ScrollTrigger</NavLink>
            </li>
            <li>
              <NavLink to="/layers">Layers</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.png';

const NavBar = () => {
  const links = [
    { id: 1, text: 'Characters', url: '/characters' },
    { id: 2, text: 'Planets', url: '/planets' },
    { id: 3, text: 'Starships', url: '/starships' },
  ];

  return (
    <nav className="container-fluid navbar navbar-expand-md navbar-light bg-white fixed-top border-bottom">
      <div className="container-fluid d-flex align-items-center mx-0 px-0">
        <div className="navbar-brand fw-bold fs-3 ms-0 ps-0">
          <img src={logo} alt="logo" width="30" />
          <span className="ps-3 fw-bold">Star Wars</span>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse text-end justify-content-end text-center" id="navbarTogglerDemo01">
          <ul className="navbar-nav ml-auto">
            {
              links.map((link) => (
                <li key={link.id} className="link">
                  <NavLink
                    to={link.url}
                    className={({ isActive }) => (isActive ? 'active nav-item' : 'nav-item text-decoration-none')}
                  >
                    <p className="nav-link pt-4 text-primary">
                      {link.text}
                    </p>
                  </NavLink>
                </li>
              ))
            }
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;

import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../logo.png';

const NavBar = () => {
  const links = [
    { id: 4, text: 'Films', url: '/' },
    { id: 1, text: 'Characters', url: '/characters' },
    { id: 2, text: 'Planets', url: '/planets' },
    { id: 3, text: 'Starships', url: '/starships' },
  ];
  const navigate = useNavigate();

  return (
    <nav className="container-fluid navbar navbar-expand-md navbar-light fixed-top">
      <div className="container-fluid d-flex align-items-center m-0 p-0">
        <button type="button" onClick={() => navigate('/')} className="navbar-brand fw-bold fs-3 ms-0 ps-0 text-end">
          <img src={logo} alt="logo" width="20" />
          <span className="ps-3 fw-bold h4 text-white">Star Wars</span>
        </button>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse text-end justify-content-end text-center py-1" id="navbarTogglerDemo01">
          <ul className="navbar-nav ml-auto py-0">
            {
              links.map((link) => (
                <li key={link.id} className="link py-0">
                  <NavLink
                    to={link.url}
                    className={({ isActive }) => (isActive ? 'active nav-item' : 'nav-item text-decoration-none')}
                  >
                    <p className="nav-link py-1 my-0 text-white">
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

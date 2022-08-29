function Header() {
  return (
    <div className="navbar">
      <div className="container flex">
        <div className="flex">
          <a className="brand" href="_a">
            <strong>Hydro</strong>
          </a>
          <nav>
            <ul className="flex nav-menu nav-menu-primary">
              <li>
                <a href="_a">Home</a>
              </li>
              <li>
                <a href="_a">About</a>
              </li>
              <li>
                <a href="_a">Blog</a>
              </li>
              <li>
                <a href="_a">Our Work</a>
              </li>
              <li>
                <a href="_a">Contacts</a>
              </li>
            </ul>
          </nav>
        </div>
        <nav>
          <ul className="flex nav-menu nav-menu-secondary">
            <li className="social-media-item">
              <a href="_a">
                <i className="fab fa-facebook-square"></i>
              </a>
            </li>
            <li className="social-media-item">
              <a href="_a">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="social-media-item">
              <a href="_a">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a className="btn btn-primary" href="_a">
                Sign in / Join
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;

import { Link } from 'react-router-dom';
import { removeAuthdata } from 'util/storage';
import { getTokendata } from 'util/auth';
import { useContext } from 'react';
import { AuthContext } from 'AuthContext';
import LoginImg from 'assets/images/user.svg';
import LogoutImg from 'assets/images/logout.svg';
import history from 'util/history';
import 'bootstrap/js/src/collapse.js';

import './styles.css';

function Navbar() {
  const { authContextData, setAuthContextData } = useContext(AuthContext);
  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthdata();
    setAuthContextData({
      authenticated: false,
      tokenData: getTokendata(),
    });
    history.replace('/');
  };

  return (
    <nav className="bg-primary main-nav">
      <div className="exit">
        {authContextData.authenticated ? (
          <Link to="/" onClick={handleLogoutClick}>
            <div className="icon-container">
              <img src={LogoutImg} alt="imagem" className="login-button" />
              <span>sair</span>
            </div>
          </Link>
        ) : (
          <Link to="/login">
            <div className="icon-container">
              <img src={LoginImg} alt="imagem" className="login-button" />
              <span>entre</span>
            </div>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

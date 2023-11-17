import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };
  return user ? (
    <header>
      <div className="container">
        <Link to="/appointments">
          <div className="logo-container">
            <img src="/logo.jpeg" alt="logo" />
          </div>
        </Link>
        <nav>
            <div className="user-back-contianer">
              {/* <span>{user.data.user.name}</span> */}
              <button onClick={handleClick}>
                <img src="/back-button.jpeg" alt="back button" />
              </button>
            </div>
          
        </nav>
      </div>
    </header>
  ) : null;
};

export default Navbar;

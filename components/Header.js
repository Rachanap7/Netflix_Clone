import React from "react";
import {useNavigate} from "react-router-dom";


const Header = () => {
  const navigation = useNavigate();
  const handleSignIn =(e)=>{
    e.preventDefault();
    navigation('/login')
  }
  const page=window.location.href;
  console.log(page.includes('login')||page.includes('dashboard'));
  console.log(page);
  return (
    <div className="navStart">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              className="nav__logo"
              src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
              alt=""
            />
          </a>
          <div className="navbar">
            <form className="d-flex">
              <select>
                <option>English</option>
                <option>Hindi</option>
              </select>
              {
              !(page.includes('login')||page.includes('dashboard'))&& 
              <button className="btn btn-danger" onClick={handleSignIn}>Sign In</button>
              }
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

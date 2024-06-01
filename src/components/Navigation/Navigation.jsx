/** @format */

import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import OpenModalButton from "../OpenModalButton/OpenModalButton";
import LoginFormModal from "../LoginFormModal/LoginFormModal";
import SignupFormModal from "../SignupFormModal/SignupFormModal";
import "./Navigation.css";
import logo from "../../assets/huthunt.png";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import * as sessionActions from "../../store/session";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";


function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch()
  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  const LogoutBtn = () => <button className="primary-btn" onClick={logout}>Logout</button>;

  let sessionLinks;
  console.log(sessionUser)
  if (sessionUser) {
    sessionLinks = (
      <li className='btns'>
        <DropdownMenu icon={<FaUserCircle style={{fontSize:'25px'}}/>} items={[
          `Welcome, ${sessionUser.firstName[0].toUpperCase() + sessionUser.firstName.slice(1)}`,
          sessionUser.email,
          <LogoutBtn />
        ]}/>
      </li>
    );
  } else {
    sessionLinks = (
      <li className='btns'>
        <DropdownMenu
          icon={<GiHamburgerMenu style={{fontSize:'20px'}} />}
          items={[
            <OpenModalButton
              buttonText='Log In'
              modalComponent={<LoginFormModal />}
            />,
            <OpenModalButton
              buttonText='Sign Up'
              modalComponent={<SignupFormModal />}
            />,
          ]}
        />
      </li>
    );
  }

  return (
    <nav>
      <li>
        <NavLink to='/'>
          <img style={{ width: "30%" }} src={logo} />
        </NavLink>
      </li>
      {isLoaded && sessionLinks}
    </nav>
  );
}

export default Navigation;

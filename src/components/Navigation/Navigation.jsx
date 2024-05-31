import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import * as sessionActions from '../../store/session';
import './Navigation.css'

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  const sessionLinks = sessionUser ? (
    <div className='logged-in'>
      <li className='profile-dropdown'>
        <ProfileButton user={sessionUser} />
      </li>
      <li className='logout'>
        <button onClick={logout}>Log Out</button>
      </li>
    </div>
  ) : (
    <>
      <li className='logged-out'>
        <NavLink to="/login">Log In</NavLink>
      </li>
      <li className='logged-out'>
        <NavLink to="/signup">Sign Up</NavLink>
      </li>
    </>
  );

  return (
    <ul>
      <li className='logged-out'>
        <NavLink to="/">Home</NavLink>
      </li>
      {isLoaded && sessionLinks}
    </ul>
  );
}

export default Navigation;

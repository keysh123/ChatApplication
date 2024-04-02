import React, { useContext } from 'react';
import './ChatPage.css';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // const [userData, setUserData] = useState({ username: '', profilePicture: '' });

  const { user, signout } = useContext(AuthContext);

  const handleLogout = (e) => {
    signout().then((res) => {
      if (res) {
        window.refresh();
      }
    }).catch((res) => { });
  }

  return (
    <div className='navbar'>
      <span className="logo">ChatNest</span>
      <div className="user">
        <Link to="/user-info" className='unamelink'>
          <img className='uimg' src={user?.profileImg?.url} alt="" />
          <span className="uname">{user?.username}</span>
        </Link>
        <button className='ubtn' onClick={handleLogout}>logout</button>
      </div>
    </div>
  );
};

export default Navbar;

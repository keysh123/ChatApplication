// import React, { useContext } from 'react';
// import './ChatPage.css';
// import { AuthContext } from '../../context/AuthContext';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   // const [userData, setUserData] = useState({ username: '', profilePicture: '' });

//   const { user, signout } = useContext(AuthContext);

//   const handleLogout = (e) => {
//     signout().then((res) => {
//       if (res) {
//         window.refresh();
//       }
//     }).catch((res) => { });
//   }

//   return (
//     <div className='navbar'>
//       <span className="logo">ChatNest</span>
//       <div className="user">
//         <Link to="/user-info" className='unamelink'>
//           <img className='uimg' src={user?.profileImg?.url} alt="" />
//           <span className="uname">{user?.username}</span>
//         </Link>
//         <button className='ubtn' onClick={handleLogout}>logout</button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React, { useContext, useState } from 'react';
import './ChatPage.css';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { user, signout } = useContext(AuthContext);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleLogout = () => {
    setShowConfirmation(true);
  };

  const confirmLogout = () => {
    signout().then((res) => {
      if (res) {
        // Redirect to homepage or perform any other action after logout
        window.location.href = '/'; // Redirect to homepage
      }
    }).catch((res) => { });
  };

  return (
    <div className='navbar'>
      <span className="logo">ChatNest</span>
      <div className="user">
        <Link to="/user-info" className='unamelink'>
          <img className='uimg' src={user?.profileImg?.url} alt="" />
          <span className="uname">{user?.username}</span>
        </Link>
        <button className='ubtn' onClick={handleLogout}>Logout</button>
      </div>

      {/* Confirmation dialog */}
      {showConfirmation && (
        <div className="confirmation-dialog">
          <p>Are you sure you want to logout?</p>
          <button onClick={confirmLogout}>Yes</button>
          <button onClick={() => setShowConfirmation(false)}>No</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;

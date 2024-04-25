// import React, { useState, useEffect, useContext } from 'react';
// import './UserInfoPage.css'
// import { AuthContext } from '../../context/AuthContext';

// const UserData = () => {
    
//     const {user,signout} = useContext(AuthContext);
//     console.log('hii'+user);
//     const update = () => { 
//         console.log("called in the  ");
//     }

//     return (
//         <>
//             <div className='userdatabox'>
//                 <div className='uiform'>
//                     <div className="uridiv">
//                         {/* <div className='uiuname uir'>User Name : <input type='text' value={user?.username}></input></div>
//                         <div className='uimail uir'>Mail : <input type='email' disabled></input></div>
//                         <div className='uiabout uir'>About : <input type='text'></input></div> */}
//                         <div className='uiuname uir'>
//                         User Name : <input type='text' value={user?.username} />
//                     </div>
//                     <div className='uimail uir'>
//                         Mail : <input type='email' disabled value={user?.email} />
//                     </div>
//                     <div className='uiabout uir'>
//                         About : <input type='text' value={user?.bio} />
//                     </div>
                
//                     </div>
//                     <button className='userimgbtn uribtn' onClick={update}>Update Profile</button>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default UserData
import React, { useState, useContext } from 'react';
import './UserInfoPage.css';
import { AuthContext } from '../../context/AuthContext';

const UserData = () => {
    const { user, signout,setUser,authenticateWithCookies} = useContext(AuthContext);
    console.log(user.bio);
    // console.log(JSON.parse(user?.bio).textDto);
    const [updatedUser, setUpdatedUser] = useState({
        username: user?.username,
    email: user?.email,
    bio:user?.bio
    }); 
    const [textDto,setTextDto] = useState({
        data:user?.bio
    })

    // Function to handle changes in form fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedUser({ ...updatedUser, [name]: value });
        console.log(updatedUser+" "+value);
        setTextDto(prevState => ({
            ...prevState,
            data: value
        }));
    };

    // Function to handle update profile button click
    const handleUpdateProfile = () => {
        // console.log(updatedUser.username);
        // console.log(user.username);
        console.log(updatedUser.bio+"hekko");
        fetch(`http://localhost:4000/api/v1/user/bio?username=${user.username}`, {
            method: 'PUT', // Using the PUT HTTP method to update user details
            headers: {
                'Content-Type': 'application/json', // Specifying the content type as JSON
                // 'username':user.username
            },
            // body: JSON.stringify({
            //     // currentUsername: user.username, // Providing the current username
            //     // textDto: {
            //     //     'data': updatedUser.bio
            //     // }
            //     textDto:updatedUser.bio
                
            // }),
            body: updatedUser.bio,
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            alert('User profile updated successfully');
        })
        .catch((error) => {
            console.error('Error updating user profile:', error);
            alert('An error occurred while updating user profile');
        });
        setUser(user);
        authenticateWithCookies()
    };

    return (
        <div className='userdatabox'>
            <form className='uiform'>
                <div className="uridiv">
                    <div className='uiuname uir'>
                        User Name: <input type='text' name='username' value={updatedUser.username || user?.username} onChange={handleChange} />
                    </div>
                    <div className='uimail uir'>
                        Mail: <input type='email' name='email' value={updatedUser.email || user?.email} onChange={handleChange} disabled />
                    </div>
                    <div className='uiabout uir'>
                        About: <input type='text' name='bio' value={updatedUser.bio ||JSON.parse(user?.bio)} onChange={handleChange} />
                    </div>
                </div>
                <button className='userimgbtn uribtn' type='button' onClick={handleUpdateProfile}>Update Profile</button>
            </form>
        </div>
    );
};

export default UserData;

// import React from 'react'
// import './UserInfoPage.css'

// const UserImg = () => {
//   const temp = () =>{
    
//   }
//   return (
//     <>
//     <div className='userimgBox'>
//         <img src="" alt="" className='userimg'/>
//         <button className='userimgbtn' onClick={temp}>Change Profile Image</button>
//     </div>
//     </>
//   )
// }

import React, { useRef, useState,useContext } from 'react';
import './UserInfoPage.css';
import AuthContextProvider from '../../context/AuthContextProvider';
import { AuthContext } from '../../context/AuthContext';
const UserImg = () => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFilePreview, setSelectedFilePreview] = useState(null);
  const {user,signout,authenticateWithCookies} = useContext(AuthContext); 
  console.log(user.profileImg)
  const handleButtonClick = () => {
    // Trigger file input click when button is clicked
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    // Handle file selection
    const file = e.target.files[0];
    // Check file extension
    const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif']; // Add more if needed
    const fileExtension = file.name.split('.').pop().toLowerCase();
    if (!allowedExtensions.includes(fileExtension)) {
      alert('Invalid file format. Please select a JPG, JPEG, PNG, or GIF file.');
      return;
    }
    // Set selected file and preview image
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onload = () => {
      // Set preview image
      const imgDataUrl = reader.result;
      setSelectedFilePreview(imgDataUrl);
    };
    reader.readAsDataURL(file);
  };

  const uploadPhoto = async () => {
    try {
      const headers = new Headers();
    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    headers.append('username',user?.username)
      const formData = new FormData();
      formData.append('file', selectedFile);
      // Send photo to backend API endpoint for upload
      const response = await fetch('http://localhost:4000/api/v1/user/profile-img', {
        method: 'PUT',
        headers:headers,
        body: formData,
        credentials:"include"
      });
      if (response.ok) {
        alert('Photo uploaded successfully');
        // Clear selected file and preview after successful upload
        setSelectedFile(null);
        setSelectedFilePreview(null);
        authenticateWithCookies();
      } else {
        throw new Error('Failed to upload photo');
      }
    }
     catch (error) {
      console.error('Error uploading photo:', error);
      alert('An error occurred while uploading photo');
    }
  };

  return (
    // <div className='userimgBox'>
    //   {/* Display preview image if available */}
    //   {selectedFilePreview && (
    //     <img src={selectedFilePreview} alt="Selected file preview" className='userimg'/>
    //   )}
    //   {!selectedFilePreview && (
    //     <img src="" alt="No file selected" className='userimg'/>
    //   )}
    //   {/* File input hidden by CSS */}
    //   <input
    //     type="file"
    //     ref={fileInputRef}
    //     style={{ display: 'none' }}
    //     onChange={handleFileChange}
    //   />
    //   <button className='' onClick={handleButtonClick}>select</button>
    //   <button className='userimgbtn' onClick={uploadPhoto}>Upload Photo</button>
    // </div>
  // );
  
    <div className='userimgBox'>
      {/* Display the selected file preview or a placeholder if no file is selected */}
      {selectedFilePreview ? (
        <img src={selectedFilePreview} alt="Selected file preview" className='userimg'/>
      ) : (
        <img src={user?.profileImg?.url} alt="No file selected" className='userimg'/>
      )}

      {/* File input hidden by CSS */}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />

      {/* Button to trigger file input */}
      <button className='' onClick={handleButtonClick}>Select</button>

      {/* Button to upload photo */}
      <button className='userimgbtn' onClick={uploadPhoto}>Upload Photo</button>
    </div>
  );
};

export default UserImg;


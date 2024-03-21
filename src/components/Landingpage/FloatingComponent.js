import React, { useState, useEffect } from 'react';
import './LandingPage.css'; // Import your CSS file for styling
import Typing from './Typing';

const FloatingComponent = () => {
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    // Function to toggle floating effect
    const toggleFloating = () => {
      setIsFloating(prevState => !prevState);
    };

    // Timer to toggle floating effect every 2 seconds
    const interval = setInterval(toggleFloating, 2000);

    // Clean up timer
    return () => clearInterval(interval);
  }, []);

  return (
    < >
    <div style={{marginBottom:'140px',paddingBottom:'60px' ,background: 'linear-gradient(145deg, rgb(37, 57, 123) 0, rgba(139, 84, 249, 1) 50%, rgba(131, 33, 243, 1) 100%'}}>
    <h1 className='text-center mb-5 fw-bold' style={{fontFamily:'revert'}}>
      <Typing title='EXCITING FEATURES'/>
    </h1>
    <div className='features1'>
    
    <div className={isFloating ? 'floating-component' : ''}    style={{width:'30%'}}>
       <div className="card boxfeatures" >
  <div className="card-body ">
    <h3 className="card-title">
User Authentication:</h3>
    {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
    <p className="card-text">Ensuring secure user authentication is paramount in any chat website application. At [ChatApp], we prioritize the safety and privacy of our users by implementing robust authentication mechanisms. </p>
    {/* <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a> */}
  </div>
  </div>
      {/* <p>This component is floating!</p> */}
    </div>
    <div className={isFloating ? 'floating-component' : ''}style={{width:'30%'}}>
       <div className="card boxfeatures"  >
  <div className="card-body">
    <h3 className="card-title">Real-Time Messaging:</h3>
    {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
    <p className="card-text">Real-time messaging lies at the heart of the, facilitating seamless communication between users across the globe. Our platform is engineered to deliver messages instantaneously.</p>
    {/* <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a> */}
  </div>
  </div>
      {/* <p>This component is floating!</p> */}
    </div>
    <div className={isFloating ? 'floating-component' : ''} style={{width:'30%'}}>
       <div className="card boxfeatures" >
  <div className="card-body">
    <h3 className="card-title">Voice and Video Calling:</h3>
    {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
    <p className="card-text">Integrate voice and video calling features for users to communicate in real-time through audio and video.Offer users the flexibility to adjust video quality based on their internet connection speed.</p>
    {/* <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a> */}
  </div>
  </div>
      {/* <p>This component is floating!</p> */}
    </div>
   </div>
   <div className='features1'>
    <div className={isFloating ? 'floating-component' : ''} style={{width:'30%'}}>
       <div className="card boxfeatures" >
  <div className="card-body">
    <h3 className="card-title">Group Chats: </h3>
    {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
    <p className="card-text">Allow users to create or participate in group conversations with multiple participants.Additionally, they can manage the group by adding or removing participants, changing group settings.</p>
    {/* <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a> */}
  </div>
  </div>
      {/* <p>This component is floating!</p> */}
    </div>
    <div className={isFloating ? 'floating-component' : ''} style={{width:'30%'}}>
       <div className="card boxfeatures">
  <div className="card-body">
    <h3 className="card-title">Multimedia Messaging: </h3>
    {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.Users can easily share images within chat conversations by uploading them directly from their device.</p>
    {/* <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a> */}
  </div>
  </div>
      {/* <p>This component is floating!</p> */}
    </div>
    <div className={isFloating ? 'floating-component' : ''} style={{width:'30%'}}>
       <div className="card boxfeatures"  >
  <div className="card-body">
    <h3 className="card-title">Search and Filtering: </h3>
    {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
    <p className="card-text">Users can search for specific messages or keywords within group chats, making it easy to locate relevant information or past conversations. Additionally, users can apply filters to narrow down search results.</p>
    {/* <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a> */}
    {/* #6ca5d7 */}
  </div>
  </div>
      
    </div>
    </div>
    </div>
    </>
  );
};

export default FloatingComponent;

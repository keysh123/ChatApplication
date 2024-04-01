import React, { useState } from 'react';
import './ChatPage.css';
import SideBar from './SideBar';
import Chat from './Chat';

const Home = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);

  return (
    <div className='home'>
      <div className="containerfluid ">
        <SideBar setSelectedPerson={setSelectedPerson} />
        <Chat selectedPerson={selectedPerson} />
      </div>
    </div>
  );
};

export default Home;

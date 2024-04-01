import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext'
// import { useNavigate } from 'react-router-dom';
import Home from '../ChatPage/Home';
import LandingPage from '../Landingpage/LandingPage';

const MainPage = () => {
  const {user,setUser} = useContext(AuthContext);


  return (
    <>
        {
            user!=null?(<Home></Home>):(<LandingPage></LandingPage>)
        }
    </>
  )
}

export default MainPage
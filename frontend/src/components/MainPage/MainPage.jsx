import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext'
// import { useNavigate } from 'react-router-dom';
import Home from '../ChatPage/Home';
import LandingPage from '../Landingpage/LandingPage';

const MainPage = () => {
  const {user,authenticateWithCookies} = useContext(AuthContext);

  useEffect(()=>{
    authenticateWithCookies().then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    })
  },[])

  return (
    <>
        {
            user?(<Home></Home>):(<LandingPage></LandingPage>)
        }
    </>
  )
}

export default MainPage
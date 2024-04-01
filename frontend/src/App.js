import "./App.css";
import SignIn from "./components/SignIn/SignIn";
import Navbar from "./components/Landingpage/Navbar";
import LandingPage from "./components/Landingpage/LandingPage";
// import Navbar from './components/Navbar';
import { SignUp } from "./components/SignUp/SignUp";
import HomeApp from "./components/ChatPage/HomeApp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthContextProvider from "./context/AuthContextProvider";
import MainPage from "./components/MainPage/MainPage";

function App() {
  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path={"/"} element={<MainPage />}></Route>
            <Route path={"/sign-in"} element={(<SignIn/>)}></Route>
            <Route path={"/sign-up"} element={<SignUp/>}></Route>
            <Route path={"/chat-page"} element={<HomeApp/>}></Route>
            <Route path={"/info"} element={<LandingPage/>}></Route>
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}

export default App;

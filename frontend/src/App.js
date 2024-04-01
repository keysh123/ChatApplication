import "./App.css";
import SignIn from "./components/SignIn/SignIn";
import Navbar from "./components/Landingpage/Navbar";
import LandingPage from "./components/Landingpage/LandingPage";
// import Navbar from './components/Navbar';
import { SignUp } from "./components/SignUp/SignUp";
import HomeApp from "./components/ChatPage/HomeApp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthContextProvider from "./context/AuthContextProvider";

function App() {
  return (
    <>
<<<<<<< Updated upstream
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<LandingPage></LandingPage>}></Route>
          <Route path={"/sign-in"} element={<SignIn></SignIn>}></Route>
          <Route path={"/sign-up"} element={<SignUp></SignUp>}></Route>
          <Route path={"/chat-page"} element={<HomeApp></HomeApp>}></Route>
        </Routes>
      </BrowserRouter>   
=======
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<LandingPage></LandingPage>}></Route>
            <Route path={"/sign-in"} element={<SignIn></SignIn>}></Route>
            <Route path={"/sign-up"} element={<SignUp></SignUp>}></Route>
            <Route path={"/chat-page"} element={<HomeApp></HomeApp>}></Route>
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
>>>>>>> Stashed changes
    </>
  );
}

export default App;

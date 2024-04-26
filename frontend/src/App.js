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
import UserInfo from "./components/UserInfo/UserInfo";
import UserFriendInfo from "./components/UserFriendInfo/UserFriendInfo";
import WSContextProvider from "./context/WSContextProvider";
import DBProvider from "./context/DBProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastProvider } from "./context/ToastContext";

function App() {
  // const [loading,setLoading] = useState(false);
  return (
    <>
      <ToastProvider>
        <ToastContainer />
        <DBProvider>
          <WSContextProvider>
            <AuthContextProvider>
              <BrowserRouter>
                <Routes>
                  <Route exact path={"/"} element={<MainPage />}></Route>
                  <Route path={"/sign-in"} element={<SignIn />}></Route>
                  <Route path={"/sign-up"} element={<SignUp />}></Route>
                  <Route path={"/chat-page"} element={<HomeApp />}></Route>
                  <Route path={"/info"} element={<LandingPage />}></Route>
                  <Route path={"/user-info"} element={<UserInfo />}></Route>
                  <Route
                    path={"/user-friend-info"}
                    element={<UserFriendInfo />}
                  ></Route>
                </Routes>
              </BrowserRouter>
            </AuthContextProvider>
          </WSContextProvider>
        </DBProvider>
      </ToastProvider>
    </>
  );
}

export default App;

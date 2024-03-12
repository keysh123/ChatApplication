import logo from './logo.svg';
import './App.css';
import Navbar from './components/Landingpage/Navbar';
import LandingPage from './components/Landingpage/LandingPage';

function App() {
  return (
    <>
     {/* <div className="App"> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header> */}
     
     {/* </div> */}

     <Navbar/>
     <LandingPage/>
    </>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { PageTransition } from "@steveeeie/react-page-transition";
import Homepage from "./Homepage/Homepage";
import Navbar from "./Navbar/Navbar";
import About from "./About/About";
import COD from "./Teams/COD/COD";
import OW from "./Teams/OW/OW";
import RL from "./Teams/RL/RL";
import CSGO from "./Teams/CSGO/CSGO";
import LOL from "./Teams/LOL/LOL";
import Smash from "./Teams/Smash/Smash";
import Valorant from "./Teams/Valorant/Valorant";
import Footer from "./Footer/Footer";
import Loading from "./Loading/Loading";
import Socials from "./Socials/Socials";
import Background from "./Background";
// import Calendar from "./Calendar/Calendar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Background />
        <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/" element={<Loading />} />
          {/* <PageTransition preset="fade" transitionKey={location.pathname}> */}
          <Route path="/aboutus" element={<About />} />
          <Route path="/teams/call-of-duty" element={<COD />} />
          <Route path="/teams/overwatch" element={<OW />} />
          <Route path="/teams/rocket-league" element={<RL />} />
          <Route path="/teams/csgo" element={<CSGO />} />
          <Route path="/teams/league-of-legends" element={<LOL />} />
          <Route path="/teams/smash" element={<Smash />} />
          <Route path="/teams/valorant" element={<Valorant />} />
          <Route path="/socials" element={<Socials />} />
          {/* </PageTransition> */}
          {/* <Route path="/calendar" element={<Calendar/>}></Route> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

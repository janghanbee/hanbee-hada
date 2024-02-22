import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/about/about';
import Project from './pages/project/project';
import Uniself from './pages/project/uniself';
import MultiDreamer from './pages/project/multidreamer';
import Kpop from './pages/project/kpop';
import Antifreeze from './pages/project/antifreeze';
import Beer from './pages/project/beer';
import DearestFriend from './pages/project/dearestFriend';
import NBTI from './pages/project/nbti';
import VoicePlanet from './pages/project/voicePlanet';
import InPlanet from './pages/project/inPlanet';
import GsDCQG from './pages/project/gsDCQG';
import RollingRolling from './pages/project/rollingRolling';
import OverTheDoor from './pages/project/overTheDoor';
import Contact from './pages/contact/contact';
import Navbar from './components/navBar/navBar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/uniself" element={<Uniself />} />
        <Route path="/multidreamer" element={<MultiDreamer />} />
        <Route path="/kpop" element={<Kpop />} />
        <Route path="/antifreeze" element={<Antifreeze />} />
        <Route path="/beer" element={<Beer />} />
        <Route path="/dearestFriend" element={<DearestFriend />} />
        <Route path="/nbti" element={<NBTI />} />
        <Route path="/voicePlanet" element={<VoicePlanet />} />
        <Route path="/inPlanet" element={<InPlanet />} />
        <Route path="/gsDCQG" element={<GsDCQG />} />
        <Route path="/rollingRolling" element={<RollingRolling />} />
        <Route path="/overTheDoor" element={<OverTheDoor />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
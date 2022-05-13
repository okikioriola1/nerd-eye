import React from 'react'

import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Pipeline from './components/Pipeline/Pipeline';
import JobOffers from './components/JobOffers/JobOffers';
import Industries from './components/Industries/Industries';
import WhyJoin from './components/WhyJoin/WhyJoin';
import SuccessStories from './components/SuccessStories/SuccessStories';
import JoinUs from './components/JoinUs/JoinUs';
import Footer from './components/Footer/Footer';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/styles/globalStyles";
import { lightTheme, darkTheme } from "./components/styles/Theme"
import Toggle from './components/styles/Toggle';
import { useDarkMode } from './components/styles/useDarkMode';

function App() {
  
  const [theme, themeToggler] = useDarkMode();
  const themeMode= theme === 'light' ? lightTheme : darkTheme
  return (
    <ThemeProvider theme={themeMode}> 
    <GlobalStyles />
    <Toggle theme={theme} toggleTheme={themeToggler}/>
    <div className="App">

      <Navbar/>
      <HeroSection/>
      <HowItWorks/>
      <Pipeline/>
      <JobOffers/>
      <Industries/>
      <WhyJoin/>
      <SuccessStories/>
      <JoinUs/>
      <Footer/>

    </div>
    </ThemeProvider>
  );
}

export default App;

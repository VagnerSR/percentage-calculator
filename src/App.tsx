import './App.css';
import CalculatorVBloqueado from './components/CalculatorVBloqueado/CalculatorVBloqueado';
import Header from './components/Header/Header';
import ReacGA from "react-ga";
import OtherPercentageCalculations from './components/OtherPercentageCalculations/OtherPercentageCalculations';
import { useEffect } from 'react';

const TRACKIND_ID = "UA-251655585-1"
ReacGA.initialize(TRACKIND_ID);

useEffect (() => {
  ReacGA.pageview(window.location.pathname)
}, [])

function App() {
  return (
    <div className="App">
      <Header />
      <CalculatorVBloqueado />
      <OtherPercentageCalculations />
    </div>
  );
}

export default App;

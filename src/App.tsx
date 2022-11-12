import './App.css';
import CalculatorVBloqueado from './components/CalculatorVBloqueado/CalculatorVBloqueado';
import Header from './components/Header/Header';
import OtherPercentageCalculations from './components/OtherPercentageCalculations/OtherPercentageCalculations';

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

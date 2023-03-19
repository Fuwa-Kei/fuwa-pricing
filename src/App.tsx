import { FC, useState } from 'react';
import Header from './components/Header';
import Pricing from './components/Pricing';
import './styles/app.css';

const App: FC = () => {

  const [isMonthly, setIsMonthly] = useState(true);

  const handlePriceChange = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <div className="App">
      <div className="pageContainer">
      <Header isMonthly={isMonthly} handlePriceChange={handlePriceChange} />
        <Pricing isMonthly={isMonthly} />
      </div>
    </div>
  );
}

export default App;

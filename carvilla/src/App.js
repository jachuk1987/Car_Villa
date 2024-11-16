import logo from './logo.svg';
import './App.css';
import WelcomeHero from './Components/WelcomeHero';
import ServiceSection from './Components/ServiceSection';
import NewCars from './Components/NewCars';
import FeaturedCars from './Components/FeaturedCars';

function App() {
  return (
    <div className="App">
      <WelcomeHero />
      <ServiceSection />
      <NewCars />
      <FeaturedCars />
    </div>
  );
}

export default App;

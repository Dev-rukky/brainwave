import ButtonGradient from './assets/svg/ButtonGradient';
import Benefits from './components/Benefits';
import Collaboration from './components/Collaboration';
import Header from './components/Header';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Services from './components/Services';

const App = () => {
  return (
    <>
      <div>
        <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
          <Header />
          <Hero/>
          <Benefits />
          <Collaboration />
          <Services />
          <Pricing />
        </div>
        <ButtonGradient />
      </div>
    </>
  );
};

export default App

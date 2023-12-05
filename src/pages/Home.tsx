import Hero from '../components/Home/Header/Hero';
import JoinUs from '../components/Home/Sections/JoinUs';
import Money from '../components/Home/Sections/Money';
import Reasons from '../components/Home/Sections/Reasons';
import WhatYouGet from '../components/Home/Sections/WhatYouGet';
import WithCoach from '../components/Home/Sections/WithCoach';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';

const HomePage = () => {
  return (
    <>
      <Navigation mode='main'/>
      <main>
        <Hero />
        <Reasons />
        <Money />
        <WhatYouGet />
        <WithCoach />
        <JoinUs />
      </main>
      <Footer />
    </>
  );
};
export default HomePage;

import Hero from '../components/Home/Header/Hero';
import Some from '../components/Home/Header/Some';
import JoinUs from '../components/Home/Sections/JoinUs';
import Money from '../components/Home/Sections/Money';
import Reasons from '../components/Home/Sections/Reasons';
import WhatYouGet from '../components/Home/Sections/WhatYouGet';
import WithCoach from '../components/Home/Sections/WithCoach';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Reasons />
      <Money />
      <WhatYouGet />
      <WithCoach />
      <JoinUs />
      <Some />
    </>
  );
};
export default HomePage;

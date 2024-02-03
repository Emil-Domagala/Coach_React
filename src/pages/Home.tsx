import Hero from '../components/Home/Header/Hero';
import JoinUs from '../components/Home/Sections/JoinUs';
import Money from '../components/Home/Sections/Money';
import Reasons from '../components/Home/Sections/Reasons';
import WhatYouGet from '../components/Home/Sections/WhatYouGet';
import WithCoach from '../components/Home/Sections/WithCoach';

const HomePage = () => {
  const body = document.querySelector('body');

  body!.setAttribute('class', 'bgc-one');
  return (
    <>
      <main>
        <Hero />
        <Reasons />
        <Money />
        <WhatYouGet />
        <WithCoach />
        <JoinUs />
      </main>
    </>
  );
};
export default HomePage;

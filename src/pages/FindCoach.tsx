import Navigation from '../components/Navigation/Navigation';
import CoachesWrapper from '../components/FindCoach/CoachesWrapper';
import Footer from '../components/Footer/Footer';
import Filter from '../components/FindCoach/Filter';
import useHTTPCoach from '../hooks/use-http-coach';
import { useEffect } from 'react';

const HireCoachPage = () => {
  const { loadCoaches } = useHTTPCoach();

  useEffect(() => {
    loadCoaches();
  }, [loadCoaches]);

  return (
    <>
      <Navigation mode="two" />
      <main>
        <Filter />
        <CoachesWrapper />
      </main>
      <article />
      <Footer />
    </>
  );
};

export default HireCoachPage;

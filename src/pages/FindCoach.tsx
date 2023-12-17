import Filter from '../components/FindCoach/Filter';
import Navigation from '../components/Navigation/Navigation';
import CoachesWrapper from '../components/FindCoach/CoachesWrapper';
import Footer from '../components/Footer/Footer';

const HireCoachPage = () => {
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

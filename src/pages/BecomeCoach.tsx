import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import BecomeCoach from '../components/BecomeCoach/BecomeCoach';




const becomeCoachPage = () => {
  return (
    <>
      <Navigation mode="two" />
      <main>
        <BecomeCoach />
      </main>
      <Footer />
    </>
  );
};


export default becomeCoachPage;

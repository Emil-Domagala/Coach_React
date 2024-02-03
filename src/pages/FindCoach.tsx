import TopBarMobile from '../components/UI/TopBarMobile';
import CoachesWrapper from '../components/FindCoach/CoachesWrapper';
import Filter from '../components/FindCoach/Filter';

const HireCoachPage = () => {
  const body = document.querySelector('body');

  body!.setAttribute('class', 'bgc-one');

  return (
    <>
      <TopBarMobile />
      <main>
        <Filter />
        <CoachesWrapper/>
      </main>
      <article />
    </>
  );
};

export default HireCoachPage;

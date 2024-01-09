import Navigation from '../components/Navigation/Navigation';
import CoachesWrapper from '../components/FindCoach/CoachesWrapper';
import Footer from '../components/Footer/Footer';
import Filter from '../components/FindCoach/Filter';
import useHTTPCoach from '../hooks/use-http-coach';
import { useEffect, useState } from 'react';
import LoadingModal from '../components/UI/LoadingModal';
// import ErrorModal from '../components/UI/ErrorModal';

const HireCoachPage = () => {
  const [mode, setMode]: [mode: null | string, setMode: any] = useState(null);
  const body = document.querySelector('body');

  body!.setAttribute('class', 'bgc-one');
  const { loadCoaches, isLoading, hasError } = useHTTPCoach();

  useEffect(() => {
    loadCoaches();
  }, [loadCoaches]);

  console.log(hasError)
  console.log(isLoading)

  // if (isLoading===true && hasError===null) {
  //   setMode('loading');
  // }
  // if (!isLoading && hasError) {
  //   setMode('error');
  // }
  // if (!isLoading && !hasError) {
  //   setMode(null);
  // }

  return (
    <>
      {/* {hasError && <ErrorModal hasError={hasError} />} */}
      {isLoading && <LoadingModal text="Loading..." mode={mode} />}
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

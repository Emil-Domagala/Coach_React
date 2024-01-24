import TopBarMobile from '../components/UI/TopBarMobile';
import CoachesWrapper from '../components/FindCoach/CoachesWrapper';
import Filter from '../components/FindCoach/Filter';
import LoadingModal from '../components/UI/LoadingModal';
import ErrorModal from '../components/UI/ErrorModal';
import { useDispatch } from 'react-redux';
import { coachesActions } from '../store/slices/coaches';
import { Await, defer, useLoaderData, json } from 'react-router-dom';
import { Suspense } from 'react';

const HireCoachPage = () => {
  const dispatch = useDispatch();
  const body = document.querySelector('body');

  body!.setAttribute('class', 'bgc-one');
  const { loadedCoaches }: any = useLoaderData();

  return (
    <>
      <TopBarMobile />
      <main>
        <Filter />
        <Suspense fallback={<LoadingModal />}>
          <Await resolve={loadedCoaches} errorElement={<ErrorModal />}>
            {(loadedCoaches) =>
              loadedCoaches && (
                <CoachesWrapper
                  onSaveCoaches={() => {
                    for (const key in loadedCoaches) {
                      const coach = {
                        coachId: key,
                        coachName: loadedCoaches[key].coachName,
                        coachLastname: loadedCoaches[key].coachLastname,
                        coachPrice: loadedCoaches[key].coachPrice,
                        coachUrl: loadedCoaches[key].coachUrl,
                        coachDesc: loadedCoaches[key].coachDesc,
                        coachWays: loadedCoaches[key].waysValue,
                        coachSize: loadedCoaches[key].sizeValue,
                      };
                      dispatch(coachesActions.addCoaches(coach));
                    }
                  }}
                />
              )
            }
          </Await>
        </Suspense>
      </main>
      <article />
    </>
  );
};

export default HireCoachPage;

const loadCoaches = async () => {
  const response = await fetch(
    'https://react-coach-page-default-rtdb.europe-west1.firebasedatabase.app/coaches.json',
  );

  if (!response.ok) {
    throw json({ message: 'Could not fetch coaches.' });
  } else {
    const responseData = await response.json();
    
    return responseData;
  }
};

export function loaderFindCoach() {
  return defer({
    loadedCoaches: loadCoaches(),
  });
}

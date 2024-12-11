import TopBarMobile from '../components/UI/TopBarMobile';
import CoachDetailContent from '../components/CoachDetail/CoachDetailContent';
import { useLoaderData } from 'react-router-dom';

const CoachDetailPage = () => {
  const body = document.querySelector('body');

  body!.setAttribute('class', 'bgc-two');
  const selectedCoach = useLoaderData();

  return (
    <>
<TopBarMobile/>
      <CoachDetailContent selectedCoach={selectedCoach} />
      <article />
    </>
  );
};
export default CoachDetailPage;

export const loadCoach = async ({ params }: any) => {
  const id = params.id;
  try {
    const response = await fetch(
      ` https://react-coach-page-default-rtdb.europe-west1.firebasedatabase.app/coaches/${id}.json`,
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.error || 'Failed to fetch!');
      throw error;
    }

    return responseData;
  } catch (err) {
    console.log(err);
  }
};

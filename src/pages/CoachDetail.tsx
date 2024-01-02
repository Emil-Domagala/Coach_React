import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import CoachDetailContent from '../components/CoachDetail/CoachDetailContent';
import { useLoaderData } from 'react-router-dom';

const CoachDetailPage = () => {
  const selectedCoach = useLoaderData();

  const nowThere = () => {
    if (selectedCoach) {
      console.log(selectedCoach);
    }
  };

  return (
    <>
      <Navigation mode="two" />
      <CoachDetailContent selectedCoach={selectedCoach} />
      <button onClick={nowThere}>dwef</button>
      <article />
      <Footer />
    </>
  );
};
export default CoachDetailPage;

export const loadCoach = async ({params}:any) => {
  const id = params.id
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

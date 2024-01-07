import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import BecomeCoach from '../components/BecomeCoach/BecomeCoach';
import { redirect } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';


const becomeCoachPage = () => {

  const body = document.querySelector('body');

  body!.setAttribute('class', 'bgc-two');
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

export function checkBecomeCoachLoader() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const isCoach = localStorage.getItem('isCoach');

  if (isLoggedIn !== 'true' ) {
    return redirect('/auth');
  }else if (isCoach==='true'){
    return redirect('/')
  }
  return ''
}
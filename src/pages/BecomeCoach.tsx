import TopBarMobile from '../components/UI/TopBarMobile';
import BecomeCoach from '../components/BecomeCoach/BecomeCoach';
import { redirect } from 'react-router-dom';


const becomeCoachPage = () => {

  const body = document.querySelector('body');

  body!.setAttribute('class', 'bgc-two');
  return (
    <>
<TopBarMobile/>
      <main>
        <BecomeCoach />
      </main>
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
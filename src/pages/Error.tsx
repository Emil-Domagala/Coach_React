import Navigation from '../components/Navigation/Navigation';
import Error from '../components/Error/Error'

const ErrorPage = () => {
  const body = document.querySelector('body');

  body!.setAttribute('class', 'bgc-one');
  return (
    <>
      <Navigation mode="small" />
      <Error/>
    </>
  );
};
export default ErrorPage;

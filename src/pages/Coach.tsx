import { useParams } from 'react-router-dom'
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';

const CoachPage = ()=>{
    const params = useParams()

    return (
      <>
        <Navigation mode='two'/>
        <h2>{params.id}</h2>
        <article/>
        <Footer/>
      </>
    );
}
export default CoachPage
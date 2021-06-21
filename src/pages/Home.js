import { useEffect } from 'react';
import Header from '../components/Header'
import WelcomeSection from '../components/home/WelcomeSection'

const Home = () => {

  useEffect(() => {
    console.log('use effect here');
  }, [])
  return (
    <div>
      <Header />
      <WelcomeSection />
    </div>
  );
}

export default Home;

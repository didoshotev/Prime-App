import { useContext } from 'react';
import { useEffect } from 'react';
import Header from '../components/Header'
import WelcomeSection from '../components/home/WelcomeSection'
import UserContext from '../Context';

const Home = () => {
  const context = useContext(UserContext)
  
  return (
    <div>
      <Header />
      <WelcomeSection />
    </div>
  );
}

export default Home;

import { useContext } from 'react';
import { useEffect } from 'react';
import Header from '../components/Header'
import WelcomeSection from '../components/home/WelcomeSection'
import UserContext from '../Context';
import DeveloperContext from '../DeveloperContext';

const Home = () => {
  const context = useContext(UserContext)
  const developerContext = useContext(DeveloperContext)

  const hiredDevs =  context.hiredDevelopers
  // console.log(hiredDevs);
  const devs = developerContext.developers
  console.log(devs);

  return (
    <div>
      <Header />
      <WelcomeSection />
    </div>
  );
}

export default Home;

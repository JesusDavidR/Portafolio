import './App.css';
import { PresentationCard } from './assets/PresentationCard';

export function App() {
  return (
    <section className='App'>
      <PresentationCard 
        isFollowing={true} 
        userNameX='jesusdavid1445' 
        userNameG='JesusDavidR' 
        userNameL='Jesus Ruiz' 
        userNameS='Jesus_D' 
        userNameI='IAmPapaya' 
        userNameB='Jesus Ruiz Calderón' 
        FirstName='JESUS DAVID' 
        profesion='Ingeniero Multimedia' 
        LastName='RUIZ CALDERON' 
      />
    </section>
  );
}
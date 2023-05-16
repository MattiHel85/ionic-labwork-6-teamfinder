import { IonButton, IonCard, IonCardContent, IonCardHeader, IonContent, useIonRouter} from '@ionic/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Team.css';

const Teams: React.FC = () => {

  interface TeamResult {
    _id: string,
    badgeUrl: string,
    name: string,
    nickname: string,
    founded: number,
    groundName: string,
    groundCapacity: number,
    country: string,
    league: string,
    coach: string
  }

  type TeamId = {
    id: string;
  }
  
  const [team, setTeam] = useState<TeamResult>();
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useIonRouter();

  const { id } = useParams<TeamId>();

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await fetch(`https://football-teams-rest-api-assignment.onrender.com/api/${id}`)
      const jsonData = await response.json()
      setTeam(jsonData)
    }
    fetchTeams()
  }, [])

  return (
    <>
    <IonContent>
      <div className='container'>
        <h3>{team?.name ?? 'Undefined'}</h3>
        <IonCard className='teamCard'>
          <img src={team?.badgeUrl}/>
          <IonCardHeader className='cardHeader'>

          </IonCardHeader>
          <IonCardContent className='ionCardContent'>
            <div className='cardContent'>
              <p>
                Nickname: {team?.nickname}
              </p>
              <p>
                Founded: {team?.founded}
              </p>
              <p>
                Ground name: {team?.groundName}
              </p>
              <p>
                Ground capacity: {team?.groundCapacity}
              </p>
              <p>
                Country: {team?.country}
              </p>
              <p>
                League: {team?.league}
              </p>
              <p>
                Coach: {team?.coach}
              </p>
            </div>
            <div className='buttonGroup'>
              <IonButton color="#F37D0F" fill='outline' shape='round' className='buttonBack' onClick={() => router.push('/teams')}>Back</IonButton>
              {isLoggedIn && <IonButton shape='round' className='buttonEdit' onClick={() => router.push(`/edit/team/${team?._id}`)}>Edit</IonButton> }
            </div>
          </IonCardContent>
        </IonCard>
      </div>      
    </IonContent>        
    </>
  );
};

export default Teams;
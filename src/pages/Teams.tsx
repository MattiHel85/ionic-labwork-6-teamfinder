import { IonContent, IonPage} from '@ionic/react';
import { useEffect, useState } from 'react';
import {  IonGrid, IonRow, IonCol, IonItem, IonLabel } from '@ionic/react';
import './Teams.css';

const Teams: React.FC = () => {

  interface TeamsResult {
    _id: String,
    badgeUrl: String,
    name: String,
    nickname: String,
    founded: Number,
    groundName: String,
    groundCapacity: Number,
    country: String,
    league: String,
    coach: String
  }
  
  const [teams, setTeams] = useState<TeamsResult[]>([]);

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await fetch('https://football-teams-rest-api-assignment.onrender.com/api/getall')
      const jsonData = await response.json()
      setTeams(jsonData)
    }
    fetchTeams()
  }, [])

  console.log(teams);
  
  return (
        <IonGrid className='grid'>
            <h2>All teams</h2>
            <IonCol>
              <IonRow>
            {
              teams.map((team) => (
                
                  // <IonRow>
                    <IonItem className='teamHolder' href={`/team/${team._id}`}>
                      <img alt="Team badge" className='thumbnail' src={String(team.badgeUrl)} />
                      <IonLabel className='label'>{String(team.name)}</IonLabel>
                    </IonItem>
                  // </IonRow>
                
              ))
            }
            </IonRow>
          </IonCol>
        </IonGrid>
  );
};

export default Teams;
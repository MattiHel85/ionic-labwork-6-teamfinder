import { IonContent, IonPage} from '@ionic/react';
import { useEffect, useState } from 'react';
import { IonReactRouter } from '@ionic/react-router';

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
  // console.log(teams[0]._id)
  return (
    <IonPage>
      <IonContent>
        <IonGrid className='grid'>
            <h3><strong>All teams</strong></h3>
            {
              teams.map((team) => (
                <IonRow>
                  <IonCol>
                    <IonItem className='teamHolder' routerLink={`/team/${team._id}`}>
                      <img alt="Team badge" className='thumbnail' src={String(team.badgeUrl)} />
                      <IonLabel className='label'>{String(team.name)}</IonLabel>
                    </IonItem>
                  </IonCol>
                </IonRow>
              ))
            }
          
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Teams;
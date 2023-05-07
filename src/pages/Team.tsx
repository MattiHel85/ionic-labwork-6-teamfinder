import { IonContent, IonPage} from '@ionic/react';
import { useEffect, useState } from 'react';
import {  IonGrid, IonRow, IonItem, IonThumbnail, IonLabel } from '@ionic/react';
import './Teams.css';

const Teams: React.FC = () => {

  interface TeamsResult {
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

  return (
    <>
        <h1>
            Test
            {/* {teams.name} */}
        </h1>
    </>
  );
};

export default Teams;
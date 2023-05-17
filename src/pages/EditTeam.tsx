import React, { useState, useEffect } from 'react';
import { IonButton, IonCard, IonCardContent, IonInput, IonTitle } from '@ionic/react';
import './AddEditTeam.css';
import { useParams } from 'react-router';

//Create interface
interface TeamData {
  badgeUrl: string,
  name: string,
  nickname: string,
  founded: number,
  groundName: string,
  groundCapacity: number,
  country: string,
  league: string,
  coach: string,
}

type TeamId = {
  id: string;
};

const EditTeam: React.FC = () => {
  const { id } = useParams<TeamId>();
  const [formData, setFormData] = useState<TeamData>({
    badgeUrl: '',
    name: '',
    nickname: '',
    founded: 0,
    groundName: '',
    groundCapacity: 0,
    country: '',
    league: '',
    coach: '',
  });

  useEffect(() => {
    fetch(`https://football-teams-rest-api-assignment.onrender.com/api/${id}`)
      .then((response) => response.json())
      .then((team) => setFormData(team));
  }, [id]);

  const setFormValue = (key: keyof TeamData, value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const editData = (e: React.FormEvent<HTMLFormElement>) => {
    //Next steps would be to add error handling to the functionalities
    e.preventDefault();
    fetch(`https://football-teams-rest-api-assignment.onrender.com/api/update/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  // Next step would be to add an error page or error card to be rendered if the id is not updated. This would be put in place of '/team/:id'
  const teamLink = id ? `/team/${id}` : '/team/:id';

  return (
    //We render the form where the the team information can be edited and updated.
    // Based on how the API is set up, all fields need to be updated for the data to be updated. 
    <>

      <IonTitle className="page-header">Edit Team</IonTitle>
      <form onSubmit={editData}>
        <IonCard className="info-container">
          <IonCardContent>
            <IonInput
              className="input-item"
              label="badge URL link"
              labelPlacement="floating"
              placeholder="enter text"
              //The initial value is retrieved from the API, according to the team's id. In this case, the badge url.
              value={formData.badgeUrl}
              //once the data is changed, setFormValue is called and the badgeURL property is updated
              onIonChange={(e) => setFormValue('badgeUrl', e.detail.value!)}
            />
            <IonInput
              className="input-item"
              label="team name"
              labelPlacement="floating"
              placeholder="enter text"
              value={formData.name}
              onIonChange={(e) => setFormValue('name', e.detail.value!)}
            />
            <IonInput
              className="input-item"
              label="team nickname"
              labelPlacement="floating"
              placeholder="enter text"
              value={formData.nickname}
              onIonChange={(e) => setFormValue('nickname', e.detail.value!)}
            />
            <IonInput
              className="input-item"
              label="founded"
              labelPlacement="floating"
              placeholder="enter text"
              type="number"
              value={formData.founded}
              onIonChange={(e) => setFormValue('founded', e.detail.value!)}
            />
            <IonInput
              className="input-item"
              label="ground name"
              labelPlacement="floating"
              placeholder="enter text"
              value={formData.groundName}
              onIonChange={(e) => setFormValue('groundName', e.detail.value!)}
            />
            <IonInput
              className="input-item"
              label="ground capacity"
              labelPlacement="floating"
              placeholder="enter text"
              value={formData.groundCapacity}
              onIonChange={(e) => setFormValue('groundCapacity', e.detail.value!)}
            />
            <IonInput
              className='input-item'
              label='league'
              labelPlacement='floating'
              placeholder='enter text'
              value={formData.league}
              onIonChange={(e) => setFormValue('league', e.detail.value!)}
            />
            <IonInput
              className='input-item'
              label='coach'
              labelPlacement='floating'
              placeholder='enter text'
              value={formData.coach}
              onIonChange={(e) => setFormValue('coach', e.detail.value!)}
            />
            {/* Finally, the buttons. Back-button uses routerLink to direct the user to the teams list in /Teams.
            The apply edits button does not in itself actually update the data, it is done within each field and with the form's . It only directs the user to the team's Team.tsx page.*/}
            <div className='button-container'><IonButton className='back-button' type='button' routerLink='/Teams'>back</IonButton>
              <IonButton className='edit-button' type='submit' routerLink={teamLink}>apply edits</IonButton></div>

          </IonCardContent>
        </IonCard>
      </form>
    </>
  );
}

export default EditTeam;
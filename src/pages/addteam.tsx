import React, { useState } from 'react';
import { IonButton, IonCard, IonCardContent, IonInput, IonTitle } from '@ionic/react';
import './AddEditTeam.css';


function AddTeam() {

    const [badgeUrl, setBadgeUrl] = useState("");
    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");
    const [founded, setFounded] = useState("");
    const [groundName, setGroundName] = useState("");
    const [groundCapacity, setGroundCapacity] = useState("");
    const [country, setCountry] = useState("");
    const [league, setLeague] = useState("");
    const [coach, setCoach] = useState("");
    const [id, setId] = useState(null);

    const postData = () => {
        const team = { badgeUrl, name, nickname, founded, groundName, groundCapacity, country, league, coach }

        fetch('https://football-teams-rest-api-assignment.onrender.com/api/add', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(team)
        })
            .then((response) => response.json())
            .then((data) => {
                setId(data.id);
            });
    }

    const teamLink = id ? `/team/${id}` : '/team/:id';


    return (
        <>
            <IonTitle className='page-header'>Add Team</IonTitle>

            <form onSubmit={postData}>
                <IonCard className='info-container'>
                    <IonCardContent>
                        <IonInput
                            className='input-item'
                            label='badge URL link'
                            labelPlacement='floating'
                            placeholder='enter text'
                            fill='outline'
                            defaultValue={badgeUrl}
                            onIonInput={(e) => setBadgeUrl(e.detail.value!)}
                        />
                        <IonInput
                            className='input-item'
                            label='team name'
                            labelPlacement='floating'
                            placeholder='enter text'
                            defaultValue={name}
                            onIonInput={(e) => setName(e.detail.value!)}
                        />
                        <IonInput
                            className='input-item'
                            label='team nickname'
                            labelPlacement='floating'
                            placeholder='enter text'
                            defaultValue={nickname}
                            onIonInput={(e) => setNickname(e.detail.value!)}
                        />
                        <IonInput
                            className='input-item'
                            label='founded'
                            labelPlacement='floating'
                            placeholder='enter text'
                            defaultValue={founded}
                            onIonInput={(e) => setFounded(e.detail.value!)}
                        />
                        <IonInput
                            className='input-item'
                            label='ground name'
                            labelPlacement='floating'
                            placeholder='enter text'
                            defaultValue={groundName}
                            onIonInput={(e) => setGroundName(e.detail.value!)}
                        />
                        <IonInput
                            className='input-item'
                            label='ground capacity'
                            labelPlacement='floating'
                            placeholder='enter text'
                            defaultValue={groundCapacity}
                            onIonInput={(e) => setGroundCapacity(e.detail.value!)}
                        />
                        <IonInput
                            className='input-item'
                            label='country'
                            labelPlacement='floating'
                            placeholder='enter text'
                            defaultValue={country}
                            onIonInput={(e) => setCountry(e.detail.value!)}
                        />
                        <IonInput
                            className='input-item'
                            label='league'
                            labelPlacement='floating'
                            placeholder='enter text'
                            defaultValue={league}
                            onIonInput={(e) => setLeague(e.detail.value!)}
                        />
                        <IonInput
                            className='input-item'
                            label='coach'
                            labelPlacement='floating'
                            placeholder='enter text'
                            defaultValue={coach}
                            onIonInput={(e) => setCoach(e.detail.value!)}
                        />
                        <div className='button-container'><IonButton className='back-button' type='button' routerLink='/Home'>back</IonButton>
                            <IonButton className='edit-button' type='submit' routerLink={teamLink}>add team</IonButton></div>

                    </IonCardContent>
                </IonCard>
            </form>
        </>
    );
}

export default AddTeam;

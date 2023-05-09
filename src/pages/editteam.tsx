import React, { useEffect, useState } from 'react';
import { IonButton, IonCard, IonCardContent, IonInput, IonItem, IonTitle } from '@ionic/react';
import './AddEditTeam.css';


function EditTeam() {
    const [team, setTeam] = useState({});
    const [badgeUrl, setBadgeUrl] = useState("");
    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");
    const [founded, setFounded] = useState("");
    const [groundName, setGroundName] = useState("");
    const [groundCapacity, setGroundCapacity] = useState("");
    const [country, setCountry] = useState("");
    const [league, setLeague] = useState("");
    const [coach, setCoach] = useState("");


    const fetchTeam = async () => {
        try {
            const response = await fetch(`https://football-teams-rest-api-assignment.onrender.com/api/:id`)
            if (!response.ok) {
                throw new Error(`Failed to fetch team: ${response.status} ${response.statusText}`);
            }
            const data = await response.json()
            setTeam(data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchTeam()
    }, [])

    const updateData = async () => {
        const team = { badgeUrl, name, nickname, founded, groundName, groundCapacity, country, league, coach }

        try {
            const response = await fetch(`https://football-teams-rest-api-assignment.onrender.com/api/update/:id`, {
                method: 'PUT',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(team)
            })
            if (!response.ok) {
                throw new Error(`Failed to update team: ${response.status} ${response.statusText}`);
            }
            await fetchTeam();
        } catch (error) {
            console.error(error);

        }
    }


    return (

        <>

            <IonItem>
                <IonTitle className='page-header'>Edit Team</IonTitle>
            </IonItem>

            <form onSubmit={updateData}>
                <IonCard className='info-container'>
                    <IonCardContent>
                        <IonInput
                            className='input-item'
                            label='badge URL link'
                            labelPlacement='floating'
                            placeholder='enter text'
                            fill='outline'
                            value={badgeUrl}
                            onIonInput={(e) => setBadgeUrl(e.detail.value!)}
                        />
                        <IonInput
                            className='input-item'
                            label='team name'
                            labelPlacement='floating'
                            placeholder='enter text'
                            value={name}
                            onIonInput={(e) => setName(e.detail.value!)}
                        />
                        <IonInput
                            className='input-item'
                            label='team nickname'
                            labelPlacement='floating'
                            placeholder='enter text'
                            value={nickname}
                            onIonInput={(e) => setNickname(e.detail.value!)}
                        />
                        <IonInput
                            className='input-item'
                            label='founded'
                            labelPlacement='floating'
                            placeholder='enter text'
                            value={founded}
                            onIonInput={(e) => setFounded(e.detail.value!)}
                        />
                        <IonInput
                            className='input-item'
                            label='ground name'
                            labelPlacement='floating'
                            placeholder='enter text'
                            value={groundName}
                            onIonInput={(e) => setGroundName(e.detail.value!)}
                        />
                        <IonInput
                            className='input-item'
                            label='ground capacity'
                            labelPlacement='floating'
                            placeholder='enter text'
                            value={groundCapacity}
                            onIonInput={(e) => setGroundCapacity(e.detail.value!)}
                        />
                        <IonInput
                            className='input-item'
                            label='country'
                            labelPlacement='floating'
                            placeholder='enter text'
                            value={country}
                            onIonInput={(e) => setCountry(e.detail.value!)}
                        />
                        <IonInput
                            className='input-item'
                            label='league'
                            labelPlacement='floating'
                            placeholder='enter text'
                            value={league}
                            onIonInput={(e) => setLeague(e.detail.value!)}
                        />
                        <IonInput
                            className='input-item'
                            label='coach'
                            labelPlacement='floating'
                            placeholder='enter text'
                            value={coach}
                            onIonInput={(e) => setCoach(e.detail.value!)}
                        />
                        <div className='button-container'><IonButton className='back-button' type='button' routerLink='/Home'>back</IonButton>
                            <IonButton className='edit-button' type='submit' routerLink='team/:id'>apply edits</IonButton></div>

                    </IonCardContent>
                </IonCard>
            </form>
        </>

    );
}
export default EditTeam;
import React, { useState } from 'react';
import { IonButton, IonCard, IonCardContent, IonInput, IonTitle } from '@ionic/react';
import './AddEditTeam.css';
import { useParams } from 'react-router';

interface TeamData {

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

const AddTeam: React.FC = () => {
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
        coach: ''
    });

    const setFormValue = (key: keyof TeamData, value: string | number) => {
        setFormData(prevState => ({
            ...prevState,
            [key]: value
        }));
    };

    const postData = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        fetch('https://football-teams-rest-api-assignment.onrender.com/api/add', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    };

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
                            value={formData.badgeUrl}
                            onIonChange={(e) => setFormValue('badgeUrl', e.detail.value!)}
                        />
                        <IonInput
                            className='input-item'
                            label='team name'
                            labelPlacement='floating'
                            placeholder='enter text'
                            value={formData.name}
                            onIonChange={(e) => setFormValue('name', e.detail.value!)}
                        />
                        <IonInput
                            className='input-item'
                            label='team nickname'
                            labelPlacement='floating'
                            placeholder='enter text'
                            value={formData.nickname}
                            onIonChange={(e) => setFormValue('nickname', e.detail.value!)}
                        />
                        <IonInput
                            className='input-item'
                            label='founded'
                            labelPlacement='floating'
                            placeholder='enter text'
                            type='number'
                            value={formData.founded}
                            onIonChange={(e) => setFormValue('founded', parseInt(e.detail.value!))}
                        />
                        <IonInput
                            className='input-item'
                            label='ground name'
                            labelPlacement='floating'
                            placeholder='enter text'
                            value={formData.groundName}
                            onIonChange={(e) => setFormValue('groundName', e.detail.value!)}

                        />
                        <IonInput
                            className='input-item'
                            label='ground capacity'
                            labelPlacement='floating'
                            placeholder='enter text'
                            value={formData.groundCapacity}
                            onIonChange={(e) => setFormValue('groundCapacity', parseInt(e.detail.value!))}
                        />
                        <IonInput
                            className='input-item'
                            label='country'
                            labelPlacement='floating'
                            placeholder='enter text'
                            value={formData.country}
                            onIonChange={(e) => setFormValue('country', e.detail.value!)}
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
                        <div className='button-container'><IonButton className='back-button' type='button' routerLink='/Home'>back</IonButton>
                            <IonButton className='edit-button' type='submit' routerLink={teamLink}>add team</IonButton></div>

                    </IonCardContent>
                </IonCard>
            </form>
        </>
    );
}

export default AddTeam;

import React, { useState, useEffect } from 'react';
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
        e.preventDefault();

        fetch(`https://football-teams-rest-api-assignment.onrender.com/api/update/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    };

    const teamLink = id ? `/team/${id}` : '/team/:id';


    return (
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
                            value={formData.badgeUrl}
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
                        <div className='button-container'><IonButton className='back-button' type='button' routerLink='/Teams'>back</IonButton>
                            <IonButton className='edit-button' type='submit' routerLink={teamLink}>apply edits</IonButton></div>

                    </IonCardContent>
                </IonCard>
            </form>
        </>
    );
}

export default EditTeam;


import { useState } from 'react';
import { IonInput, IonButton, IonItem, IonPage, IonCard } from '@ionic/react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import './SignUp.css'

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
     <IonCard className='info-container'>
     
        <form onSubmit={handleSignUp}>
        <h1 style={{ color: 'rgb(255, 102, 0)', textAlign: 'center', marginBottom: '20px' }}>Sign up</h1>
          <div className="mb-3">
            <label>Email address</label>
            <IonInput className='input-item' type="email" placeholder="Enter email" value={email} onIonChange={(e) => setEmail(e.detail.value!)} style={{ borderRadius: '20px', backgroundColor: 'white' }} />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <IonInput className='input-item' type="password" placeholder="Password" value={password} onIonChange={(e) => setPassword(e.detail.value!)} style={{ borderRadius: '20px', backgroundColor: 'white' }} />
          </div>
          <div className="d-flex justify-content-end">
            <IonButton type="submit" expand="block" >
              sign up
            </IonButton>
          </div>
        </form>
      <IonItem lines="full" className="ionitem">
           <IonItem className='ionitem'>Already signed up?</IonItem>
           <IonButton routerLink="/signin">Sign in!</IonButton>
      </IonItem> 
      </IonCard>
  );
};

export default SignUp;

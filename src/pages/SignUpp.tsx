import { useState } from 'react';
import { IonContent, IonInput, IonButton, IonItem } from '@ionic/react';
import Home from './Home';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const SignUp = () => {
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
      <div>
      <h1 className="d-flex justify-content-center">Sign up</h1>
      <div className="d-flex justify-content-center">
        <form onSubmit={handleSignUp} style={{ width: '90%', maxWidth: '25rem', backgroundColor: 'rgb(229, 224, 218)', padding: '20px', borderRadius: '20px', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)' }}>
          <div className="mb-3">
            <label>Email address</label>
            <IonInput type="email" placeholder="Enter email" value={email} onIonChange={(e) => setEmail(e.detail.value!)} style={{ borderRadius: '20px', backgroundColor: 'white' }} />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <IonInput type="password" placeholder="Password" value={password} onIonChange={(e) => setPassword(e.detail.value!)} style={{ borderRadius: '20px', backgroundColor: 'white' }} />
          </div>
          <div className="d-flex justify-content-end">
            <IonButton type="submit" expand="block" >
              sign up
            </IonButton>
          </div>
        </form>
      </div>
      <br />
      <div className="d-flex justify-content-center">
      <IonItem lines="full">
           <IonItem ><h3 color="">Already signed up?</h3></IonItem>
           <IonItem routerLink="/SignIn"><h5>Sign in!</h5></IonItem>
      </IonItem>
      </div>  
      </div>
  );
};

export default SignUp;

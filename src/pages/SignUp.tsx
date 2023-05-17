import { useState } from 'react';
import { IonInput, IonButton, IonItem } from '@ionic/react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import './SignUp.css'

function SignUp() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!email || !password) {
      console.log("Email and password are required.");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
    setEmail("");
    setPassword("");
  };
  return (
      <div className="container d-flex flex-column align-items-center">
        <div className="d-flex justify-content-center">
          <form onSubmit={handleSignUp} className='formStyle'>
            <h2 className="d-flex justify-content-center mb-4">Sign up</h2>
            <div className="mb-3">
              <IonInput type="email" placeholder="Enter email" value={email} onIonChange={(e) => setEmail(e.detail.value!)} className="inputField" />
              <small className="text-muted mx-3">We'll never share your email with anyone.</small>
            </div>
            <div className="mb-3">
              <IonInput type="password" placeholder="Password" value={password} onIonChange={(e) => setPassword(e.detail.value!)} className="inputField" />
              <small className="text-muted mx-3">Make it memorable!</small>
            </div>
            <div className="d-flex justify-content-end">
              <IonButton type="submit" className="inputButton" >
                Sign up
              </IonButton>
            </div>
          </form>
        </div>
        <p className='mt-3'>Already signed up? <a href="/signin">Sign in!</a></p>
      </div>
  );
};

export default SignUp;
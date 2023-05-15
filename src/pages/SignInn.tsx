import { useState } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase";
import './Home.css';
import SignUp from "./SignUpp";
import { IonInput, IonButton, IonContent, IonList, IonItem, IonLabel } from '@ionic/react';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signedIn, setSignedIn] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);

    const signIn = (e: any) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                setSignedIn(true);
            })
            .catch((error) => {
                console.log(error);
            });
        setEmail("");
        setPassword("");
    };

    const handleSignUpClick = () => {
        setShowSignUp(true);
    };

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setSignedIn(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="d-flex flex-column align-items-center" style={{ minHeight: '100vh' }}>
            <div className="d-flex justify-content-center">
                <form onSubmit={signIn} style={{ width: '100%', maxWidth: '75rem', backgroundColor: 'rgb(229, 224, 218)', padding: '20px', borderRadius: '20px', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)' }}>
                    <h1 style={{ color: 'rgb(255, 102, 0)', textAlign: 'center', marginBottom: '20px' }}>Sign in</h1>
                    <div className="mb-3">
                        <label>Email address</label>
                        <IonInput type="email" placeholder="Enter email" value={email} onIonChange={(e) => setEmail(e.detail.value!)} style={{ borderRadius: '20px', backgroundColor: 'white' }} />
                        <small className="text-muted">We'll never share your email with anyone else.</small>
                    </div>

                    <div className="mb-3">
                        <label>Password</label>
                        <IonInput type="password" placeholder="Password" value={password} onIonChange={(e) => setPassword(e.detail.value!)} style={{ borderRadius: '20px', backgroundColor: 'white' }} />
                        <small className="text-muted">If you do not have an account Sign Up!</small>
                    </div>
                    <div className="d-flex justify-content-end">
                      <IonButton type="submit">Sign in</IonButton>
                    </div>

                    {signedIn ? (
                        <div className="d-flex justify-content-between align-items-center">
                            <p>You are signed in.</p>
                          <IonButton onClick={handleSignOut} expand="block">Sign Out</IonButton>
                        </div>
                    ) : (
                        <p>You are not signed in.</p>
                    )}

                </form>
          
            </div>
            {showSignUp && <SignUp />}
            <br />
           <IonItem lines="full">
           <IonItem ><h3 color="">No account?</h3></IonItem>
           <IonItem routerLink="/SignUp"><h5>Sign up!</h5></IonItem>
           </IonItem> 
           
        </div>
    )}
    export default SignIn;

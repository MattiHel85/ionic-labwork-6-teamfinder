import { useState } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase";
import './SignIn.css'
import SignUp from "./SignUp";
import { IonInput, IonButton, IonContent, IonList, IonItem, IonLabel } from '@ionic/react';


interface SignInProps {
    change: (value: boolean) => void;
    signedIn: boolean;
  }

const SignIn: React.FC<SignInProps> = ({ change, signedIn }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showSignUp, setShowSignUp] = useState(false);

    const signIn = (e: any) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                change(true);
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
                change(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="container d-flex flex-column align-items-center" >
            <div className="d-flex justify-content-center">
                <form onSubmit={signIn} className="formStyle">
                    <h2 className="d-flex justify-content-center mb-4">Sign in</h2>
                    <div className="mb-3">
                        <IonInput type="email" placeholder="Enter email" value={email} onIonChange={(e) => setEmail(e.detail.value!)} className="inputField" />
                        <small className="text-muted mx-2">We'll never share your email with anyone else.</small>
                    </div>  
                    <div className="mb-3">
                        <IonInput type="password" placeholder="Password" value={password} onIonChange={(e) => setPassword(e.detail.value!)} className="inputField" />
                        <small className="text-muted mx-2">Make it memorable!</small>
                    </div>
                    <div className="d-flex justify-content-end">
                      <IonButton type="submit" className="inputButton">Sign in</IonButton>
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
            <p className="mt-3">No account? <a href="/signup">Sign up!</a></p>
        </div>
    )}
    export default SignIn;
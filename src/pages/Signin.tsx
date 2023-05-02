import { useState } from "react";
import {signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../firebase";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SignUp from './SignUP';
import AuthDetails from "../AuthDetails";
//import 'bootstrap/dist/css/bootstrap.min.css';

const SignIn=()=>{

    const[email, setEmail]=useState("");
    const [password,setPassword]=useState("");
    const signIn=(e:any)=>{
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password).then((userCredential)=>{
        console.log(userCredential)
    }).catch((error)=>{console.log(error)})

    }
    const [showSignUp, setShowSignUp] = useState(false);

  const handleSignUpClick = () => {
    setShowSignUp(true);
  };

    return(
        <div className="d-flex justify-content-center">
      <Form onSubmit={signIn}
       style={{ width: '25rem', backgroundColor: '#ffd700', padding: '20px', borderRadius: '20px' }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
         <h1>LOG IN</h1>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" 
          value={email} onChange={(e:any)=>setEmail(e.target.value)}
          style={{ borderRadius: '20px 20px 0 0' }} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" 
          value={password}onChange={(e:any)=>setPassword(e.target.value)}
          style={{ borderRadius: '0 0 20px 20px' }} />
          <Form.Text className="text-muted">
            If you do not have an account Sign Up!
          </Form.Text>
        </Form.Group>

        <div className="d-flex justify-content-between align-items-center">
          <Button variant="primary" type="submit" style={{ width: 'calc(50% - 10px)', borderRadius: '20px' }}>
            Log In
          </Button>
          <Button onClick={handleSignUpClick} style={{ width: 'calc(50% - 10px)', borderRadius: '20px' }}>Sign Up</Button>
        </div>

        {showSignUp && <SignUp />}
        <AuthDetails/>
      </Form>
    </div>)}
    export default SignIn;
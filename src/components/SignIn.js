import React from 'react';
import firebase from 'firebase';
import {Button} from '@material-ui/core';
import {auth} from '../firebase.js';


function SignIn() {
  function signInWithGoogle(){
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    return (
    <div>
        {/* <Button >Sign In with Google</Button> */}
          <Button onClick={signInWithGoogle}>Sign In with Google</Button>
    </div>
  )
}

export default SignIn
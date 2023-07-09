import { getAuth, signOut, GithubAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import app from './Firebase/firebase.init';
import { GoogleAuthProvider } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
const auth = getAuth(app)
function App () {
  const [user , setUser] = useState({})
  const provider = new GoogleAuthProvider()
  const providerTwo = new GithubAuthProvider()
  const facebookProvider = new FacebookAuthProvider()
  const handleLogin = () => {
    signInWithPopup(auth, provider)
    .then( result => {
        const user = result.user
        setUser(user)
    })
    .catch(error => {
      console.error(error);
    })
  };
  const handleGithub = () => {
    signInWithPopup(auth, providerTwo)
    .then(result => {
      const user = result.user
      setUser(user)
      console.log(user)
    })
    .catch(error => {
      console.error(error);
    })
  }
  const handleFacebook = () => {
    signInWithPopup(auth, facebookProvider)
    .then(result => {
      const user = result.user
      console.log(user)
      setUser(user)
    })
    .catch(error => {
      console.error(error);
    })
  }
  const handleSignOut = () => {
    signOut(auth)
    .then( () =>{
      setUser({})
    })
    .catch( () => { 
      setUser({})
    })
  };
  return(
    <div>
     { user.displayName ?
     <button onClick={handleSignOut}>SignOut</button>
     :
     <>
     <button onClick={handleLogin}>Google</button>
     <button onClick={handleGithub}>Github</button>
     <button onClick={handleFacebook}>Facebook</button>
     </>
      }
      
     
     { user.displayName &&
      <div>
      <h1>Name: {user.displayName}</h1>
      <img src={user.photoURL} alt="" />
      </div>
    }
    </div>
  )
}

export default App
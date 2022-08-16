import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setUser } from '../store/slices/userSlice';

function useRegistrationWithGoogle() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const provider = new GoogleAuthProvider();

  const auth = getAuth();

  return function() {
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      dispatch(setUser({
        userName: user.displayName,
        email: user.email,
        token: user.accessToken,
        id: user.uid,
        userPhotoUrl: user.photoURL,
        provider: 'google',
      }));
      navigate('/account');
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    })
  }
};

export default useRegistrationWithGoogle;
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setUser } from '../store/slices/userSlice';

function useRegistrationWithFacebook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const provider = new FacebookAuthProvider();

  const auth = getAuth();

  return function() {
    signInWithPopup(auth, provider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
      dispatch(setUser({
        userName: user.displayName,
        email: user.email,
        token: user.accessToken,
        id: user.uid,
        userPhotoUrl: user.photoURL,
      }));
      navigate('/account');

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;

      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      if (errorCode === 'auth/account-exists-with-different-credential') {
        alert('Ошибка. Учетная запись уже существует с другими учетными данными.')
      }
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);

      // ...
    })
  }
};

export default useRegistrationWithFacebook;
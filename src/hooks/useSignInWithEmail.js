import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setUser } from '../store/slices/userSlice';

function useSignInWithEmail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return function(data) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(({user}) => {
        dispatch(setUser({
          userName: user.displayName,
          email: user.email,
          token: user.accessToken,
          id: user.uid,
          userPhotoUrl: user.photoURL,
          provider: 'email',
        }));
        navigate('/account');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/user-not-found') {
          alert('Ошибка. Пользователь с таким email адресом не зарегистрирован.')
        } else if (errorCode === 'auth/wrong-password') {
          alert('Ошибка. Пароль введен неверно.')
        }
      });
  }
};

export default useSignInWithEmail;
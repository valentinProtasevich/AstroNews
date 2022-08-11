import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setUser } from '../store/slices/userSlice';

function useRegistrationWithEmail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return function(data) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(({user}) => {
        dispatch(setUser({
          userName: data.fullName,
          email: user.email,
          token: user.accessToken,
          id: user.uid,
        }));
        navigate('/account');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        if (errorCode === 'auth/email-already-in-use') {
          alert('Ошибка. Пользователь с таким email адресом уже зарегестрирован.');
        };
      });
  }
};

export default useRegistrationWithEmail;
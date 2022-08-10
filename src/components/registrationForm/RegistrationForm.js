import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup  } from "firebase/auth";

import { setUser } from '../../store/slices/userSlice';

import './registrationForm.scss';

import googleIcon from '../../resources/img/google.svg';
import facebookIcon from '../../resources/img/facebook.svg';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = data => {
    if (data.password === data.repeatPassword) {
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
    } else {
      alert('Пароли не совпадают.');
    }
  };

  const registrationWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    const auth = getAuth();
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
        }));
        navigate('/account');
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  
  return (
    <div className='registration__grid'>
      <h1>Регистрация</h1>
      <form className='registration__form' onSubmit={handleSubmit(onSubmit)}>
        <label>Имя</label>
        <input className='registration__input'
          {...register("fullName", { 
            pattern:  /^[A-ZА-Я][а-яА-ЯёЁa-zA-Z]+$/
          })} 
          required
          placeholder='Введите имя'
          />
        {errors?.fullName?.type === "pattern" && <p className='errorMessage registration__form_errorName'>Имя должно содержать только буквы без пробелов, первая буква должна быть заглавной.</p>}

        <label>Email</label>
        <input className='registration__input'
          {...register("email", {
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
          })} 
          required
          placeholder='Введите Email'
          />
        {errors?.email?.type === "pattern" && <p className='errorMessage registration__form_errorEmail'>Пожалуйста, введите корректный адрес электронной почты.</p>}

        <label>Пароль</label>
        <input className='registration__input' type={"password"}
          {...register("password", {
            minLength: 8,
            pattern: /^(?=.*[A-ZА-Я].)(?=.*[!@#$&*])(?=.*[0-9].)(?=.*[a-zа-я].).{8,}$/
          })} 
          required
          placeholder='Введите пароль'
          />
        {errors?.password?.type === "minLength" && <p className='errorMessage registration__form_errorPassword'>Минимум 8 символов.</p>}
        {errors?.password?.type === "pattern" && <p className='errorMessage registration__form_errorPassword'>Пароль должен включать в себя минимум 1 цифру, минимум 1 прописную букву, минимум 1 строчную букву и 1 спец. символ.</p>}

        <label>Повтор пароля</label>
        <input className='registration__input' type={"password"}
          {...register("repeatPassword", {
            minLength: 8,
            pattern: /^(?=.*[A-ZА-Я].)(?=.*[!@#$&*])(?=.*[0-9].)(?=.*[a-zа-я].).{8,}$/
          })} 
          required
          placeholder='Повторите пароль'
          />
        {errors?.repeatPassword?.type === "minLength" && <p className='errorMessage registration__form_errorRepeatPassword'>Минимум 8 символов.</p>}
        {errors?.repeatPassword?.type === "pattern" && <p className='errorMessage registration__form_errorRepeatPassword'>Пароль должен включать в себя минимум 1 цифру, минимум 1 прописную букву, минимум 1 строчную букву и 1 спец. символ.</p>}

        <input className='registration__input registration__submitBtn' type="submit" value={'Зарегистрироваться'}/>
      </form>
      <p>Уже есть аккаунт?</p>
      <Link to='/login'>Войти</Link>
      <p>Или зарегистрироваться с помощью</p>
      <div className='registration__buttonContainer'>
        <button className='button' onClick={registrationWithGoogle}>
          <img src={googleIcon} alt="Google icon" />
          Google
        </button>
        <button className='button'>
          <img src={facebookIcon} alt="Facebook icon" />
          Facebook
        </button>
      </div>
    </div>
  )
}

export default RegistrationForm;
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { setUser } from '../../store/slices/userSlice';

import './registrationForm.scss';

import googleIcon from '../../resources/img/google.svg';
import facebookIcon from '../../resources/img/facebook.svg';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const {push} = useHistory();

  const { register, formState: { errors }, handleSubmit } = useForm();
  // const onSubmit = data => console.log(data.email, data.password);
  const onSubmit = data => {
    if (data.password === data.repeatPassword) {
      console.log(data.password, data.email)
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, data.email, data.password)
        .then(({user}) => {
          console.log(user);
          dispatch(setUser({
            userName: data.fullName,
            email: user.email,
            token: user.accessToken,
            id: user.uid,
          }));
          push('/account');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === 'auth/email-already-in-use') {
            alert('Ошибка. Пользователь с таким email адресом уже зарегестрирован.');
          };
        });
    } else {
      alert('Пароли не совпадают.');
    }
  };
  
  return (
    <div className='registration__grid'>
      <h1>Регистрация</h1>
      <form className='registration__form' onSubmit={handleSubmit(onSubmit)}>
        <label>Имя</label>
        <input className='registration__input'
          {...register("fullName", { 
            // required: true,
            pattern:  /^[A-ZА-Я][а-яА-ЯёЁa-zA-Z]+$/
          })} 
          required
          placeholder='Введите имя'
          />
        {/* {errors?.fullName?.type === "required" && <p className='errorMessage'>Пожалуйста, заполните это поле.</p>} */}
        {errors?.fullName?.type === "pattern" && <p className='errorMessage registration__form_errorName'>Имя должно содержать только буквы без пробелов, первая буква должна быть заглавной.</p>}

        <label>Email</label>
        <input className='registration__input'
          {...register("email", {
            // required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
          })} 
          required
          placeholder='Введите Email'
          />
        {/* {errors?.email?.type === "required" && <p className='errorMessage'>Пожалуйста, заполните это поле.</p>} */}
        {errors?.email?.type === "pattern" && <p className='errorMessage registration__form_errorEmail'>Пожалуйста, введите корректный адрес электронной почты.</p>}

        <label>Пароль</label>
        <input className='registration__input' type={"password"}
          {...register("password", {
            // required: true,
            minLength: 8,
            pattern: /^(?=.*[A-ZА-Я].)(?=.*[!@#$&*])(?=.*[0-9].)(?=.*[a-zа-я].).{8,}$/
          })} 
          required
          placeholder='Введите пароль'
          />
        {/* {errors?.password?.type === "required" && <p className='errorMessage'>Пожалуйста, заполните это поле.</p>} */}
        {errors?.password?.type === "minLength" && <p className='errorMessage registration__form_errorPassword'>Минимум 8 символов.</p>}
        {errors?.password?.type === "pattern" && <p className='errorMessage registration__form_errorPassword'>Пароль должен включать в себя минимум 1 цифру, минимум 1 прописную букву, минимум 1 строчную букву и 1 спец. символ.</p>}

        <label>Повтор пароля</label>
        <input className='registration__input' type={"password"}
          {...register("repeatPassword", {
            // required: true,
            minLength: 8,
            pattern: /^(?=.*[A-ZА-Я].)(?=.*[!@#$&*])(?=.*[0-9].)(?=.*[a-zа-я].).{8,}$/
          })} 
          required
          placeholder='Повторите пароль'
          />
        {/* {errors?.repeatPassword?.type === "required" && <p className='errorMessage'>Пожалуйста, заполните это поле.</p>} */}
        {errors?.repeatPassword?.type === "minLength" && <p className='errorMessage registration__form_errorRepeatPassword'>Минимум 8 символов.</p>}
        {errors?.repeatPassword?.type === "pattern" && <p className='errorMessage registration__form_errorRepeatPassword'>Пароль должен включать в себя минимум 1 цифру, минимум 1 прописную букву, минимум 1 строчную букву и 1 спец. символ.</p>}

        <input className='registration__input registration__submitBtn' type="submit" value={'Зарегистрироваться'}/>
      </form>
      <p>Уже есть аккаунт?</p>
      <Link exact to='/login'>Войти</Link>
      <p>Или зарегистрироваться с помощью</p>
      <div className='registration__buttonContainer'>
        <button className='button'>
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
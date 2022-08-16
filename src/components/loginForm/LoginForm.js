import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import useSignInWithEmail from '../../hooks/useSignInWithEmail';
import useRegistrationWithGoogle from '../../hooks/useRegistrationWithGoogle';
import useRegistrationWithFacebook from '../../hooks/useRegistrationWithFacebook';

import './loginForm.scss';

import googleIcon from '../../resources/img/google.svg';
import facebookIcon from '../../resources/img/facebook.svg';

const LoginForm = () => {
  const signInWithEmail = useSignInWithEmail();
  const registrationWithGoogle = useRegistrationWithGoogle();
  const registrationWithFacebook = useRegistrationWithFacebook();

  const { register, formState: { errors, isValid }, handleSubmit } = useForm({
    mode: 'onBlur'
  });
  const onSubmit = data => signInWithEmail(data);

  return (
    <div className='login__grid'>
      <h1>Вход</h1>
      <form className='login__form' onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input className='login__input'
          {...register("email", {
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
          })} 
          required
          />
        {errors?.email?.type === "pattern" && <p className='errorMessage login__form_errorEmail'>Пожалуйста, введите корректный адрес электронной почты.</p>}

        <label>Пароль</label>
        <input className='login__input' type={"password"}
          {...register("password")} 
          required
          />

        <input className='login__input login__submitBtn' type="submit" value={'Войти'} disabled={!isValid}/>
      </form>
      <Link to='/registration'>Вы еще не зарегистрированы?</Link>
      <p>Или войти с помощью</p>
      <div className='login__buttonContainer'>
        <button className='button' onClick={registrationWithGoogle}>
          <img src={googleIcon} alt="Google icon" />
          Google
        </button>
        <button className='button' onClick={registrationWithFacebook}>
          <img src={facebookIcon} alt="Facebook icon" />
          Facebook
        </button>
      </div>
    </div>
  )
};

export default LoginForm;
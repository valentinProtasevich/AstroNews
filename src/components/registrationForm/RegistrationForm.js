import { useForm } from 'react-hook-form';

import './registrationForm.scss';

const RegistrationForm = () => {
  const { register, watch, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Имя</label>
      <input 
        {...register("fullName", { 
          required: true,
          pattern:  /^[A-ZА-Я][а-яА-ЯёЁa-zA-Z]+$/
        })} />
      {errors?.fullName?.type === "required" && <p>Пожалуйста, заполните это поле.</p>}
      {errors?.fullName?.type === "pattern" && <p>Имя должно содержать только буквы без пробелов, первая буква должна быть заглавной.</p>}

      <label>Email</label>
      <input 
        {...register("email", {
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
        })} />
      {errors?.email?.type === "required" && <p>Пожалуйста, заполните это поле.</p>}
      {errors?.email?.type === "pattern" && <p>Пожалуйста, введите корректный адрес электронной почты.</p>}

      <label>Пароль</label>
      <input type={"password"}
        {...register("password", {
          required: true,
          minLength: 8,
          pattern: /^(?=.*[A-ZА-Я].)(?=.*[!@#$&*])(?=.*[0-9].)(?=.*[a-zа-я].).{8,}$/
        })} />
      {errors?.password?.type === "required" && <p>Пожалуйста, заполните это поле.</p>}
      {errors?.password?.type === "minLength" && <p>Минимум 8 символов.</p>}
      {errors?.password?.type === "pattern" && <p>Пароль должен включать в себя минимум 1 цифру, минимум 1 прописную букву, минимум 1 строчную букву и 1 спец. символ.</p>}

      <label>Повтор пароля</label>
      <input type={"password"}
        {...register("repeatPassword", {
          required: true,
          minLength: 8,
          pattern: /^(?=.*[A-ZА-Я].)(?=.*[!@#$&*])(?=.*[0-9].)(?=.*[a-zа-я].).{8,}$/
        })} />
      {errors?.repeatPassword?.type === "required" && <p>Пожалуйста, заполните это поле.</p>}
      {errors?.repeatPassword?.type === "minLength" && <p>Минимум 8 символов.</p>}
      {errors?.repeatPassword?.type === "pattern" && <p>Пароль должен включать в себя минимум 1 цифру, минимум 1 прописную букву, минимум 1 строчную букву и 1 спец. символ.</p>}

      <input type="submit" value={'Зарегистрироваться'}/>
    </form>
  )
}

export default RegistrationForm;
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { removeUser } from '../../store/slices/userSlice';

import './account.scss';

const Account = () => {
  const dispatch = useDispatch();

  const {user} = useSelector(state => state);

  console.log(user)

  return (
    <div className="account__grid">
      <h1>Личный кабинет</h1>
      <img width="100rem" height='100rem' className='account__image' src={user.userPhotoUrl} alt="Account avatar" />
      <p className="account__label">Имя</p>
      <p className="account__data">{user.userName}</p>
      <p className="account__label">Email</p>
      <p className="account__data">{user.email}</p>
      <Link onClick={() => dispatch(removeUser())} to='/login'>Выйти</Link>
    </div>
  )
}

export default Account;
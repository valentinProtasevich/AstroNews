import { useState, useEffect } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { removeUser } from '../../store/slices/userSlice';
import { storage } from '../../firebase';
import { setUser } from "../../store/slices/userSlice";

import './account.scss';

const Account = () => {
  const auth = getAuth();
  const dispatch = useDispatch();
  const {user} = useSelector(state => state);
  const [imageUpload, setImageUpload] = useState(null); 
  
  useEffect(() => {
    if (user.provider !== 'email') {
      document.querySelector('.account__uploadImage_imput').classList.add('hidden');
      document.querySelector('.account__uploadImage_button').classList.add('hidden');
    }
  });
    
  const uploadImage = () => {
    if (imageUpload == null) alert('Выберите фото.');
    const imageRef = ref(storage, `images/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      getUrl();
    });
  };

  const getUrl = () => {
    getDownloadURL(ref(storage, `images/${imageUpload.name}`))
    .then((url) => {
      uploadProfileImag(url);
    })
  };

  const uploadProfileImag = (url) => {
    updateProfile(auth.currentUser, {
      photoURL: url
    }).then((res) => {
      dispatch(setUser({
        userName: auth.currentUser.displayName,
        email: auth.currentUser.email,
        token: auth.currentUser.accessToken,
        id: auth.currentUser.uid,
        userPhotoUrl: auth.currentUser.photoURL,
        provider: 'email',
      }));
    }).catch((error) => {
      alert('Ошибка загрузки фото.');
    });
  }
  
  return (
    <div className="account__grid">
      <h1>Личный кабинет</h1>
      <div className="account__imageContainer">
        <img width="100rem" height='100rem' className='account__image' src={user.userPhotoUrl} alt="Account avatar" />
        <input 
          className="account__uploadImage_imput"
          type="file"
          onChange={(event) => {
            setImageUpload(event.target.files[0]);
          }}/>
        <button className="account__uploadImage_button" onClick={uploadImage}>Изменить фото</button>
      </div>
      <p className="account__label">Имя</p>
      <p className="account__data">{user.userName}</p>
      <p className="account__label">Email</p>
      <p className="account__data">{user.email}</p>
      <Link onClick={() => dispatch(removeUser())} to='/login'>Выйти</Link>
    </div>
  )
}

export default Account;
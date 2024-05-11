import {React, useState} from 'react';
import AuthIcons from './AuthIcons';
import '../../../css/AccountPage/auth.css'
import hideEye from '../../../media/hideEye.svg'
import openEye from '../../../media/openEye.svg'

const Auth = () => {
  const [isClose, setIsClose] = useState(true)

  document.title = 'Войти в аккаунт'

  return (
    <form className='formAuth'>
        <h1 className='h1Auth'>Вход</h1>
        <AuthIcons/>
        <div className='inputAuth'>
          <input placeholder='Телефон или почта' type='text' className='login'></input>
          <div className='passContainer'>
            <input placeholder='Пароль' type={isClose ? 'password' : 'text'} className='password'></input>
            <img src={isClose ? hideEye : openEye} onClick={() => setIsClose(!isClose)}
            alt='глазик' className='eyePsw'/>
          </div>
        </div>
        <div className='btnsAuth'>
          <button className='authBtn'>Войти</button>
          <button className='regBtn'>Зарегистрироваться</button>
          <button className='restoreAccessBtn'>Восстановить доступ</button>
        </div>
    </form>
  );
}

export default Auth
import React from 'react';
import '../../../css/HelpPage/support.css'

const Support = () => {
  return (
    <div className='contacts'>
      <h1>Служба поддержки</h1>
      <div className='mskPhone'>
        <a href='tel: +74957907277'>+7 495 790 72 77</a>
        <p>Санкт-Петербург</p>
      </div>
      <div className='rfPhone'>
        <a href='tel: 88002007277'>8 800 200‑72‑77</a>
        <p>Россия</p>
      </div>
      <div className='theme'>
        <p>Тема обращения</p>
        <input></input>
      </div>
      <div className='phoneMail'>
        <p>Телефон или email</p>
        <input></input>
      </div>
      <div className='question'>
        <p>Ваш вопрос</p>
        <textarea></textarea>
      </div>
      <button className='sumbitBtn'>Отправить</button>
    </div>
  );
}

export default Support
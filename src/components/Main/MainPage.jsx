import React from 'react';
import cl from './main.module.scss';
import '../../index.scss';

export const MainPage = () => {
  return (
    <div className='container'>
      <div className={cl.wrapper}>
        <h1>Contact us</h1>
        <p>The Voodoo team is looking forward to hearing from you!</p>
      </div>
    </div>
  )
}

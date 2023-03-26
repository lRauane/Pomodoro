import React from 'react';

const ButtonsPomodoro = (props) => {
  return (
    <button className='bg-red-400 ml-4 text-white border-none p-3 border rounded-md cursor-pointer hover:bg-red-500' onClick={props.click}>{props.title}</button>
  );
}

export default ButtonsPomodoro;

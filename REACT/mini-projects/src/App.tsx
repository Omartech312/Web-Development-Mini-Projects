import { useState } from 'react'
import './colorPicker.css'

export function Page(){
  const [color, setColor] = useState("skyblue");

  const background = document.body;

  function changeBack(element: any){
    setColor(element.target.value);
    if(background){
      background.style.backgroundColor = color;
    }
    console.log(color);
  }

  return(
    <div id='back' className='background'>
      <h2>Select your Favorite Color</h2>
      <input type='color' onChange={changeBack} />
    </div>
  );
}
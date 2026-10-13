import { useState } from 'react'
import './colorPicker.css'

export function Page(){
  const [color, setColor] = useState("#ffffff");

  const background = document.body;
  const currentColor = document.getElementById("colorText"); 

  function changeBack(element: any){
    setColor(element.target.value);
    if(background && currentColor){
      background.style.backgroundColor = color;
      currentColor.style.color = color;
    }
    console.log(color);
  }

  return(
    <div id='back' className='background'>
      <h2>Select your Favorite Color</h2>
      <p className='current'>Current Color: <span id='colorText'>{color}</span></p>
      <input type='color' onChange={changeBack} />
    </div>
  );
}
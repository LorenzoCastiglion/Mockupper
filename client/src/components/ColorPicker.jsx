import React from 'react';
import {SketchPicker} from 'react-color';
import { useSnapshot } from 'valtio';
import state from '../store';


const ColorPicker = () => {
const snap = useSnapshot(state);

  return (
    <div className='absolute left-full ml-3'>

      <SketchPicker 
      color={snap.color}
      disableAlpha
      // aggiungere colori preimpostati come opzioni da usare sotto il color picker
      presetColors={['#fed9b7', '#bb3e03', '#0081a7', '#2a9d8f', '#000000', '#f2e9e4']}
      onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}


export default ColorPicker
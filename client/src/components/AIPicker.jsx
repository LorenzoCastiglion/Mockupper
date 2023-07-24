import React from 'react';
import CustomButton from './CustomButton';


export const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className='aipicker-container'>
      <textarea
        className='ai-picker-textarea'
        placeholder='Chiedi a DALL.E...'
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <div className='flex flex-wrap gap-3'>
        {generatingImg ? (
          <CustomButton
            type="outline"
            title="sto creando..."
            customStyle="text-xs"
          />) : (
          <>
            <CustomButton
              type='outline'
              title="Logo"
              handleClick={() => handleSubmit('logo')}
              customStyle="text-xs"
            />
            <CustomButton
              type='filled'
              title="Texture"
              handleClick={() => handleSubmit('full')}
              customStyle="text-xs"
            />
          </>
        )
        }

      </div>
    </div>
  )
}

export default AIPicker
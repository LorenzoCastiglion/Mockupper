import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../store';
import { CustomButton } from '../components';

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,

} from '../config/motion';

const Home = () => {
  const snap = useSnapshot(state);

  const handleCLick = () => {

    state.intro
  }


  return (
    <AnimatePresence>

      {snap.intro && (

        <motion.div className='home' {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')} className='flex  '>

            <img src="./logo.svg" alt="logo" className='w-12 h-12 object-contain' />
            <p className='self-center '>&nbsp; .lrnz</p>

          </motion.header>

          <motion.div className='home-content' {...headContentAnimation}>

            <motion.div {...headContainerAnimation}>

              <h1 className='head-text'>MOCK <br className='xl:block hidden' /> UP IT!</h1>

            </motion.div>

            <motion.div {...headContainerAnimation} className='flex flex-col gap-5'>

              <p className='max-w-md font-medium uppercase text-gray-600 text-lg' >Crea un mockup personalizzato della tua T-shirt con il nostro tool 3-D. <br></br> <strong>Sfoga la tua fantasia</strong> {''} e mostra il tuo stile. </p>

              <CustomButton
                type="outline"
                title="Personalizza"
                handleClick={() => state.intro = false}
                customStyle="w-fit px-4 py-2.5 font-bold text-sm " />

            </motion.div>

          </motion.div>

        </motion.div>

      )}




    </AnimatePresence>
  )
}

export default Home
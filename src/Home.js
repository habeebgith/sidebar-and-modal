import React, {useContext} from 'react'
import {FaBars} from 'react-icons/fa'
import { AppContext, useGlobalContext} from './Context'

const Home = () => {

const {openSidebar,openModal} = useGlobalContext()

  return (
    <div className='home-container'>
    <button className='side-btn' onClick={openSidebar}>
      <FaBars/>
    </button>
    <button className='show-btn' onClick={openModal}>show modal</button>
    </div>
  )
}

export default Home
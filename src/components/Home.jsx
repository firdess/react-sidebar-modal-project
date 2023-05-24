import React from 'react'
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../context/context';


export default function Home() {
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <main>
      <button className='sidebar-toggle' onClick={openSidebar}>
        <FaBars />
      </button>
      <button className='btn' onClick={openModal}>
        Modal
      </button>
    </main>
  )
}

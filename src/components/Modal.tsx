import React from 'react'

import './Modal.css'

interface Props {
  children: React.ReactNode;
  title: string;
}

const Modal = ({children}: Props) => {

  const closeModal = (e: React.MouseEvent):void =>{
    const modal = document.querySelector('.modal')
    modal?.classList.add('hide')
  }

  return (
    <div className='modal hide'>
      <div className='overlay' onClick={closeModal}></div>
      <div className='a'>{children}</div>
    </div>
  )
}

export default Modal
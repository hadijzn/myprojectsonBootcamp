"use client";
import React from 'react'
import { useState } from 'react'
import MyModal from '../componets/MyModal'
export default function Modal() {
  const [isOpen,setIsOpen] = useState(false)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)
  return (
    <div>
        <button onClick={openModal}>Cart</button>
        <MyModal isOpen={isOpen} onRequestClose={closeModal}>
        </MyModal>

      </div> 
    )
}

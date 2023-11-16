import React from 'react'

export const ModalComponent = ({img}) => {
  return (
    <div className="ModalComponent">
      <div className="modal">
        <img src={img} alt="modal" />
      </div>
    </div>
  )
}

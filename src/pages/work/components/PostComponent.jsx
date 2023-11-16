import React from 'react'

export const PostComponent = ({ title, image, desc, role, link }) => {
  return (
    <div className="post">
      <div className="left">
        <h2>{title}</h2>
        <p>{desc}</p>
        <p>My Role: {role}</p>
        {/* link should open in other tab */}
        {link && <a href={link} target='_blank' >Link to Project</a>}
      </div>
      <div className="right">
        <img src={image} alt={title} />
      </div>
    </div>
  )
}

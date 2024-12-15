import React from 'react'
import '../Style/style.css'
export default function UserCard({name,email,jop,img}) {
  return (
    <div className="user-card">
        <img src={img} alt="" />
        <h3 className='user-name'>{name}</h3>
        <p className="user-jop-tag" >{jop}</p>
        <p className="user-email">{email}</p>
    </div>
  )
}

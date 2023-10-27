import React from 'react'

export const Header = (props) => {
  return (
    <div className='header'>
        <h1>LOGO</h1>
        <button className='btn'>Contact</button>
        {props.form && <button className='btn2'>login</button>}
        {!props.form && <button oncl className='btn2'>logout</button>}
    </div>
  )
}

import React, { useEffect, useState } from 'react'

export const Form = (props) => {
    const [email,setEmial] = useState("")
    const [pass,setPass] = useState("")
    const [name,setName] = useState("")
    const [state,setState] = useState(false)

    function emailValue(e){
        setEmial(e.target.value)
    }
    function passValue(e){
        setPass(e.target.value)
    }
    function nameValue(e){
        setName(e.target.value)

    }

    useEffect(()=>{
        if(email.length>5 && pass.length>5 && name.length>5){
            setState(false)
        }else{
            setState(true)
        }
    },[email,pass,name])

    function clickHandler(e){
        e.preventDefault()
        // setState((prev)=>!prev)
        const obj = {
            name:name,
            pass:pass
        }
        props.onCloseForm(obj)
        
    }
  return (
    <div className='form'>
        <label htmlFor="">Email</label>
        <input onChange={emailValue} type="text" />
        <label htmlFor="">Password</label>
        <input onChange={passValue} type="password" />
        <label htmlFor="">Name</label>
        <input onChange = {nameValue} type="text" />
        <button className='form-btn' disabled={state} onClick = {clickHandler}>ADD</button>
    </div>
  )
}

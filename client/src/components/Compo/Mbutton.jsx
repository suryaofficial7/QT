import React from 'react'
import { useNavigate } from 'react-router-dom'

const Mbutton = (props) => {

    const navigate = useNavigate()
    
    const goto = () => {
navigate(props.link)
    }

  return (
    <button className='py-1 hidden md:block px-3 theme-border-green border-2 rounded-lg hover:theme-bg-green transition-all duration-200 ease-in-out' onClick={goto}>{props.title}</button>
  )
}

export default Mbutton
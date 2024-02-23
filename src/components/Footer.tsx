import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footerwrapper'>
    <Link to="/"  className='link'>タスクの追加</Link>
    <Link to="/task" className='link'>実行中のTodo</Link>
    <Link to="/complete" className='link' >完了済みのTodo</Link>
    <Link to="/About" className='link'>このアプリについて</Link>
    </div>
  )
}

export default Footer
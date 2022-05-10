import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { useGlobalContext } from './Context'


const Sidebar = () => {
  const {isSidebarOpen, closeSidebar} = useGlobalContext()
  return (
    <aside className={`${isSidebarOpen?'sidebar show-sidebar':'sidebar'}`}>
      <div className="sidebar-header">
        <img src={logo} alt="coding addict" className='logo'/>
        <button className='close-side-btn' onClick={closeSidebar}><FaTimes/></button>
      </div>
      <ul className='links'>
      {links.map((link)=>{
        const {id,url,text,icon} = link
        return (
          <li key={id} className='link'>
          <a href={url}>
            {icon}
            {text}
          </a>
          </li>

        )
    


      })
    }
      </ul>

      <ul className='social-icon'>
        {social.map((social)=>{
          const {id,url,icon} = social
          return(
            <li key={id} className='icon'>
              <a href={url}>{icon}</a>
            </li>
          )
        })}
      </ul>

    </aside>
  )
}

export default Sidebar
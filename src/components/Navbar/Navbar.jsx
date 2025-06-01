import './Navbar.css'
import logo from '../../assets/logo.png'
import underline from '../../assets/nav_underline.svg'
import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import open_menu from '../../assets/menu_open.svg'
import close_menu from '../../assets/menu_close.svg'

const Navbar = () => {
  const [menu,setMenu] = useState('home')
  const [openMenu,setOpenMenu]= useState(false)

  const toggleMenu = ()=>{
    setOpenMenu(true)
  }
  const hideMenu = ()=>{
    setOpenMenu(false)
  }


  return (
    <div className='navbar_container'>
        <img src={logo} alt="" />
        <div className="open_menu">
        <img src={open_menu} alt="" onClick={toggleMenu}/>
        </div>
        <ul className={openMenu ? 'navlinks' : 'navlinks hide_menu'}>
          <div className="menu">
            <img src={close_menu} alt="" className='close_menu' onClick={hideMenu}/>
          </div>
            <AnchorLink className='anchor' href='#home' offset={50}><li onClick={()=>setMenu('home')}><p>Home</p>{menu === 'home' ? <img src={underline} alt=''/>:<></>}</li></AnchorLink> 
            <AnchorLink className='anchor' href='#about' offset={50}><li onClick={()=>setMenu('about')}><p>About Me</p>{menu === 'about' ? <img src={underline} alt=''/>:<></>}</li></AnchorLink> 
            <AnchorLink className='anchor' href='#project' offset={50}><li onClick={()=>setMenu('project')}><p>Projects</p>{menu === 'project' ? <img src={underline} alt=''/>:<></>}</li></AnchorLink> 
            <AnchorLink className='anchor' href='#contact' offset={50}><li onClick={()=>setMenu('contact')}><p>Contact</p>{menu === 'contact' ? <img src={underline} alt=''/>:<></>}</li></AnchorLink> 
        </ul>
        <AnchorLink className='anchor' href='#contact' offset={50} id='contactus_btn'><button className="contactUs_btn">Connect With Me</button></AnchorLink>
    </div>
  )
}

export default Navbar
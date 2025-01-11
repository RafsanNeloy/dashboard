import React, { useState } from "react"
import "./header.css"
import Head from "../head/Head"
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined"
import InvertColorsOutlinedIcon from "@mui/icons-material/InvertColorsOutlined"
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined"
import SupportOutlinedIcon from "@mui/icons-material/SupportOutlined"
import StyleOutlinedIcon from "@mui/icons-material/StyleOutlined"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import Login from "../login/login"
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined'


const Header = ({ dark, setMode }) => {
  // Toogle Menu
  const [Mobile, setMobile] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogout = () => {
    setIsLoggedIn(false)
    // Add any additional logout logic here
  }

  return (
    <>
      <section className='header'>
        <Head dark={dark} setMode={setMode} />
        <header>
          <div className='container'>
            {/*<ul className='navMenu'>*/}
            <ul className={Mobile ? "navMenu-list" : "link"} onClick={() => setMobile(false)}>
              <li>
                <a href='/' className='navIcon'>
                  <DashboardOutlinedIcon className='navIcon active' />
                  Dashboard
                </a>
              </li>
              <li>
                <InvertColorsOutlinedIcon className='navIcon' />
                <a href='/'>BILLS</a>
              </li>
              <li>
                <GridViewOutlinedIcon className='navIcon' />
                <a href='/'>CUSTOMERS</a>
              </li>
              <li>
                {isLoggedIn ? (
                  <div className="user-menu">
                    <AccountCircleIcon className='navIcon' />
                    <a href='#' onClick={(e) => {
                      e.preventDefault()
                      handleLogout()
                    }}>LOGOUT</a>
                  </div>
                ) : (
                  <>
                    <PersonOutlineOutlinedIcon className='navIcon' />
                    <a href='#' onClick={(e) => {
                      e.preventDefault()
                      setShowLogin(!showLogin)
                    }}>LOG IN</a>
                  </>
                )}
              </li>
              <li>
                <StyleOutlinedIcon className='navIcon' />
                <a href='/'>PRODUCTS</a>
              </li>
              <li>
                <StyleOutlinedIcon className='navIcon' />
                <a href='/'>MAKE BILL</a>
              </li>
            </ul>
            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </header>
        {showLogin && <Login />}
      </section>
    </>
  )
}

export default Header

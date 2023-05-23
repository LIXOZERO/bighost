import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs'
import { HiLockClosed } from 'react-icons/hi'
import { IoChatbubblesSharp } from 'react-icons/io5'
import { VscListFilter } from 'react-icons/vsc'
import { AiOutlineClose } from 'react-icons/ai'

import styles from './style.module.css'

const Header = () => {
  const [scrollValue, setScrollValue] = useState(0)
  const [screenWidth, setScreenWidth] = useState(1600)
  const [mobileHamburger, setMobileHambuler] = useState(false)

  useEffect(() => {
    function handleSize() {
      let screenWidth = window.screen.width
      setScreenWidth(screenWidth)
    }
    function handleScroll() {
      let listenScroll = window.scrollY

      setScrollValue(listenScroll)
    }
    addEventListener('scroll', handleScroll)
    addEventListener('resize', handleSize)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleSize)
    }
  }, [])

  return (
    <header className={styles.header}>
      <div className={styles.login_header}>
        <div className={styles.login_header_left_container}>
          <span>
            {' '}
            <BsFillTelephoneFill size={15} color="#575757" />
            24x7 Technical Support +25884XXXXX{' '}
          </span>
          <span>
            <IoChatbubblesSharp size={15} color="#575757" />
            Live Chat{' '}
          </span>
        </div>
        <div className={styles.login_header_right_container}>
          <Link className={styles.login_header_links} href={'#'}>
            <BsFillPersonFill size={15} color="#575757" />
            Login
          </Link>
          <Link className={styles.login_header_links} href={'#'}>
            <HiLockClosed size={15} color="#575757" />
            Register
          </Link>
        </div>
      </div>
      <nav
        className={
          screenWidth <= 768
            ? styles.nav_fixed
            : scrollValue >= 100
            ? styles.nav_fixed
            : styles.nav
        }
      >
        <div className={styles.logo_container}>
          <h1>Logo</h1>
        </div>
        <div className={styles.list_container}>
          <ul className={styles.list}>
            <Link href={'#'}>Home</Link>
            <Link href={'#'}>Page</Link>
            <Link href={'#'}>Hosting</Link>
            <Link href={'#'}>Elements</Link>
          </ul>
          <button className={styles.list_container_button}>
            Get started
          </button>
        </div>

        {mobileHamburger && (
          <div className={styles.list_container_mobile}>
            <ul className={styles.list}>
              <Link href={'#'}>Home</Link>
              <Link href={'#'}>Page</Link>
              <Link href={'#'}>Hosting</Link>
              <Link href={'#'}>Elements</Link>
            </ul>
            <button className={styles.list_container_button}>
              Get started
            </button>
          </div>
        )}

        <div className={styles.mobile_hamburger_button}>
          {!mobileHamburger ? (
            <VscListFilter
              onClick={() => setMobileHambuler(!mobileHamburger)}
              size={25}
              color="#000"
            />
          ) : (
            <AiOutlineClose
              onClick={() => setMobileHambuler(!mobileHamburger)}
              size={25}
              color="#000"
            />
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header

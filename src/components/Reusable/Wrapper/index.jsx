import React from 'react'
import styles from './style.module.css'
const Wrapper = ({ children, flexdirection, width }) => {
  return (
    <div
      style={{ flexDirection: flexdirection, width: width }}
      className={styles.container}
    >
      {children}
    </div>
  )
}

export default Wrapper

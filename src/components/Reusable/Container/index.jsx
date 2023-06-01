import React from 'react'
import styles from './style.module.css'
const Container = ( {
  children,
  backgroundcolor,
  justifycontent,
  alignitems,
  height,
  backgroundimage
} ) =>
{
  return (
    <div
      style={
        backgroundimage
          ? {
            backgroundImage: backgroundimage,
            justifyContent: justifycontent,
            alignItems: alignitems,
            height
          }
          : {
            backgroundColor: backgroundcolor,
            justifyContent: justifycontent,
            alignItems: alignitems,
            height
          }
      }
      className={ styles.container }
    >
      { children }
    </div>
  )
}

export default Container

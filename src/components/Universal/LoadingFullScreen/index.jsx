import React from 'react'
import styles from './style.module.css'
import Lottie from 'lottie-react'
import Loading from './assets/loading.json'

const LoadingFullScreen = () => {
  return (
    <div className={styles.container}>
      <Lottie
        className={styles.lottie_image}
        animationData={Loading}
      />
    </div>
  )
}

export default LoadingFullScreen

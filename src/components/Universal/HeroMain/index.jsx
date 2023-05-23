import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'

import Container from '@/components/Reusable/Container'
import Wrapper from '@/components/Reusable/Wrapper'
import SearchDomain from '../SearchDomain'

import styles from './style.module.css'
import Lottie from 'lottie-react'
import Host from './assets/host.json'

import Com from './assets/com.png'
import Net from './assets/net.png'
import Online from './assets/online.png'
import Store from './assets/store.png'
import Org from './assets/org.png'
import MyContext from '@/context/MyContext'

const Domains = [
  {
    image: Com,
    price: '165 MT'
  },
  {
    image: Net,
    price: '165 MT'
  },
  {
    image: Online,
    price: '165 MT'
  },
  {
    image: Store,
    price: '165 MT'
  },
  {
    image: Org,
    price: '165 MT'
  }
]

const HeroMain = () => {
  const [screenWidth, setScreenWidth] = useState(null)

  const { setLoadingFullScreen } = useContext(MyContext)

  useEffect(() => {
    setLoadingFullScreen(true)
    setScreenWidth(window.screen.width)
    setLoadingFullScreen(false)
    function handleSize() {
      let screen = window.screen.width
      console.log(screen)
      setScreenWidth(screen)
    }

    addEventListener('resize', handleSize)

    return () => {
      window.removeEventListener('resize', handleSize)
    }
  }, [])

  return (
    <Container
      alignitems={'center'}
      justifycontent={'center'}
      backgroundimage={
        'linear-gradient(to right, #061d7b, #0b2284, #0f268d, #132b96, #16309f)'
      }
    >
      <Wrapper
        width={screenWidth <= 768 ? '95%' : '75%'}
        flexdirection={screenWidth <= 768 ? 'column' : 'row'}
      >
        <div className={styles.left_container}>
          <h1>
            Bighost Best Hosting
            <br />
            Provider in World
          </h1>
          <p>
            Se o seu site WordPress é o seu negócio pessoal, <br />
            queremos que você tenha sucesso. Criamos nossa plataforma
            <br />
            de provedor de serviços de hospedagem e domínio bighost.
          </p>
          <SearchDomain
            buttoncolor={'#016CE3'}
            placeholder={'exemplo.com'}
          />
          <div className={styles.domains_examples}>
            {Domains.map((item, index) => (
              <div
                key={index}
                className={styles.domains_examples_images}
              >
                <div className={styles.domain_image_container}>
                  <Image
                    alt="background image"
                    className={styles.domain_image}
                    src={item.image}
                  />
                </div>

                <p>{item.price}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.right_container}>
          <Lottie
            className={styles.lottie_image}
            animationData={Host}
          />
        </div>
      </Wrapper>
    </Container>
  )
}

export default HeroMain

import Header from '@/components/Universal/Header'
import HeroMain from '@/components/Universal/HeroMain'

import { useContext } from 'react'
import MyContext from '@/context/MyContext'
import LoadingFullScreen from '@/components/Universal/LoadingFullScreen'

export default function Home ()
{
  const { loadingFullScreen } = useContext( MyContext )
  return (
    <>
      { loadingFullScreen ? (
        <LoadingFullScreen />
      ) : (
        <>
          <Header />
          <HeroMain />

        </>
      ) }
    </>
  )
}

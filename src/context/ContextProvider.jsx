import { useState } from 'react'
import MyContext from './MyContext'

const ContextProvider = ({ children }) => {
  const [loadingFullScreen, setLoadingFullScreen] = useState(false)

  return (
    <MyContext.Provider
      value={{ setLoadingFullScreen, loadingFullScreen }}
    >
      {children}
    </MyContext.Provider>
  )
}

export default ContextProvider

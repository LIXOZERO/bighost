import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

import styles from './style.module.css'

const SearchDomain = ({ placeholder, buttoncolor }) => {
  return (
    <div className={styles.input_container}>
      <input
        placeholder={
          placeholder
            ? placeholder
            : 'Passe a propriedade placeholder'
        }
      />
      <button style={{ backgroundColor: buttoncolor }}>
        <AiOutlineSearch size={20} color="white" />
        Procurar
      </button>
    </div>
  )
}

export default SearchDomain

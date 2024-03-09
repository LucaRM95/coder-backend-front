import React from 'react'
import Navbar from '../components/navbar/Navbar'
import styles from '../assets/components/template/index.module.scss'

interface Props {
  children: React.ReactNode
}

const Template = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.container__childs}>
        {children}
      </div>
    </div>
  )
}

export default Template
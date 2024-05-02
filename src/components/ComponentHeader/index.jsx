import React from 'react'
import styles from './ComponentHeader.module.scss'

const ComponentHeader = ({headerText=""}) => {
  return (
    <div className={styles.headerContainer}>{headerText}</div>
  )
}

export default ComponentHeader
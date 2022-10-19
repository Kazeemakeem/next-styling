import React from 'react'
// import styles from '../styles/Contact.module.css'
import styles from '../styles/About.module.scss'

const AboutPage = () => {
  return (
    <>
      <h1>This is the about page</h1>
      <button className={styles.highlightscss}>Go home</button>
      <button className='btn btn-success'>Success</button>
    </>
  )
}

export default AboutPage

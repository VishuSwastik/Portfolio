import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './App.module.css'
import Header from './components/header'
import Typewriter from './components/Name_sec'
import Introduction from './components/intro_sec'
import ProjectSection from './components/ProjectSection'


const App =() => {
  

  return (
   <div className={styles.app_div}>
       <Header/>
       <Typewriter/>
       <Introduction/>
       <ProjectSection/>
   </div>
 
  
  )
}

export default App

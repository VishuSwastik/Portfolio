import React, { useEffect, useState } from 'react';
import side_image from '../assets/side_img.png'
import styles from './Name_sec.module.css'

const Typewriter = () => {
  const [displayedText, setDisplayedText] = useState('');
  const txt = 'FULL STACK DEVELOPER';
  const speed = 50; 

  useEffect(() => {
    let i = 0;

    const typeWriter = () => {
      if (i < txt.length) {
        setDisplayedText((prev) => prev + txt.charAt(i));
        i++;
        setTimeout(typeWriter, speed);
      }
    };

    typeWriter(); 


    return () => {
      i = txt.length; 
    };
  }, [txt, speed]);

  return (
    <div className={styles.name_sec}>
        <div>
        <h1>Hi There </h1>
        <h1>I'M Vaishnavi Dadhe</h1>
        <h2 id="demo">{displayedText}</h2>
        </div>
        <img src={side_image}/>
       
    </div>
  );
};

export default Typewriter;
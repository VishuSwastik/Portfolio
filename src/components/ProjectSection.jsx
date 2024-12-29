import React, { useState } from 'react';

import project_img from'../assets/project.png'
import styles from './project.module.css'

const projects = [
  {
    title: 'Project One',
    description: 'HTML5, CSS3, ReactJs',
   
    image: project_img, 
  },
  {
    title: 'Project Two',
    description: 'HTML5, CSS3, ReactJs',
    
    image: project_img, 
  },
  {
    title: 'Project Three',
    description: 'HTML5, CSS3, ReactJs',
   
    image: project_img, 
  },
  {
    title: 'Project Four',
    description: 'HTML5, CSS3, ReactJs',
   
    image: project_img,   
  },
  {
    title: 'Project Five',
    description: 'HTML5, CSS3, ReactJs',
  
    image: project_img, 
  },
  {
    title: 'Project Six',
    description: 'HTML5, CSS3, ReactJs',
    
    image: project_img, 
  },
];

const ProjectSection = () => {

    const [showModal, setShowModal] = useState(false);
    const [currentImage, setCurrentImage] = useState('');
  
    const handleImageClick = (image) => {
      setCurrentImage(image);
      setShowModal(true);
    };
  
    const handleClose = () => {
      setShowModal(false);
    };

    return (
        <div className={styles.projectSection}>
          <h2>Projects</h2>
          <div className={styles.projectList}>
            {projects.map((project, index) => (
              <div key={index} className={styles.projectCard}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.projectImage}
                  onClick={() => handleImageClick(project.image)} 
                />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
             
              </div>
            ))}
          </div>
    
         
          {showModal && (
            <div className={styles.modalOverlay} onClick={handleClose}>
              <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <span className={styles.closeButton} onClick={handleClose}>&times;</span>
                <img src={currentImage} alt="Modal" className={styles.modalImage} />
              </div>
            </div>
          )}
        </div>
      );
    };
    
    export default ProjectSection;
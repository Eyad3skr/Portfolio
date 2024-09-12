import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Carousel from 'react-spring-3d-carousel';
import styles from './slider.module.css'; // Updated to use CSS modules
import ProjectCard from '../ProjectCard/Projectcard.jsx';

function SliderComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { key: uuidv4(), content: <ProjectCard /> },
    { key: uuidv4(), content: <ProjectCard /> },
    { key: uuidv4(), content: <ProjectCard /> },
    { key: uuidv4(), content: <ProjectCard /> },
    { key: uuidv4(), content: <ProjectCard /> },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className={styles.sliderContainer}>
      <Carousel slides={slides} goToSlide={currentIndex} className={styles.carousel} />
      <button className={`${styles.navButton} ${styles.navButtonPrev}`} onClick={handlePrev}>Previous</button>
      <button className={`${styles.navButton} ${styles.navButtonNext}`} onClick={handleNext}>Next</button>
    </div>
  );
}

export default SliderComponent;
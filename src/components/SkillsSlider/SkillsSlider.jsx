import SimpleImageSlider from "react-simple-image-slider";
import styles from './skillsSlider.module.css';
import image1 from '../../assets/javascript.png';
import pythonLogo from '../../assets/python.png';

const images = [
  { url: image1 },
  { url: pythonLogo },
];

const SkillsSlider = () => {
  return (
    <div className={styles.slider}>
      <SimpleImageSlider
        width={349}
        height={300}
        images={images}
        showBullets={true}
        showNavs={true}
        navStyle={2} 
        navMargin={5}
      />
    </div>
  );
}

export default SkillsSlider;
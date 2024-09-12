import styles from './about.module.css'; 
import Halo from '../../assets/halo.png';
import skillsBorder from '../../assets/skillsBorder.svg';
import skillsGrid from '../../assets/skillsGrid.svg';
import SkillSlider from '../../components/SkillsSlider/SkillsSlider';
function AboutMe(){
    return (
        <div className={styles.aboutContainer}>
        <div className={styles.main}>
            <div className={styles.myImg}>
                <img src={Halo} alt="Halo"/>
            </div>
            <div className={styles.content}>
                <h1>Eyad Ibrahim</h1>
                <span>Welcome to by personal website.</span>
                <p>I have created this website to feel like a game/sci-fi interface. All text inside tries to reflect this. <br/> You will find ‘achievements’ or ‘quests’ that show the progress in my professional life and are related to what I am working on.</p>
                <a href="#">Explore CV [Enter]</a>
            </div>
            <div className={styles.skillsSlider}>
                <img src={skillsBorder} alt="skills border"/>
                <img src={skillsGrid} alt="skills grid"/>
                <SkillSlider/>
            </div>
        </div>
        </div>
    );
}

export default AboutMe;

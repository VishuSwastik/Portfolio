import Portfolio from '../assets/icons/portfolio.png'
import home from '../assets/icons/home.png'
import about from '../assets/icons/about.png'
import Project from '../assets/icons/project.png'
import resume from '../assets/icons/resume.png'
import styles from './header.module.css'
const Header = () => {
    return(
        <div className={styles.header}>
            <ul>
                <img src={Portfolio} /> 
                <li>PORTFOLIO</li>
            </ul>
            <ul>
                <li><img src={home} alt="" /> Home</li>
                <li><img src={about} alt="" />About</li>
                <li><img src={Project} alt="" />Project</li>
                <li><img src={resume} alt="" />Resume</li>
            </ul>
        </div>
    );
}

export default Header;
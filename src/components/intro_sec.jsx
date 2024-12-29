
import styles from './intro_sec.module.css';

const Introduction = () => {
    return ( 
        <div className={styles.about}>
            <div className={styles.rangesliders}>
                <label htmlFor="">HTML5</label>
                <input type="range" value="80" disabled/>
                <label htmlFor="">CSS3</label>
                <input type="range" value="85" disabled/>
                <label htmlFor="">JAVASCRIPT</label>
                <input type="range" value="70" disabled/>
                <label htmlFor="">REACT</label>
                <input type="range" value="83" disabled />
                <label htmlFor="">ASP.NET</label>
                <input type="range" value="90" disabled />
                <label htmlFor="">C#</label>
                <input type="range" value="60" disabled/>
                <label htmlFor="">JAVA</label>
                <input type="range" value="70" disabled />
                <label htmlFor="">NODE JS</label>
                <input type="range" value="80" disabled />
            </div>
            <div>
                <h2>ABOUT ME</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, esse illo. Doloribus quibusdam officia omnis consequatur asperiores illo accusamus vitae distinctio vero nam quo mollitia soluta natus, culpa incidunt hic.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem tenetur facilis, iusto omnis nostrum sequi doloribus exercitationem similique, quia laborum placeat veniam earum doloremque harum culpa sunt fuga ducimus corporis.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo ut quis ipsam fugiat asperiores. Non porro corporis accusantium cupiditate placeat vero necessitatibus rem similique sunt culpa voluptatibus, ratione officiis illum?</p>
            </div>
        </div>
    );
}

export default Introduction;
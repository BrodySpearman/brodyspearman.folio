import styles from './right-side-bar.module.css';
import Logo from '../../../logo/logo';

import { BiLogoTypescript, BiLogoJava, BiLogoReact } from 'react-icons/bi';
import { FaPython } from 'react-icons/fa';
import { FaGolang } from "react-icons/fa6";
import { PiFileSql } from "react-icons/pi";
import { TbBrandCSharp, TbBrandDjango, TbBrandNextjs } from "react-icons/tb";
import { DiRuby } from "react-icons/di";
import {
    SiFlask, SiJupyter, SiPostgresql, SiPandas,
    SiFastapi, SiOpenlayers, SiTailwindcss, SiBootstrap,
    SiNumpy, SiMongodb, SiRedux
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";

export default function RightSideBar() {
    return (
        <div className={`${styles.rightSideBar} overflow-y-auto scrollbar`}>

            <div className={`${styles.logo}`}>
                <Logo />
            </div>

            <div className={`${styles.quoteContainer} ${styles.rightSideBarContainer}`}>
                <h3 className={`${styles.quoteTitle}`}>Quote of the session:</h3>
                <p className={`${styles.quoteText} ${styles.quoteBody}`}>
                    "True idiots admire complexity, but a genius admires simplicity."
                </p>
                <p className={`${styles.quoteText} ${styles.quoteAuthor}`}>
                    <span className={`${styles.quoteAuthorAccent}`}>-</span>
                    Terry A. Davis
                    <span className={`${styles.quoteAuthorAccent}`}>-</span>
                </p>
            </div>

            <div className={`${styles.languageContainer} ${styles.rightSideBarContainer}`}>
                <h3 className={`${styles.languageTitle}`}>Primary Languages</h3>
                <ul className={`${styles.languageList}`}>
                    <li className={`${styles.languageItem}`}>
                        <FaPython size={35} color="#eecd12ff" />
                        Python
                    </li>
                    <li className={`${styles.languageItem}`}>
                        <BiLogoTypescript size={35} color="#5f7cffff" />
                        TypeScript
                    </li>
                    <li className={`${styles.languageItem}`}>
                        <PiFileSql size={35} color="#a06000ff" />
                        SQL
                    </li>
                </ul>

                <h3 className={`${styles.languageTitle}`}>Secondary Languages</h3>
                <ul className={`${styles.languageList}`}>
                    <li className={`${styles.languageItem}`}>
                        <BiLogoJava size={35} color="#cacacaff" />
                        Java
                    </li>
                    <li className={`${styles.languageItem}`}>
                        <TbBrandCSharp size={35} color="#3b56ceff" />
                        C#
                    </li>
                    <li className={`${styles.languageItem}`}>
                        <DiRuby size={35} color="#ff4027ff" />
                        Ruby
                    </li>
                    <li className={`${styles.languageItem}`}>
                        <FaGolang size={35} color="#007d9cff" />
                        Golang
                    </li>
                </ul>

                <h3 className={`${styles.languageTitle}`}>Frameworks/Libraries<br></br> I've worked with</h3>
                <ul className={`${styles.languageList}`}>
                    <li className={`${styles.languageItem}`}>
                        <BiLogoReact size={35} color="#61dafbff" />
                        React
                    </li>
                    <li className={`${styles.languageItem}`}>
                        <TbBrandNextjs size={35} color="#dadadaff" />
                        Next.js
                    </li>
                    <li className={`${styles.languageItem}`}>
                        <SiFlask size={35} color="#a06000ff" />
                        Flask
                    </li>
                    <li className={`${styles.languageItem}`}>
                        <TbBrandDjango size={35} color="#007d9cff" />
                        Django
                    </li>
                    <li className={`${styles.languageItem}`}>
                        <SiMongodb size={35} color="#4db33dff" />
                        MongoDB
                    </li>
                    <li className={`${styles.languageItem}`}>
                        <SiFastapi size={35} color="#009688ff" />
                        FastAPI
                    </li>
                    <li className={`${styles.languageItem} ${styles.doubleLine}`}>
                        <SiFastapi size={35} color="#009688ff" />
                        FastAPI-users<br></br> (auth)
                    </li>
                    <li className={`${styles.languageItem}`}>
                        <GrMysql size={35} color="#4479a1ff" />
                        MySQL
                    </li>
                    <li className={`${styles.languageItem}`}>
                        <SiPostgresql size={35} color="#4479a1ff" />
                        PostgreSQL
                    </li>
                    <li className={`${styles.languageItem}`}>
                        <SiJupyter size={35} color="#eecd12ff" />
                        Notebooks
                    </li>
                    <li className={`${styles.languageItem}`}>
                        <SiPandas size={35} color="#1565b3ff" />
                        Pandas
                    </li>
                    <li className={`${styles.languageItem}`}>
                        <SiNumpy size={35} color="#228bc9ff" />
                        Numpy
                    </li>
                    <li className={`${styles.languageItem}`}>
                        <SiTailwindcss size={35} color="#007d9cff" />
                        Tailwind
                    </li>
                    <li className={`${styles.languageItem}`}>
                        <SiBootstrap size={35} color="#563d7cff" />
                        Bootstrap
                    </li>
                    <li className={`${styles.languageItem}`}>
                        <SiRedux size={35} color="#764abcff" />
                        Redux
                    </li>
                    <li className={`${styles.languageItem}`}>
                        <SiOpenlayers size={35} color="#1874cdff" />
                        OpenLayers
                    </li>
                </ul>

            </div>
        </div>
    );
}
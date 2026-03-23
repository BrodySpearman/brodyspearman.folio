import styles from './right-side-bar.module.css';
import Logo from '../../../logo/logo';
import SessionQuote from './session-quote/session-quote';

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

const iconSize = 32;

export default function RightSideBar() {
    return (
        <div className={`${styles.rightSideBar} overflow-y-auto scrollbar`}>

            <div className={`${styles.logo}`}>
                <Logo />
            </div>

            <div className={`${styles.quoteContainer} ${styles.rightSideBarContainer}`}>
                <SessionQuote />
            </div>

            <div className={`${styles.languageContainer} ${styles.rightSideBarContainer}`}>
                <h3 className={`${styles.languageTitle}`}>Primary Languages</h3>
                <ul className={`${styles.languageList}`}>
                    <li className={`${styles.languageItem}`}>
                        <FaPython size={iconSize} color="#eecd12ff" />
                        Python
                    </li>
                    <li className={`${styles.languageItem}`}>
                        <BiLogoTypescript size={iconSize} color="#5f7cffff" />
                        TypeScript
                    </li>
                    <li className={`${styles.languageItem}`}>
                        <PiFileSql size={iconSize} color="#a06000ff" />
                        SQL
                    </li>
                </ul>

                <h3 className={`${styles.languageTitle}`}>Secondary Languages</h3>
                <ul className={`${styles.languageList}`}>
                    <li className={`${styles.languageItem}`}>
                        <BiLogoJava size={iconSize} color="#cacacaff" />
                        Java
                    </li>
                    <li className={`${styles.languageItem}`}>
                        <TbBrandCSharp size={iconSize} color="#3b56ceff" />
                        C#
                    </li>
                    <li className={`${styles.languageItem}`}>
                        <DiRuby size={iconSize} color="#ff4027ff" />
                        Ruby
                    </li>
                    <li className={`${styles.languageItem}`}>
                        <FaGolang size={iconSize} color="#007d9cff" />
                        Golang
                    </li>
                </ul>

                <h3 className={`${styles.languageTitle}`}>Frameworks/Libraries<br></br> I work with</h3>
                <ul className={`${styles.languageList}`}>
                    <li className={`${styles.languageItem}`}>
                        <BiLogoReact size={iconSize} color="#61dafbff" />
                        React
                    </li>
                    <li className={`${styles.languageItem}`}>
                        <TbBrandNextjs size={iconSize} color="#dadadaff" />
                        Next.js
                    </li>
                    <li className={`${styles.languageItem}`}>
                        <SiFlask size={iconSize} color="#a06000ff" />
                        Flask
                    </li>
                    <li className={`${styles.languageItem}`}>
                        <TbBrandDjango size={iconSize} color="#007d9cff" />
                        Django
                    </li>
                    <li className={`${styles.languageItem}`}>
                        <SiMongodb size={iconSize} color="#4db33dff" />
                        MongoDB
                    </li>
                    <li className={`${styles.languageItem}`}>
                        <SiFastapi size={iconSize} color="#009688ff" />
                        FastAPI
                    </li>
                    <li className={`${styles.languageItem} ${styles.doubleLine}`}>
                        <SiFastapi size={iconSize} color="#009688ff" />
                        FastAPI-users<br></br> (auth)
                    </li>
                    <li className={`${styles.languageItem}`}>
                        <GrMysql size={iconSize} color="#4479a1ff" />
                        MySQL
                    </li>
                    <li className={`${styles.languageItem}`}>
                        <SiPostgresql size={iconSize} color="#4479a1ff" />
                        PostgreSQL
                    </li>
                    <li className={`${styles.languageItem}`}>
                        <SiJupyter size={iconSize} color="#eecd12ff" />
                        Notebooks
                    </li>
                    <li className={`${styles.languageItem}`}>
                        <SiPandas size={iconSize} color="#1565b3ff" />
                        Pandas
                    </li>
                    <li className={`${styles.languageItem}`}>
                        <SiNumpy size={iconSize} color="#228bc9ff" />
                        Numpy
                    </li>
                    <li className={`${styles.languageItem}`}>
                        <SiTailwindcss size={iconSize} color="#007d9cff" />
                        Tailwind
                    </li>
                    <li className={`${styles.languageItem}`}>
                        <SiBootstrap size={iconSize} color="#563d7cff" />
                        Bootstrap
                    </li>
                    <li className={`${styles.languageItem}`}>
                        <SiRedux size={iconSize} color="#764abcff" />
                        Redux
                    </li>
                    <li className={`${styles.languageItem}`}>
                        <SiOpenlayers size={iconSize} color="#1874cdff" />
                        OpenLayers
                    </li>
                </ul>

            </div>
        </div>
    );
}
import styles from './left-side-bar.module.css';
import Image from 'next/image';

import { FaLaptopCode } from "react-icons/fa";
import { PiCube } from "react-icons/pi";
import { TbBrandLinkedin } from "react-icons/tb";
import { BiHomeAlt } from "react-icons/bi";
import { RiMailSendLine, RiGithubFill } from "react-icons/ri";

export default function LeftSideBar({ switchBodyState }: { switchBodyState: (bodyState: string) => void }) {

    const handleClick = (bodyState: string) => {
        switchBodyState(bodyState);
    }

    return (
        <div className={styles.leftSideBar}>


            <div className={styles.creatorProfile}>
                <div className={styles.creatorProfileImage}>
                    <Image
                        className={styles.portrait}
                        src="/portrait.svg"
                        alt="Creator Profile"
                        width={225}
                        height={225}
                    />
                </div>
            </div>

            <div className={styles.sideBarTitleContainer}>
                <h1 className={`${styles.nameTag}`}>Brody Spearman</h1>
                <h2 className={`${styles.sideBarSub}`}>Aspiring developer</h2>
                <p className={`${styles.locTag}`}>Sioux City, Iowa</p>

                <div className={`${styles.personalInfo}`}>

                    <ul className={`${styles.personalInfoListTag}`}>
                        <div className={`${styles.personalInfoDivide}`}>

                            <li className={`${styles.personalInfoItem}`}>Management Information Systems</li>
                            <li className={`${styles.personalInfoItem}`}>Iowa State University</li>
                            <li className={`${styles.personalInfoItem}`}>Graduated 2023</li>

                        </div>

                        <div className={`${styles.personalInfoDivide}`}>
                            <li className={`${styles.personalInfoItemBold} ${styles.personalInfoItem} ${styles.linkListTitle}`}>Important Links</li>

                            <li className={`${styles.personalInfoItem} ${styles.linkListItem}`}>
                                <a className={`${styles.personalInfoLink}`} href="https://github.com/brodyspearman" target="_blank" rel="noopener noreferrer">
                                    <span className={`${styles.linkListText}`}>GitHub</span>
                                    <RiGithubFill className={`${styles.linkListIcon}`} size={20} color="#3aad53ec" />
                                </a>
                            </li>

                            <li className={`${styles.personalInfoItem} ${styles.linkListItem}`}>
                                <a className={`${styles.personalInfoLink}`} href="https://www.linkedin.com/in/brody-spearman/" target="_blank" rel="noopener noreferrer">
                                    <span className={`${styles.linkListText}`}>LinkedIn</span>
                                    <TbBrandLinkedin className={`${styles.linkListIcon}`} size={18} color="#5a86e6ec" />
                                </a>
                            </li>
                        </div>

                    </ul>
                </div>
            </div>

            <div className={styles.splitter}></div>

            <div className={`${styles.personalInfo} ${styles.navBar}`}>
                <ul className={`${styles.navButtonList}`}>
                    <li>
                        <button onClick={() => handleClick('About')} className={`${styles.navButton} ${styles.aboutButton}`}>
                            About
                            <BiHomeAlt className={`${styles.navButtonIcon}`} />
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleClick('Projects')} className={`${styles.navButton} ${styles.projectsButton}`}>
                            Projects
                            <PiCube className={`${styles.navButtonIcon}`} />
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleClick('Contact')} className={`${styles.navButton} ${styles.contactButton}`}>
                            Contact
                            <RiMailSendLine className={`${styles.navButtonIcon}`} />
                        </button>
                    </li>
                    <li>
                        <a className={`${styles.navButton} ${styles.sourceCodeButton}`}>
                            Source Code
                            <FaLaptopCode className={`${styles.navButtonIcon}`} />
                        </a>
                    </li>
                </ul>

            </div>
        </div>
    );
}
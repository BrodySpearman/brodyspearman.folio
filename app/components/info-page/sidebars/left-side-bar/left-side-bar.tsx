import styles from './left-side-bar.module.css';
import Image from 'next/image';

export default function LeftSideBar() {
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
                            <li className={`${styles.personalInfoItemBold} ${styles.personalInfoItem}`}>Important Links</li>

                            <li className={`${styles.personalInfoLink} ${styles.personalInfoItem}`}>
                                <a href="https://github.com/brodyspearman" target="_blank" rel="noopener noreferrer">
                                    GitHub
                                </a>
                            </li>

                            <li className={`${styles.personalInfoLink} ${styles.personalInfoItem}`}>
                                <a href="https://www.linkedin.com/in/brody-spearman/" target="_blank" rel="noopener noreferrer">
                                    LinkedIn
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
                        <button className={`${styles.navButton} ${styles.aboutButton}`}>
                            About
                            <span className={`${styles.navButtonIcon} ${styles.homeIcon} material-symbols-outlined`}>
                                location_home
                            </span>
                        </button>
                    </li>
                    <li>
                        <button className={`${styles.navButton} ${styles.projectsButton}`}>
                            Projects
                            <span className={`${styles.navButtonIcon} material-symbols-outlined`}>
                                deployed_code
                            </span>
                        </button>
                    </li>
                    <li>
                        <button className={`${styles.navButton} ${styles.contactButton}`}>
                            Contact
                            <span className={`${styles.navButtonIcon} material-symbols-outlined`}>
                                mail
                            </span>
                        </button>
                    </li>
                    <li>
                        <button className={`${styles.navButton} ${styles.sourceCodeButton}`}>
                            Source Code
                        </button>
                    </li>
                </ul>

            </div>
        </div>
    );
}
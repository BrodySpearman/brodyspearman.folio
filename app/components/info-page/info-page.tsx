'use client';
import styles from './info-page.module.css';
import Image from 'next/image';
import Logo from '../logo/logo';

export default function InfoPage() {
    return (
        <div className={styles.infoPageWrapper}>

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
                    <h1 className={`${styles.sideBarTitle}`}>Brody Spearman</h1>
                    <h2 className={`${styles.sideBarSub}`}>Aspiring developer</h2>
                </div>
            </div>

            <div className={`${styles.infoContainer} overflow-y-auto scrollbar`}>
                <div className={styles.infoTitleContainer}>
                    <h1 className={`${styles.infoTitle}`}>Hello<span className={`${styles.infoTitleAccent}`}>!</span></h1>
                    <h2 className={`${styles.infoSub}`}>Thank you for paying a visit to my portfolio.</h2>
                </div>

                <div className={styles.infoContent}>
                    <div className={styles.intro}>
                        <h3 className={`${styles.subTitle}`}>Who am I?</h3>

                        <p className={`${styles.bodyText}`}>
                            Hi, I'm Brody Spearman, an aspiring developer born and raised in Sioux City, Iowa. I
                            believe that I am a very focused and organized coder, motivated and passionate about
                            writing clean, maintainable, and scalable applications. I've been writing code and
                            developing projects for over 5 years, and now I'm looking to start my career as a
                            software developer.
                            <br></br>
                            <br></br>
                            My programming journey began in college, while taking a basic Java course for my major,
                            MIS 207. Originally struggling with the content, I found myself developing an obsession
                            with programming while spending all night trying to study for my first exam. Since then
                            I've been hooked. After learning the fundamentals of code logic and applications, I
                            tried dipping my toes into several different niches within the field, for example:
                        </p>

                        <ul className={`${styles.nicheList}`}>
                            <li className={`${styles.bodyText} ${styles.nicheItem}`}>
                                Basic automation, web crawling, and scraping with Python bots.
                            </li>
                            <li className={`${styles.bodyText} ${styles.nicheItem}`}>
                                Utilizing Jupyter Notebooks and ML principles to compete in simple Kaggle competitions
                            </li>
                            <li className={`${styles.bodyText} ${styles.nicheItem}`}>
                                Learning a bit of C# for game development using Unity.
                            </li>
                            <li className={`${styles.bodyText} ${styles.nicheItem}`}>
                                And of course, initially making micro web projects using vanilla HTML, CSS, and Javascript.
                            </li>
                        </ul>

                        <p className={`${styles.bodyText}`}>
                            Alas, I found myself falling in love with web development. Since then, I've been
                            obsessed with learning about every aspect of it, front and back end. While college gave
                            me a great foundation of principles to build off of, I know that improving my development
                            skills doesn't end with gradutation. Since graduating I've been entirely focused on
                            building full stack medium-large scale applications using all of this knowledge that I've
                            acquired.
                        </p>

                        <h3 className={`${styles.subTitle}`}>Technical Knowledge & Goals</h3>
                        <p className={`${styles.bodyText}`}>
                            I believe now that I am a competent full stack developer with not only knowledge of
                            web development principles, but also a strong understanding of the fundamentals
                            computer science in general. I'm <span className={`${styles.accentUnderline}`}>always </span>
                            looking to improve my skills and learn new libraries, frameworks, and languages!
                            As someone who doesn't shy away from complex concepts, I'm fully driven toward
                            eventually gaining an understanding of computer system design on the lowest levels
                            possible.
                        </p>

                        <h3 className={`${styles.subTitle}`}>My Work So Far</h3>
                        <p className={`${styles.bodyText}`}>
                            I've been fortunate enough to work on several interesting projects during my time as a
                            student and now as a solo developer.
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.rightSideBar}>
                <div className={styles.logo}>
                    <Logo />
                </div>
                <div className={styles.quoteContainer}>
                    <h3 className={`${styles.quoteTitle}`}>Quote of the session:</h3>
                    <p className={`${styles.quoteText} ${styles.quoteBody}`}>
                        "True idiots admire complexity, but a genius admires simplicity."
                    </p>
                    <p className={`${styles.quoteText} ${styles.quoteAuthor}`}>
                        <span className={`${styles.quoteAuthorAccent}`}>-</span> Terry A. Davis <span className={`${styles.quoteAuthorAccent}`}>-</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
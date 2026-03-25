import styles from './projects.module.css';
import titleStyles from '../about/about.module.css';
import Image from 'next/image';

export default function Projects() {
    return (
        <>
            <div className={titleStyles.infoTitleContainer}>
                <h1 className={`${titleStyles.infoTitle}`}>Projects<span className={`${titleStyles.infoTitleAccent}`}>.</span></h1>
                <h2 className={`${titleStyles.infoSub}`}>Check out the software I've deployed or am actively working on.</h2>
            </div>

            <h3 className={`${titleStyles.subTitle} ${titleStyles.infoContent}`}>A collection of my deployments.</h3>

            <p className={`${titleStyles.bodyText} ${styles.projectsIntroText} ${titleStyles.infoContent}`}>

                Over the past 6 years I've personally developed countless projects. I haven't deployed
                most of them due to their age and small personal project nature, though all of the code for said
                projects are available on my GitHub.
                Below are a small collection of the projects I have deployed. I know it's not much right now
                but I'm actively working daily adding to this collection, as well as deploying some of my older
                repositories.

            </p>
            <div className={`${styles.projectsContainer}`}>
                <div className={`${styles.projectCard} ${styles.buff}`}>
                    <Image
                        src="/projects/Buff.png"
                        alt=""
                        width={400}
                        height={400}
                    />
                </div>
                <div className={`${styles.projectCard} ${styles.globeview}`}>
                    <Image
                        src="/projects/Globeview.png"
                        alt=""
                        width={400}
                        height={400}
                    />
                </div>
            </div>
        </>
    );
}
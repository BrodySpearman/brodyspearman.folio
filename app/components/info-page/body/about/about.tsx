import styles from './about.module.css';

export default function About() {
    return (
        <>
            <div className={styles.infoTitleContainer}>
                <h1 className={`${styles.infoTitle}`}>Hello<span className={`${styles.infoTitleAccent}`}>!</span></h1>
                <h2 className={`${styles.infoSub}`}>Thank you for paying a visit to my portfolio.</h2>
            </div>

            <div className={styles.infoContent}>
                <div className={styles.intro}>
                    <h3 className={`${styles.subTitle}`}>Who am I?</h3>

                    <p className={`${styles.bodyText}`}>

                        Hello! You probably visited this page because you're interested in learning more about me.
                        I'm Brody <span className={styles.tinyText}><span className="accent">(</span> John <span className="accent">) </span></span>
                        Spearman, an aspiring developer born and raised in Sioux City, Iowa. I believe I am a very focused
                        and organized coder, motivated and passionate about writing clean, maintainable, and scalable applications.
                        I've been writing code and developing projects for over 5 years now, and I'm currently looking for a way
                        to start my career as a software developer.<br></br><br></br>

                        I've always had a faint interest in computer science, and would sparingly grind Python/Javascript
                        tutorials through high school; however, my programming journey truly began in college while taking a
                        basic Java class for my major, MIS 207. Originally struggling with the course, I found myself
                        developing an obsession with the concepts while spending all night trying to study for my first exam.
                        Since then I've been hooked. After learning the fundamentals of code logic and applications, I
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

                        I found myself falling in love with web development. Since then, I've been
                        obsessed with learning about every aspect of it, front to back end. While college gave
                        me a great foundation of principles to build off of, I know that improving my development
                        skills doesn't end with graduation. Since graduating I've been wholly focused on
                        building medium-large scale full stack applications using all the knowledge I've
                        acquired.

                    </p>

                    <h3 className={`${styles.subTitle}`}>Technical Knowledge & Goals</h3>
                    <p className={`${styles.bodyText}`}>

                        I believe now that I am a competent full stack developer with not only knowledge of
                        web development principles, but also a strong understanding of the fundamentals
                        computer science in general (At this point I would say I'm fairly confident in my DSA knowledge).
                        I'm <span className={`${styles.accentItalic} accent`}>always </span>
                        looking to improve my skills and learn new libraries, frameworks, and languages!
                        As someone who doesn't shy away from complex concepts, I'm fully driven toward
                        eventually gaining an understanding of computer system design on the lowest levels
                        possible.<br></br><br></br>

                        While my main focus is on web development, I'm also pretty competent when it comes to
                        data science. I've worked on countless projects throughout both my personal and academic career
                        utilizing data science principles. I've used Oracle to design and push databases into production,
                        Pandas and Notebooks to load, clean, analyze and visualize data, and I've implemented client/server
                        APIs that manipulate and serve data to end users on web apps.

                    </p>

                    <h3 className={`${styles.subTitle}`}>My Work So Far</h3>
                    <p className={`${styles.bodyText} ${styles.conclusion}`}>
                        My free time is currently consumed by working on personal projects. I try to increase the scale of
                        production with each project I build, with a large beleif in my ability to deliver quality, production-ready
                        applications. Most of my work so far is full-stack development involving React/Python, although in the future
                        I want to develop standalone applications using C++ and other systems-level languages.
                        <br></br><br></br>
                        I'm currently looking to get my foot in the door in the professional software development scene. If interested,
                        contact me using the sidebar on the left!

                    </p>
                </div>
            </div>
        </>
    );
}
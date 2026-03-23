import styles from './contact.module.css';
import titleStyles from '../about/about.module.css';

export default function Contact() {
    return (
        <>
            <div className={titleStyles.infoTitleContainer}>
                <h1 className={`${titleStyles.infoTitle}`}>Contact me<span className={`${titleStyles.infoTitleAccent}`}>.</span></h1>
                <h2 className={`${titleStyles.infoSub}`}>Send me an email if you're interested in further discussion.</h2>
            </div>
        </>
    );
}
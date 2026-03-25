import styles from './contact.module.css';
import titleStyles from '../about/about.module.css';

export default function Contact() {
    return (
        <>
            <div className={titleStyles.infoTitleContainer}>
                <h1 className={`${titleStyles.infoTitle}`}>Contact me<span className={`${titleStyles.infoTitleAccent}`}>.</span></h1>
                <h2 className={`${titleStyles.infoSub}`}>Send me an email if you're interested in further discussion.</h2>
            </div>

            <h3 className={`${titleStyles.subTitle} ${titleStyles.infoContent}`}>Send me an email.</h3>

            <p className={`${titleStyles.bodyText} ${styles.contactIntroText} ${titleStyles.infoContent}`}>

                For further inquiry, I'd love to hear from you. I'm always open to new working opportunities. Just
                fill out the email form below, provide some additional contact info and I'll get back to you as soon as I can.

            </p>

            <div className={`${styles.formContainer}`}>
                <form className={`${styles.form}`}>
                    <input type="email" placeholder="Email" className={`${styles.formInput} ${styles.inputEmail}`} />
                    <textarea placeholder="Message" className={`${styles.formInput} ${styles.inputMessage}`}></textarea>
                    <button type="submit" className={`${styles.formButton}`}>Send</button>
                </form>
            </div>
        </>
    );
}
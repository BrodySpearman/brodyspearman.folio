'use client';
import { useState } from 'react';
import styles from './contact.module.css';
import titleStyles from '../about/about.module.css';

export default function Contact() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('/api/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, message }),
            });

            if (response.ok) {
                setStatus('success');
                setEmail('');
                setMessage('');
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setStatus('error');
        }
    };

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
                <form className={`${styles.form}`} onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        className={`${styles.formInput} ${styles.inputEmail}`}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <textarea
                        placeholder="Message"
                        className={`${styles.formInput} ${styles.inputMessage}`}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>

                    <button
                        type="submit"
                        className={`${styles.formButton}`}
                        disabled={status === 'sending'}
                    >
                        {status === 'sending' ? 'Sending...' : 'Send'}
                    </button>

                    {status === 'success' && <p className={`${styles.formMessage} ${styles.success}`}>Email sent successfully!</p>}
                    {status === 'error' && <p className={`${styles.formMessage} ${styles.error}`}>Failed to send email. Please try again.</p>}
                </form>
            </div>
        </>
    );
}
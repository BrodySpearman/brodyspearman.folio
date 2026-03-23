import styles from './session-quote.module.css';
import { quotes } from './quote-data';

interface Quote {
    quote: string;
    author: string;
}

export default function SessionQuote() {
    const quote: Quote = quotes[Math.floor(Math.random() * quotes.length)];

    return (
        <>
            <h3 className={`${styles.quoteTitle}`}>Quotes of the session:</h3>
            <p className={`${styles.quoteText} ${styles.quoteBody}`}>
                "{quote.quote}"
            </p>
            <p className={`${styles.quoteText} ${styles.quoteAuthor}`}>
                <span className={`${styles.quoteAuthorAccent}`}>-</span>
                {quote.author}
                <span className={`${styles.quoteAuthorAccent}`}>-</span>
            </p>
        </>
    );
}
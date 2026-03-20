'use client';
import styles from './logo.module.css'

const ascii = String.raw`
   oooo oooooooooo.   .oooooo..o 
   '888 '888'   'Y8b d8P'    'Y8 
    888  888     888 Y88bo.      
    888  888oooo888'  '"Y8888o.  
    888  888    '88b      '"Y88b 
    888  888    .88P oo     .d8P 
.o. 88P o888bood8P'  8""88888P'  
Y888P                          
`

export default function Logo() {
    return (
        <pre className={`terminal-text ${styles.logoText}`}>
            {ascii}
        </pre>
    );
}
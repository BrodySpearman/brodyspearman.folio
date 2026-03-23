'use client';
import styles from './info-page.module.css';
import LeftSideBar from './sidebars/left-side-bar/left-side-bar';
import RightSideBar from './sidebars/right-side-bar/right-side-bar';
import { useState, useEffect } from 'react';
import About from './body/about/about';
import Projects from './body/projects/projects';
import Contact from './body/contact/contact';

export default function InfoPage() {
    const [bodyState, switchBodyState] = useState<string>('About');

    const renderBody = () => {
        switch (bodyState) {
            case 'About':
                return <About />;
            case 'Projects':
                return <Projects />;
            case 'Contact':
                return <Contact />;
            default:
                return <About />;
        }
    }

    useEffect(() => {

    }, []);


    return (
        <div className={styles.infoPageWrapper}>

            <LeftSideBar switchBodyState={switchBodyState} />

            <div className={`${styles.infoContainer} overflow-y-auto scrollbar`}>
                {renderBody()}
            </div>

            <RightSideBar />

        </div>
    );
}
'use client';
import styles from './info-page.module.css';
import LeftSideBar from './sidebars/left-side-bar/left-side-bar';
import RightSideBar from './sidebars/right-side-bar/right-side-bar';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import About from './body/about/about';
import Projects from './body/projects/projects';
import Contact from './body/contact/contact';

export default function InfoPage({ pageState }: { pageState: string }) {
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
                <AnimatePresence mode="wait">
                    <motion.div
                        key={bodyState}
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 0 }}
                        transition={{ duration: .3 }}
                        className="w-full h-full"
                    >
                        {renderBody()}
                    </motion.div>
                </AnimatePresence>
            </div>

            <RightSideBar />

        </div>
    );
}
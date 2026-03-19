'use client';
import { useState, useEffect, useRef } from "react";
import ProgressBar from "../progress-bar/progress-bar";
import AsciiArt from "../ascii/ascii-art";

interface TerminalRowProps {
    text: string;
    onComplete?: () => void;
    keepCaret?: boolean;
}

function DefaultRow({ text, onComplete, keepCaret }: TerminalRowProps) {
    const [isTyping, setIsTyping] = useState(true);
    const [displayText, setDisplayText] = useState("");
    const hasFinished = useRef(false);

    useEffect(() => {
        if (hasFinished.current) return;

        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= text.length) {
                setDisplayText(text.slice(0, currentIndex));
                currentIndex++;
            } else {
                hasFinished.current = true;
                setIsTyping(false);
                clearInterval(interval);

                if (onComplete) {
                    onComplete();
                }
            }
        }, 10);
        return () => clearInterval(interval);
    }, [text, onComplete]);

    return (
        <div>
            <p className={`terminal-text`}>
                {displayText}
                {(isTyping || keepCaret) && <span className="blink-caret ml-1">█</span>}
            </p>
        </div>
    );
}

export default function TerminalRow(props: TerminalRowProps) {
    switch (true) {
        case props.text.startsWith("RANDOM_ASCII_ART"): {
            return <AsciiArt onComplete={props.onComplete} />;
        }

        case props.text.startsWith("LOADING_PROGRESS"): {
            const match = props.text.match(/!([0-9]+)!/);
            const extractedSpeed = match ? Number(match[1]) : 1;
            console.log(extractedSpeed);

            return <ProgressBar
                progressSpeed={extractedSpeed}
                onComplete={props.onComplete}
                keepCaret={props.keepCaret}
            />;
        }
        default:
            return <DefaultRow {...props} />;
    }
}


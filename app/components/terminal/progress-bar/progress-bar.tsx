'use client';
import { useState, useEffect, useRef } from "react";

interface ProgressBarProps {
    progressSpeed?: number;
    onComplete?: () => void;
    keepCaret?: boolean;
}

// simulated loading bar. Doesn't actually load anything.
export default function ProgressBar({ progressSpeed, onComplete, keepCaret }: ProgressBarProps) {
    const [progress, setProgress] = useState(0);
    const hasFinished = useRef(false);

    // engine only handles driving the progress numbers
    useEffect(() => {
        if (hasFinished.current) return;

        const interval = setInterval(() => {
            setProgress((prev) => {
                const nextProgress = prev + Math.floor(Math.random() * 15) + 1;
                return nextProgress >= 100 ? 100 : nextProgress;
            });
        }, progressSpeed);

        return () => clearInterval(interval);
    }, [progressSpeed]);

    // observer: watches for progress to hit 100, then fires onComplete once
    useEffect(() => {
        if (progress >= 100 && !hasFinished.current) {
            hasFinished.current = true;
            if (onComplete) onComplete();
        }
    }, [progress, onComplete]);

    // visual properties
    const barLength = 20;
    const filledLength = Math.round((progress / 100) * barLength);
    const emptyLength = barLength - filledLength;

    const filled = '█'.repeat(filledLength);
    const empty = '░'.repeat(emptyLength);

    return (
        <div>
            <p className="terminal-text">
                [<span className="text-[.7rem] text-[#ffb515]">{filled}{empty}</span>] {progress}%
                {keepCaret && <span className="blink-caret ml-1">█</span>}
            </p>
        </div>
    );
}

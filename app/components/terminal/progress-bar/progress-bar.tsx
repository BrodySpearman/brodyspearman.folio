'use client';
import { useState, useEffect } from "react";

interface ProgressBarProps {
    progressSpeed?: number;
    onComplete?: () => void;
    keepCaret?: boolean;
}

// simulated loading bar. Doesn't actually load anything.
export default function ProgressBar({ progressSpeed, onComplete, keepCaret }: ProgressBarProps) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                const nextProgress = prev + Math.floor(Math.random() * 15) + 1;

                if (nextProgress >= 100) {
                    clearInterval(interval);
                    if (onComplete) onComplete();
                    return 100;
                }

                return nextProgress;
            });
        }, progressSpeed); // loading duration.

        return () => clearInterval(interval);
    }, [onComplete, progressSpeed]);

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

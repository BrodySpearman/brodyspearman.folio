'use client';
import { asciiBundle } from "./art-data";
import { useState, useEffect } from "react";

interface AsciiArtProps {
    onComplete?: () => void;
}

export default function AsciiArt({ onComplete }: AsciiArtProps) {
    const [selectedArt] = useState(() => {
        const randomInd = Math.floor(Math.random() * asciiBundle.length);

        const rawString = asciiBundle[randomInd];
        const linesArr = rawString.split('\n');

        if (linesArr[0].trim() === '') {
            linesArr.shift();
        }

        if (linesArr[linesArr.length - 1].trim() === '') {
            linesArr.pop();
        }

        return linesArr;
    });

    useEffect(() => {
        if (onComplete) onComplete();
    }, [onComplete]);

    return (
        <div>
            <pre className="terminal-text">
                {selectedArt.map((line, index) => (
                    <div key={index}>{line}</div>
                ))}
            </pre>
        </div>
    );
}
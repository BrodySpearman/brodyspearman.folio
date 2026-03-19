'use client';
import { useState, useEffect } from "react";
import { terminalData } from "./terminal-data";
import TerminalRow from "./terminal-row/terminal-row";

export default function Terminal() {
    // keep track of which rows have been spawned into DOM
    const [visibleRows, setVisibleRows] = useState<string[]>([]);
    // track index of line that is currently typing
    const [currentRowIndex, setCurrentRowIndex] = useState(0);

    const delayNum = (text: string) => { // delay tag value getter e.g. ?100?
        const match = text.match(/\?([0-2000]+)\?/);
        return match ? Number(match[1]) : null;
    };

    const cleanText = (text: string) => text.replace(/\s*\?[0-9]+\?/g, ''); // tag replace helper

    useEffect(() => {
        if (terminalData.length > 0) {
            setVisibleRows([cleanText(terminalData[0])]);
        }
    }, []);

    const handleRowComplete = () => {
        if (currentRowIndex < terminalData.length - 1) {

            let delay = Math.floor(Math.random() * 500) + 100;

            if (delayNum(terminalData[currentRowIndex]) != null) {
                delay = delayNum(terminalData[currentRowIndex])!;
            }

            setTimeout(() => {
                const next = currentRowIndex + 1;
                setCurrentRowIndex(next);

                setVisibleRows((prev) => [...prev, cleanText(terminalData[next])]);
            }, delay);
        }
    }

    return (
        <div className="flex flex-col-reverse h-[100vh] overflow-y-auto pb-5 no-scrollbar">
            {[...visibleRows].reverse().map((line, reversedIndex) => {
                // reverse index to keep structure of terminal as it runs.
                const actualIndex = visibleRows.length - 1 - reversedIndex;
                const isCurrentRow = reversedIndex === 0;

                return (
                    <div key={actualIndex} className="terminal-row" id={`row-${actualIndex}`}>
                        <TerminalRow
                            text={line}
                            onComplete={isCurrentRow ? handleRowComplete : undefined}
                            keepCaret={isCurrentRow}
                        />
                    </div>
                );
            })}
        </div>
    );
}
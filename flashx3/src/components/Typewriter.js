/*
    Project Name: FLASHX3
    Contributors:
        - Meghana Saisri Bisa
        - Mitha M K
        - Mrunal Manjunath Kudtarkar
*/
import { useState, useEffect } from 'react';

const Typewriter = ({ text, delay, infinite }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Reset currentText and currentIndex when a new `text` prop is received
        setCurrentText('');
        setCurrentIndex(0);
    }, [text]);

    useEffect(() => {
        let timeout;

        if (currentIndex < text.length) {
            timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);
        } else if (infinite) {
            setCurrentIndex(0);
            setCurrentText('');
        }

        return () => clearTimeout(timeout);
    }, [currentIndex, delay, infinite, text]);

    return <span>{currentText}</span>;
};

export default Typewriter;

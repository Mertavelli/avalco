import React, { useState, useEffect } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const RingDiagramm = () => {
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (percent < 100) {
                setPercent(prevPercent => prevPercent + 1);
            } else {
                clearInterval(interval);
            }
        }, 10); // Hier kannst du die Geschwindigkeit des Fortschritts einstellen (in Millisekunden)
        return () => clearInterval(interval);
    }, [percent]);

    return (
        <div style={{ width: '200px', height: '200px' }}>
            <CircularProgressbar
                value={percent}
                text={`${percent}%`}
                styles={buildStyles({
                    rotation: 0,
                    strokeLinecap: 'round',
                    textSize: '20px',
                    pathTransitionDuration: 0.5,
                    pathColor: '#1167FF',
                    textColor: '#000',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#E2E2E2',
                })}
            />
        </div>
    );
};

export default RingDiagramm;

import React, { useState, useEffect } from 'react';

const Pomodoro = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const formattedTime = time.toLocaleTimeString('en-US', {
        hour12: false,
        timeZone: 'Europe/Paris',
    });

    return (
        <div className='dflexcolumn gap16' style={{ alignItems: 'flex-end' }}>
            <p className='gray-300 regular14'>Heure actuelle à Besançon (FR)</p>
            <h3 className='gray-300'>{formattedTime}</h3>
        </div>
    );
};

export default Pomodoro;

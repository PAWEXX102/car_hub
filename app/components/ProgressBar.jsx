'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export const ProgressBar = ({isMenuOpen}) => {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        const scrollListener = () => {
            const scrollMax = document.documentElement.scrollHeight - window.innerHeight;
            const scrollCurrent = window.scrollY;
            const scrollPercent = (scrollCurrent / scrollMax) * 100;
            setScrollPercentage(scrollPercent);
        };

        window.addEventListener('scroll', scrollListener);

        return () => {
            window.removeEventListener('scroll', scrollListener);
        };
    }, []);

    return (
        <motion.div
            className=' bg-blue-500 h-1 rounded-tr-md rounded-br-md absolute bottom-0 left-0'
            style={{ width: `${scrollPercentage}%` }}
        />
    );
};
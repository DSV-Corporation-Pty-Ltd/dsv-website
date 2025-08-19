'use client';

import React from 'react';
import { motion, Easing } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

interface WhyChooseCardProps {
  number: number;
  title: string;
  description: string;
  bgColor: string; // Tailwind class for background color, e.g., 'bg-orange-300'
  initialRotation: number; // For varied initial angles
  initialTranslateX: number; // For varied initial positions
  delay: number; // Staggered animation delay
}

const WhyChooseCard: React.FC<WhyChooseCardProps> = ({
  number,
  title,
  description,
  bgColor,
  initialRotation,
  initialTranslateX,
  delay,
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotate: initialRotation, x: initialTranslateX },
    visible: {
      opacity: 1,
      y: 0,
      rotate: initialRotation, // Keep initial rotation after fade-in
      x: initialTranslateX,    // Keep initial translate after fade-in
      transition: {
        duration: 0.6,
        ease: 'easeOut' as Easing,
        delay: delay,
      },
    },
    hover: {
      y: -10, // Lift up
      rotate: initialRotation * 0.5, // Slightly straighten or rotate less on hover
      scale: 1.03, // Slightly enlarge
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // More prominent shadow
      transition: {
        duration: 0.2,
        ease: 'easeOut' as Easing,
      },
    },
  };

  return (
    <motion.div
      className={twMerge(
        "relative p-6 rounded-lg shadow-md hover:z-20", // z-20 brings hovered card to front
        bgColor,
        "flex flex-col items-start" // Align content to top-left
      )}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover" // Apply hover animation
    >
      <div className="absolute top-3 left-3 bg-white text-blue-700 font-extrabold text-2xl px-3 py-1 rounded-md shadow-sm">
        #{number}
      </div>
      <h3 className="mt-10 text-xl font-bold text-gray-800 mb-2 leading-tight">
        {title}
      </h3>
      <p className="text-gray-700 text-sm flex-grow">
        {description}
      </p>
    </motion.div>
  );
};

export default WhyChooseCard;
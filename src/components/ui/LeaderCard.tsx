'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card'; // Assuming Card is in the same ui folder

interface LeaderCardProps {
  name: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  quote: string;
  delay?: number; // Optional delay for staggered animation
}

const LeaderCard: React.FC<LeaderCardProps> = ({
  name,
  title,
  imageSrc,
  imageAlt,
  quote,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay, ease: 'easeOut' }}
      className="h-full" // Ensure card takes full height in grid
    >
      <Card className="flex flex-col items-center text-center p-6 h-full">
        <motion.div
          className="relative w-40 h-40 rounded-full overflow-hidden mb-6 shadow-lg ring-4 ring-blue-200"
          whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)" }} // Scale and shadow on hover
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = 'https://placehold.co/160x160/cbd5e1/475569?text=Profile'; // Placeholder on error
            }}
          />
        </motion.div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-blue-600 font-semibold mb-4">{title}</p>
        <p className="text-gray-700 italic text-base flex-grow">
          &ldquo;{quote}&rdquo;
        </p>
      </Card>
    </motion.div>
  );
};

export default LeaderCard;
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircleIcon } from '@heroicons/react/20/solid'; // Example icon

interface FeatureBenefitsSectionProps {
  headline: string;
  benefits: string[];
  imageUrl: string;
  imageAlt: string;
  reverse?: boolean; // To alternate image/text side
}

const FeatureBenefitsSection: React.FC<FeatureBenefitsSectionProps> = ({
  headline,
  benefits,
  imageUrl,
  imageAlt,
  reverse = false,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const contentVariants = {
    hidden: { opacity: 0, x: reverse ? 50 : -50 },
    visible: { opacity: 1, x: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: reverse ? -50 : 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          {/* Text Content */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={contentVariants}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className={`${reverse ? 'lg:pl-12' : 'lg:pr-12'}`}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {headline}
            </h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index, ease: 'easeOut' }}
                  className="flex items-start text-lg text-gray-700"
                >
                  <CheckCircleIcon className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Image */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={imageVariants}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <img
              src={imageUrl}
              alt={imageAlt}
              className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureBenefitsSection;
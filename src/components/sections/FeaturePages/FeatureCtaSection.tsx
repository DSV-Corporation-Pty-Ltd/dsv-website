'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from '../../ui/Button';
import Link from 'next/link';

interface FeatureCtaSectionProps {
  title: string;
  buttonText: string;
  buttonLink: string;
}

const FeatureCtaSection: React.FC<FeatureCtaSectionProps> = ({
  title,
  buttonText,
  buttonLink,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section className="py-16 lg:py-24 bg-blue-50" ref={ref}>
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            {title}
          </h2>
          <Button size="large" onClick={() => window.location.href=buttonLink}>
            {buttonText}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureCtaSection;
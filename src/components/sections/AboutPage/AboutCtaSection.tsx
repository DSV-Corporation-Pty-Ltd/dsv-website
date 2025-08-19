'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from '../../ui/Button';
import Link from 'next/link';

const AboutCtaSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section className="py-20 lg:py-28 bg-blue-600 text-white" ref={ref}>
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Join Our Journey
          </h2>
          <p className="text-lg lg:text-xl max-w-2xl mx-auto mb-10">
            Interested in learning more about Fristine Infotech or exploring career opportunities?
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="large" className="bg-white text-blue-600 hover:bg-gray-100" onClick={() => window.location.href='/contact'}>
              Contact Our Team
            </Button>
            <Button variant="outline" size="large" className="border-white text-white hover:bg-white hover:text-blue-600" onClick={() => window.location.href='/careers'}>
              View Open Positions
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCtaSection;
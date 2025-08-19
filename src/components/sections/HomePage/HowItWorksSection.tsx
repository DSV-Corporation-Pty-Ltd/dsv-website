'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../../ui/SectionHeading';

interface StepProps {
  stepNumber: number;
  title: string;
  description: string;
  delay: number;
}

const Step: React.FC<StepProps> = ({ stepNumber, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay, ease: 'easeOut' }}
      className="flex flex-col items-center text-center p-6"
    >
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-2xl mb-4">
        {stepNumber}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const HowItWorksSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-20 lg:py-28 bg-blue-200" ref={ref}>
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Simple Workflow, Powerful Results"
          subtitle="Follow our easy 3-step process to get your projects streamlined."
        />
        {inView && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <Step
              stepNumber={1}
              title="Create a project"
              description="Quickly set up new projects, define goals, and add your team members."
              delay={0}
            />
            <Step
              stepNumber={2}
              title="Assign tasks & track time"
              description="Break down work, assign responsibilities, and effortlessly log hours."
              delay={0.2}
            />
            <Step
              stepNumber={3}
              title="Collaborate & deliver"
              description="Keep clients and team informed, collect feedback, and achieve success."
              delay={0.4}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default HowItWorksSection;
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../../ui/SectionHeading';
import Card from '../../ui/Card'; // Reusing Card component

// Icon placeholders (replace with actual icons like from Lucide React or custom SVGs)
const valueIcons = {
  innovation: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L13.5 21.75 16.5 13.5H3.75Z" /></svg>,
  integrity: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>,
  collaboration: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.5L12 22.5L9 19.5M12 21.75V14.25M12 14.25L15 11.25M12 14.25L9 11.25M12 2.25V9.75M12 9.75L15 6.75M12 9.75L9 6.75" /></svg>,
  customerFocus: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>,
};

interface ValueItemProps {
  icon: keyof typeof valueIcons;
  title: string;
  description: string;
  delay: number;
}

const ValueItem: React.FC<ValueItemProps> = ({ icon, title, description, delay }) => {
  const IconComponent = valueIcons[icon];
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay, ease: 'easeOut' }}
    >
      <Card className="text-center h-full flex flex-col items-center">
        <div className="bg-blue-100 rounded-full p-4 inline-flex mb-4">
          <IconComponent className="h-8 w-8 text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </Card>
    </motion.div>
  );
};

const ValuesSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const values = [
    {
      icon: 'innovation',
      title: 'Innovation',
      description: 'Constantly seeking new ways to solve complex problems and deliver cutting-edge solutions.',
    },
    {
      icon: 'integrity',
      title: 'Integrity',
      description: 'Operating with honesty, transparency, and strong ethical principles in all our interactions.',
    },
    {
      icon: 'collaboration',
      title: 'Collaboration',
      description: 'Fostering a culture of teamwork, mutual respect, and shared success both internally and with clients.',
    },
    {
      icon: 'customerFocus',
      title: 'Customer Focus',
      description: 'Prioritizing the needs of our users and clients, ensuring their success is at the core of our efforts.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Core Values"
          subtitle="The principles that guide our work and define who we are."
        />
        {inView && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value, index) => (
              <ValueItem
                key={value.title}
                icon={value.icon as keyof typeof valueIcons} // Type assertion for icon prop
                title={value.title}
                description={value.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ValuesSection;
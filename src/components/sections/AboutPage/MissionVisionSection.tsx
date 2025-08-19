'use client';

import React from 'react';
import { motion, Easing } from 'framer-motion'; // Import Easing type
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../../ui/SectionHeading';

const MissionVisionSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut' as Easing // <--- FIX IS HERE: Type assertion
      }
    },
  };

  return (
    <section className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Purpose and Aspiration"
          subtitle="At Fristine Infotech, we are driven by a clear mission and a bold vision for the future."
        />
        {inView && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <motion.div variants={itemVariants} initial="hidden" animate="visible">
              <h3 className="text-3xl font-bold text-blue-700 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the leading innovator in project management solutions, empowering teams worldwide to achieve their goals with unparalleled precision, transparency, and ease. We envision a world where complex projects are simplified, and every team member feels connected and productive.
              </p>
            </motion.div>
            {/* Note: The 'transition' prop on the second motion.div also needs the same fix if it were direct */}
            <motion.div variants={itemVariants} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
              <h3 className="text-3xl font-bold text-blue-700 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To develop intuitive, powerful, and secure project management software that streamlines workflows, fosters collaboration, and provides actionable insights, enabling businesses of all sizes to deliver exceptional results consistently.
              </p>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MissionVisionSection;
// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer'; // npm install react-intersection-observer
// import SectionHeading from '../../ui/SectionHeading';
// import Card from '../../ui/Card';

// // Icon placeholders (replace with actual icons like from Heroicons or custom SVGs)
// const icons = {
//   project: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.234 8.234L15 14.25m2.25 2.25l-1.5-1.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>,
//   task: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>,
//   time: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>,
//   client: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.75c0 .621-.504 1.125-1.125 1.125H5.625c-.621 0-1.125-.504-1.125-1.125V9.75M18 18.75V9.75m0 9.003L15.375 12M18 12.75l-2.625-2.625M5.232 10.617 10 6m2.5 5.25L10 6m2.5 5.25 1.5-1.5m-3.75-3.75 1.5-1.5m7.5-6-3.75 3.75m4.5 9-3.75 3.75" /></svg>,
//   feedback: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75c0 .375.375.675.675.675h.75a.675.675 0 0 0 .675-.675V6.75a.675.675 0 0 0-.675-.675h-.75a.675.675 0 0 0-.675.675v3ZM12 12.75c0 .375.375.675.675.675H14.25a.675.675 0 0 0 .675-.675V9.75a.675.675 0 0 0-.675-.675H12.675a.675.675 0 0 0-.675.675v3ZM15.75 12.75c0 .375.375.675.675.675H17.25a.675.675 0 0 0 .675-.675V9.75a.675.675 0 0 0-.675-.675H16.425a.675.675 0 0 0-.675.675v3Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" /></svg>,
//   employee: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>,
// };


// interface FeatureHighlightProps {
//   icon: keyof typeof icons; // Use keys of the icons object
//   title: string;
//   description: string;
//   delay: number;
// }

// const FeatureHighlight: React.FC<FeatureHighlightProps> = ({ icon, title, description, delay }) => {
//   const IconComponent = icons[icon];

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay: delay, ease: 'easeOut' }}
//     >
//       <Card className="text-center h-full flex flex-col items-center">
//         <div className="bg-blue-100 rounded-full p-4 inline-flex mb-4">
//           <IconComponent className="h-8 w-8 text-blue-600" />
//         </div>
//         <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
//         <p className="text-gray-600 text-sm">{description}</p>
//       </Card>
//     </motion.div>
//   );
// };

// const FeaturesOverviewSection: React.FC = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true, // Only trigger animation once
//     threshold: 0.2,    // Trigger when 20% of the element is in view
//   });

//   return (
//     <section className="py-20 lg:py-28 bg-gray-50" ref={ref}>
//       <div className="container mx-auto px-4">
//         <SectionHeading
//           title="Designed for Clarity, Built for Efficiency"
//           subtitle="Break into key features using short, punchy descriptions."
//         />
//         {inView && ( // Only render and animate if in view
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <FeatureHighlight
//               icon="project"
//               title="Project Management"
//               description="Create and manage projects with clear goals, timelines, and accountability."
//               delay={0}
//             />
//             <FeatureHighlight
//               icon="task"
//               title="Task Management"
//               description="Break down work into tasks with priorities, deadlines, and team ownership."
//               delay={0.1}
//             />
//             <FeatureHighlight
//               icon="time"
//               title="Time Entries"
//               description="Track billable and non-billable hours with precision."
//               delay={0.2}
//             />
//             <FeatureHighlight
//               icon="client"
//               title="Client Accounts"
//               description="Keep all client details, projects, and billing info in one place."
//               delay={0.3}
//             />
//             <FeatureHighlight
//               icon="feedback"
//               title="Feedback System"
//               description="Collect actionable feedback from clients and team members."
//               delay={0.4}
//             />
//             <FeatureHighlight
//               icon="employee"
//               title="Employee Directory"
//               description="View your entire team, their roles, and current assignments."
//               delay={0.5}
//             />
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default FeaturesOverviewSection;


'use client';

import React from 'react';
import { SVGProps } from 'react';

import {MotionProps, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../../ui/SectionHeading';
import Card from '../../ui/Card';


type IconProps = SVGProps<SVGSVGElement> & MotionProps;


const icons = {
  project: (props: IconProps) => (
    <motion.svg whileHover={{ scale: 1.2 }} transition={{ type: 'spring' }} {...props} xmlns="http://www.w3.org/2000/svg" fill="none"
      viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.234 8.234L15 14.25m2.25 2.25l-1.5-1.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </motion.svg>
  ),
  task: (props: IconProps) => (
    <motion.svg whileHover={{ rotate: 360 }} transition={{ duration: 1 }} {...props} xmlns="http://www.w3.org/2000/svg" fill="none"
      viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </motion.svg>
  ),
  time: (props: IconProps) => (
    <motion.svg whileHover={{ scale: 1.2 }} transition={{ type: 'spring' }} {...props} xmlns="http://www.w3.org/2000/svg" fill="none"
      viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </motion.svg>
  ),
  client: (props: IconProps) => (
    <motion.svg whileHover={{ y: -5 }} transition={{ type: 'spring' }} {...props} xmlns="http://www.w3.org/2000/svg" fill="none"
      viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M18 18.75c0 .621-.504 1.125-1.125 1.125H5.625c-.621 0-1.125-.504-1.125-1.125V9.75M18 18.75V9.75m0 9.003L15.375 12M18 12.75l-2.625-2.625M5.232 10.617 10 6" />
    </motion.svg>
  ),
  feedback: (props: IconProps) => (
    <motion.svg whileHover={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 0.6 }} {...props} xmlns="http://www.w3.org/2000/svg" fill="none"
      viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M8.625 9.75c0 .375.375.675.675.675h.75a.675.675 0 0 0 .675-.675V6.75a.675.675 0 0 0-.675-.675h-.75a.675.675 0 0 0-.675.675v3ZM12 12.75c0 .375.375.675.675.675H14.25a.675.675 0 0 0 .675-.675V9.75a.675.675 0 0 0-.675-.675H12.675a.675.675 0 0 0-.675.675v3Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
    </motion.svg>
  ),
  employee: (props: IconProps) => (
    <motion.svg whileHover={{ scale: 1.15 }} transition={{ type: 'spring' }} {...props} xmlns="http://www.w3.org/2000/svg" fill="none"
      viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </motion.svg>
  ),
};

interface FeatureHighlightProps {
  icon: keyof typeof icons;
  title: string;
  description: string;
  delay: number;
}

const FeatureHighlight: React.FC<FeatureHighlightProps> = ({ icon, title, description, delay }) => {
  const IconComponent = icons[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      whileHover={{ scale: 1.05 }}
    >
      <Card className="text-center h-full flex flex-col items-center bg-gradient-to-br from-white via-gray-50 to-blue-50">
        <div className="bg-blue-100 rounded-full p-4 inline-flex mb-4 shadow-md">
          <IconComponent className="h-8 w-8 text-blue-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </Card>
    </motion.div>
  );
};

const FeaturesOverviewSection: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      className="py-20 lg:py-28 bg-gradient-to-b from-blue-50 via-white to-gray-50"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Designed for Clarity, Built for Efficiency"
          subtitle="Break into key features using short, punchy descriptions."
        />
        {inView && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            <FeatureHighlight icon="project" title="Project Management" description="Create and manage projects with clear goals, timelines, and accountability." delay={0} />
            <FeatureHighlight icon="task" title="Task Management" description="Break down work into tasks with priorities, deadlines, and team ownership." delay={0.1} />
            <FeatureHighlight icon="time" title="Time Entries" description="Track billable and non-billable hours with precision." delay={0.2} />
            <FeatureHighlight icon="client" title="Client Accounts" description="Keep all client details, projects, and billing info in one place." delay={0.3} />
            <FeatureHighlight icon="feedback" title="Feedback System" description="Collect actionable feedback from clients and team members." delay={0.4} />
            <FeatureHighlight icon="employee" title="Employee Directory" description="View your entire team, their roles, and current assignments." delay={0.5} />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FeaturesOverviewSection;

// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import SectionHeading from '../../ui/SectionHeading'; // Reusing existing SectionHeading

// const AboutHero: React.FC = () => {
//   return (
//     <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
//       <div className="container mx-auto px-4 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: 'easeOut' }}
//         >
//           <SectionHeading
//             title="About Fristine Infotech"
//             subtitle="At DSV Corporation, we deliver custom software solutions that drive innovation and growth. From web and mobile apps to cloud-native and serverless architectures, our expert team builds scalable, tailored systems. We also embed AI/ML to streamline operations and unlock powerful insights. Partner with us to turn your digital vision into reality."
//             titleClassName="text-5xl lg:text-6xl"
//             subtitleClassName="text-lg lg:text-xl max-w-3xl"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default AboutHero;


'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../../ui/SectionHeading'; // Reusing existing SectionHeading

const AboutHero: React.FC = () => {
  const subtitleText = "At DSV Corporation, we deliver custom software solutions that drive innovation and growth. From web and mobile apps to cloud-native and serverless architectures, our expert team builds scalable, tailored systems. We also embed AI/ML to streamline operations and unlock powerful insights. Partner with us to turn your digital vision into reality.";
  const words = subtitleText.split(' '); // Split the subtitle into individual words

  const [displayedText, setDisplayedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    if (wordIndex < words.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + words[wordIndex] + ' ');
        setWordIndex((prev) => prev + 1);
      }, 150); // Adjust this value to control the speed (milliseconds per word)
      return () => clearTimeout(timeout);
    }
  }, [wordIndex, words]);

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <SectionHeading
            title="About DSVCorp"
            titleClassName="text-5xl lg:text-6xl"
            subtitleClassName="text-lg lg:text-xl max-w-3xl"
            subtitle={
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {displayedText}
              </motion.span>
            }
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
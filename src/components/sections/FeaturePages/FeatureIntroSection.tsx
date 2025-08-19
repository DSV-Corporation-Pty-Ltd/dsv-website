'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

interface FeatureIntroSectionProps {
  title: string;
  subtitle: string;
  imageUrl?: string; // Optional image for the intro
  imageAlt?: string;
  children?: React.ReactNode; // For additional content like icons
  className?: string;
}

const FeatureIntroSection: React.FC<FeatureIntroSectionProps> = ({
  title,
  subtitle,
  imageUrl,
  imageAlt,
  children,
  className,
}) => {
  return (
    <section className={twMerge("bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-28", className)}>
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {children && <div className="mb-6">{children}</div>} {/* Render children (e.g., an icon) */}
          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            {title}
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>
        {imageUrl && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="mt-16"
          >
             
            <img
              src={imageUrl}
              alt={imageAlt || title}
              className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 mx-auto w-full max-w-5xl"
            />
          
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FeatureIntroSection;




// 'use client';

// import React from 'react';
// import { motion, Easing } from 'framer-motion';
// import { twMerge } from 'tailwind-merge';
// import Image from 'next/image';
// import Button from '../../ui/Button';

// interface FeatureIntroSectionProps {
//   title: string;
//   subtitle: string;
//   imageUrl: string; // This prop will now receive a local path like "/images/my-product-screenshot.png"
//   imageAlt: string;
//   className?: string;
// }

// const FeatureIntroSection: React.FC<FeatureIntroSectionProps> = ({
//   title,
//   subtitle,
//   imageUrl, // This is where the local path will be passed
//   imageAlt,
//   className,
// }) => {
//   return (
//     <section className={twMerge("bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32 min-h-screen flex items-center", className)}>
//       {/* Background Animated Shapes (remains unchanged) */}
//       {/* ... (your existing background shapes code) ... */}

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Left Column: Text Content and CTAs (remains unchanged) */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: 'easeOut' }}
//             className="text-center lg:text-left"
//           >
//             <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
//               {title}
//             </h1>
//             <p className="mt-6 text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto lg:mx-0 mb-10">
//               {subtitle}
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
//               <Button size="large">Get Started For Free</Button>
//               <Button variant="outline" size="large" className="flex items-center justify-center">
//                 Sign Up
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
//                 </svg>
//               </Button>
//             </div>

//             {/* "No credit card required" */}
//             <p className="text-sm text-gray-600 mb-8 text-center lg:text-left">
//               no credit card required
//             </p>

//             {/* Social/Rating Icons */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
//               className="flex flex-wrap justify-center lg:justify-start gap-6 mt-10"
//             >
//               {/* Reminder: Replace these placeholder SVGs with actual Image components
//                   pointing to your local icon files (e.g., <Image src="/images/google.svg" alt="Google" width={24} height={24} />) */}
//               <div className="text-gray-700 flex items-center space-x-1">
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.082-.743.08-.729.08-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.492.998.108-.776.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.399.008 0 .016 0 .024 0 1.02.001 2.046.133 3.004.401 2.292-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.923.43.372.823 1.102.823 2.222v3.293c0 .319.192.602.802.578 4.765-1.589 8.2-6.086 8.2-11.386C24 5.373 18.627 0 12 0z"/></svg>
//                 <span className="font-bold text-gray-800">SourceForge</span>
//                 <span className="text-yellow-500">★★★★★</span>
//               </div>
//               <div className="text-gray-700 flex items-center space-x-1">
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38.119-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm4.902 4.075c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38.119-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm-.051 4.959h-4.902v-4.901h4.902v4.901zm-4.902 4.901h4.902v-4.901h-4.902v4.901z"/></svg>
//                 <span className="font-bold text-gray-800">Trustpilot</span>
//                 <span className="text-yellow-500">★★★★★</span>
//               </div>
//               <div className="text-gray-700 flex items-center space-x-1">
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 2H2v20h20V2zM12 18H6v-6h6v6zM18 18h-4v-6h4v6zM12 10H6V4h6v6zM18 10h-4V4h4v6z"/></svg>
//                 <span className="font-bold text-gray-800">Product Hunt</span>
//                 <span className="text-yellow-500">★★★★★</span>
//               </div>
//               <div className="text-gray-700 flex items-center space-x-1">
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.082-.743.08-.729.08-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.492.998.108-.776.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.399.008 0 .016 0 .024 0 1.02.001 2.046.133 3.004.401 2.292-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.923.43.372.823 1.102.823 2.222v3.293c0 .319.192.602.802.578 4.765-1.589 8.2-6.086 8.2-11.386C24 5.373 18.627 0 12 0z"/></svg>
//                 <span className="font-bold text-gray-800">G2</span>
//                 <span className="text-yellow-500">★★★★★</span>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Right Column: Product Screenshot/Illustration */}
//           <motion.div
//             initial={{ opacity: 0, x: 50, rotate: 10 }}
//             animate={{ opacity: 1, x: 0, rotate: 0 }}
//             transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
//             className="flex justify-center lg:justify-end mt-16 lg:mt-0 relative"
//           >
//             <div className="w-full max-w-lg h-auto rounded-lg shadow-2xl overflow-hidden ring-4 ring-blue-300/50 transform rotate-[5deg]">
//               <Image
//                 src={imageUrl} // Now expects a local path like "/images/my-product-screenshot.png"
//                 alt={imageAlt}
//                 width={800} // IMPORTANT: Set these to the actual dimensions of your local image file
//                 height={600} // IMPORTANT: Set these to the actual dimensions of your local image file
//                 layout="responsive"
//                 objectFit="contain"
//                 className="rounded-lg"
//                 // The onError prop is typically not needed for locally hosted images,
//                 // as Next.js handles them directly from the public folder.
//               />
//             </div>
//             {/* Shadow element (optional, for more depth) */}
//             <div className="absolute inset-0 bg-black opacity-10 rounded-lg transform rotate-[-5deg] scale-95 translate-y-2 translate-x-2 -z-10 blur-sm hidden lg:block"></div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeatureIntroSection;



// 'use client';

// import React from 'react';
// import { motion, Easing } from 'framer-motion';
// import { twMerge } from 'tailwind-merge';
// import Image from 'next/image';
// import Button from '../../ui/Button';

// interface FeatureIntroSectionProps {
//   title: string;
//   subtitle: string;
//   imageUrl: string;
//   imageAlt: string;
//   className?: string;
// }

// const FeatureIntroSection: React.FC<FeatureIntroSectionProps> = ({
//   title,
//   subtitle,
//   imageUrl,
//   imageAlt,
//   className,
// }) => {
//   return (
//     <section className={twMerge("bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32 min-h-screen flex items-center", className)}>
//       {/* Background Animated Shapes (remains unchanged) */}
//       {/* ... (your existing background shapes code) ... */}

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Left Column: Text Content and CTAs (remains unchanged) */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: 'easeOut' }}
//             className="text-center lg:text-left"
//           >
//             <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
//               {title}
//             </h1>
//             <p className="mt-6 text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto lg:mx-0 mb-10">
//               {subtitle}
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
//               <Button size="large">Get Started For Free</Button>
//               <Button variant="outline" size="large" className="flex items-center justify-center">
//                 Sign Up
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
//                 </svg>
//               </Button>
//             </div>

//             {/* "No credit card required" */}
//             <p className="text-sm text-gray-600 mb-8 text-center lg:text-left">
//               no credit card required
//             </p>

//             {/* Social/Rating Icons */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
//               className="flex flex-wrap justify-center lg:justify-start gap-6 mt-10"
//             >
//               <div className="text-gray-700 flex items-center space-x-1">
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.082-.743.08-.729.08-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.492.998.108-.776.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.399.008 0 .016 0 .024 0 1.02.001 2.046.133 3.004.401 2.292-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.923.43.372.823 1.102.823 2.222v3.293c0 .319.192.602.802.578 4.765-1.589 8.2-6.086 8.2-11.386C24 5.373 18.627 0 12 0z"/></svg>
//                 <span className="font-bold text-gray-800">SourceForge</span>
//                 <span className="text-yellow-500">★★★★★</span>
//               </div>
//               <div className="text-gray-700 flex items-center space-x-1">
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38.119-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm4.902 4.075c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38.119-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm-.051 4.959h-4.902v-4.901h4.902v4.901zm-4.902 4.901h4.902v-4.901h-4.902v4.901z"/></svg>
//                 <span className="font-bold text-gray-800">Trustpilot</span>
//                 <span className="text-yellow-500">★★★★★</span>
//               </div>
//               <div className="text-gray-700 flex items-center space-x-1">
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 2H2v20h20V2zM12 18H6v-6h6v6zM18 18h-4v-6h4v6zM12 10H6V4h6v6zM18 10h-4V4h4v6z"/></svg>
//                 <span className="font-bold text-gray-800">Product Hunt</span>
//                 <span className="text-yellow-500">★★★★★</span>
//               </div>
//               <div className="text-gray-700 flex items-center space-x-1">
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.082-.743.08-.729.08-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.492.998.108-.776.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.399.008 0 .016 0 .024 0 1.02.001 2.046.133 3.004.401 2.292-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.923.43.372.823 1.102.823 2.222v3.293c0 .319.192.602.802.578 4.765-1.589 8.2-6.086 8.2-11.386C24 5.373 18.627 0 12 0z"/></svg>
//                 <span className="font-bold text-gray-800">G2</span>
//                 <span className="text-yellow-500">★★★★★</span>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Right Column: Product Screenshot/Illustration */}
//           <motion.div
//             initial={{ opacity: 0, x: 50, rotate: 10 }}
//             animate={{ opacity: 1, x: 0, rotate: 0 }}
//             transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
//             className="flex justify-center lg:justify-end mt-16 lg:mt-0 relative"
//           >
//             <div className="w-full max-w-3xl h-auto rounded-lg shadow-2xl overflow-hidden ring-4 ring-blue-300/50 transform rotate-[-5deg]">
//               <Image
//                 src={imageUrl}
//                 alt={imageAlt}
//                 width={800} // Set these to the actual dimensions of your local image file for best optimization
//                 height={600} // Set these to the actual dimensions of your local image file for best optimization
//                 layout="responsive"
//                 objectFit="contain"
//                 className="rounded-lg"
//               />
//             </div>
//             {/* Shadow element (optional, for more depth) */}
//             <div className="absolute inset-0 bg-black opacity-10 rounded-lg transform rotate-[-5deg] scale-95 translate-y-2 translate-x-2 -z-10 blur-sm hidden lg:block"></div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeatureIntroSection;
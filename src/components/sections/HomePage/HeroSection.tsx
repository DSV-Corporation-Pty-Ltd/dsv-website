// 'use client';

// import React from 'react';
// import { motion, Easing } from 'framer-motion'; // Import Easing type
// import Button from '../../ui/Button'; // Assuming Button component is in this path

// const HeroSection: React.FC = () => {
//   // Define variants for the floating shapes
//   const shapeVariants = {
//     initial: {
//       opacity: 0,
//       scale: 0,
//       rotate: 0,
//     },
//     animate: (i: number) => ({
//       opacity: [0, 0.1, 0.15, 0.1], // Subtle fade in and out
//       scale: [0.5, 1, 1.2, 1],      // Gentle size change
//       rotate: [0, 90, 180, 270, 360], // Rotation
//       y: [0, -20, 0, 20, 0],         // Subtle vertical float
//       x: [0, 20, 0, -20, 0],         // Subtle horizontal float
//       transition: {
//         duration: 15 + i * 2, // Longer, varied durations for fluid movement
//         ease: "easeInOut" as Easing, // <--- FIX IS HERE: Type assertion
//         repeat: Infinity,    // Loop indefinitely
//         delay: i * 0.5,      // Stagger initial appearance
//       },
//     }),
//   };

//   const shapes = [
//     { id: 1, className: "bg-red-300 rounded-full w-24 h-24", style: { top: '10%', left: '15%' } },
//     { id: 2, className: "bg-indigo-300 rounded-lg w-16 h-16 transform rotate-45", style: { bottom: '20%', right: '10%' } },
//     { id: 3, className: "bg-purple-300 rounded-full w-20 h-20", style: { top: '5%', right: '25%' } },
//     { id: 4, className: "bg-green-300 rounded-full w-12 h-12", style: { bottom: '5%', left: '5%' } },
//     { id: 5, className: "bg-yellow-300 rounded-lg w-20 h-20 transform rotate-12", style: { top: '30%', right: '5%' } },
//     { id: 6, className: "bg-red-300 rounded-full w-16 h-16", style: { bottom: '15%', left: '30%' } },
//   ];

//   return (
//     <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32 overflow-hidden">
//       {/* Background Animated Shapes Container */}
//       <div className="absolute inset-0 w-full h-full pointer-events-none">
//         {shapes.map((shape, i) => (
//           <motion.span
//             key={shape.id}
//             className={`absolute ${shape.className}`}
//             style={shape.style}
//             variants={shapeVariants}
//             initial="initial"
//             animate="animate"
//             custom={i} // Pass index as custom prop for varied animation
//           />
//         ))}
//       </div>

//       <div className="container mx-auto px-4 text-center relative z-10"> {/* z-10 ensures content is above shapes */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: 'easeOut' }}
//         >
//           <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
//             Simplify Your Work.<br />Deliver Projects with Precision.
//           </h1>
//           <p className="mt-6 text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
//             Manage projects, track time, collaborate with your team, and keep clients in the loop—all in one clean, easy-to-use workspace.
//           </p>
//           <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
//             <Button size="large">Try It Free</Button>
//             <Button variant="outline" size="large">Book a Demo</Button>
//           </div>
//         </motion.div>
//         {/* You can add an illustration/screenshot here */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
//           className="mt-16"
//         >
//           {/* Placeholder for a compelling product screenshot or illustration */}
//           <div className="bg-blue-200 rounded-lg h-80 w-full max-w-5xl mx-auto flex items-center justify-center text-blue-800 text-lg font-semibold border-2 border-blue-300/50 shadow-lg">
//             [Product Screenshot / Illustration Goes Here]
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

"use client";

import React from "react";
import { motion, Easing } from "framer-motion";
import Button from "../../ui/Button"; // Assuming Button component is in this path
import Image from "next/image"; // For optimized image handling

const HeroSection: React.FC = () => {
  // Define variants for the floating shapes (keeping them as is, but adjusted opacity for darker shapes)
  const shapeVariants = {
    initial: {
      opacity: 0,
      scale: 0,
      rotate: 0,
    },
    animate: (i: number) => ({
      opacity: [0, 0.08, 0.12, 0.08], // Subtle fade in and out for darker shapes
      scale: [0.5, 1, 1.2, 1],
      rotate: [0, 90, 180, 270, 360],
      y: [0, -20, 0, 20, 0],
      x: [0, 20, 0, -20, 0],
      transition: {
        duration: 15 + i * 2,
        ease: "easeInOut" as Easing,
        repeat: Infinity,
        delay: i * 0.5,
      },
    }),
  };

  // Darker colors for the animated shapes as per previous request
  const shapes = [
    {
      id: 1,
      className: "bg-blue-600 rounded-full w-24 h-24",
      style: { top: "10%", left: "15%" },
    },
    {
      id: 2,
      className: "bg-indigo-700 rounded-lg w-16 h-16 transform rotate-45",
      style: { bottom: "20%", right: "10%" },
    },
    {
      id: 3,
      className: "bg-purple-600 rounded-full w-20 h-20",
      style: { top: "5%", right: "25%" },
    },
    {
      id: 4,
      className: "bg-green-700 rounded-full w-12 h-12",
      style: { bottom: "5%", left: "5%" },
    },
    {
      id: 5,
      className: "bg-yellow-600 rounded-lg w-20 h-20 transform rotate-12",
      style: { top: "30%", right: "5%" },
    },
    {
      id: 6,
      className: "bg-red-700 rounded-full w-16 h-16",
      style: { bottom: "15%", left: "30%" },
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32 overflow-hidden min-h-[80vh] flex items-center">
      {/* Background Animated Shapes Container */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {shapes.map((shape, i) => (
          <motion.span
            key={shape.id}
            className={`absolute ${shape.className}`}
            style={shape.style}
            variants={shapeVariants}
            initial="initial"
            animate="animate"
            custom={i}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content and CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Managing Projects <br className="hidden lg:inline" />
              Gets Easy
            </h1>
            <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto lg:mx-0 mb-10">
              Plan, track, and manage your projects and tasks with precision to
              enhance team productivity and ensure every goal is met on time.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <Button size="large">Book A Demo</Button>
              <Button
                variant="outline"
                size="large"
                className="flex items-center justify-center"
              >
                Start Free Trial
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </div>

            {/* Additional Info */}
            <div className="text-sm text-gray-600 mb-8 flex flex-col sm:flex-row justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-8">
              <p>Get queries answered from experts</p>
              <p>No credit card required</p>
            </div>

            {/* Available For & Rating Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center lg:items-start mt-10"
            >
              <p className="font-semibold text-gray-800 mb-4">Available for:</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
                {/* App Icons (replace with actual icons or SVGs) */}
                <div className="text-gray-700 text-3xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93h7v7.93zm1-15.93c3.95.49 7 3.85 7 7.93h-7V4.07z" />
                  </svg>{" "}
                  {/* iOS */}
                </div>
                <div className="text-gray-700 text-3xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 16H8V6h8v12z" />
                  </svg>{" "}
                  {/* Windows */}
                </div>
                <div className="text-gray-700 text-3xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93h7v7.93zm1-15.93c3.95.49 7 3.85 7 7.93h-7V4.07z" />
                  </svg>{" "}
                  {/* Android (using generic mobile icon) */}
                </div>
                <div className="text-gray-700 text-3xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93h7v7.93zm1-15.93c3.95.49 7 3.85 7 7.93h-7V4.07z" />
                  </svg>{" "}
                  {/* Linux (using generic desktop icon) */}
                </div>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                {/* Rating Badges (replace with actual images or SVGs) */}
                <div className="flex items-center space-x-1">
                  <span className="font-bold text-gray-800">SourceForge</span>
                  <span className="text-yellow-500">★★★★★</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="font-bold text-gray-800">Trustpilot</span>
                  <span className="text-yellow-500">★★★★★</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="font-bold text-gray-800">Product Hunt</span>
                  <span className="text-yellow-500">★★★★★</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="font-bold text-gray-800">G2</span>
                  <span className="text-yellow-500">★★★★★</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Product Screenshot/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex justify-center lg:justify-end mt-16 lg:mt-0"
          >
            {/* Placeholder for a compelling product screenshot or illustration */}
            <div className="w-full max-w-lg h-auto rounded-lg shadow-2xl overflow-hidden ring-4 ring-blue-300/50">
              <Image
                src="/images/image.png" // Local path
                alt="Product Dashboard Screenshot"
                width={800} // Actual width of your image
                height={600} // Actual height of your image
                // layout="responsive" is deprecated in newer Next.js versions.
                // Simply defining width/height with objectFit will behave responsively.
                objectFit="contain"
                className="rounded-lg"
                // onError is good for debugging but might not be needed for local files
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

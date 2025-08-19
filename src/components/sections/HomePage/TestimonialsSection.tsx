// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import SectionHeading from '../../ui/SectionHeading';
// import Card from '../../ui/Card';

// interface TestimonialCardProps {
//   quote: string;
//   author: string;
//   role: string;
//   delay: number;
// }

// const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, role, delay }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.9 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.6, delay: delay, ease: 'easeOut' }}
//       className="h-full"
//     >
//       <Card className="flex flex-col justify-between h-full">
//         <p className="text-lg text-gray-700 italic mb-6">
//           &ldquo;{quote}&rdquo;
//         </p>
//         <div>
//           <p className="font-semibold text-gray-900">{author}</p>
//           <p className="text-sm text-gray-500">{role}</p>
//         </div>
//       </Card>
//     </motion.div>
//   );
// };

// const TestimonialsSection: React.FC = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.2,
//   });

//   return (
//     <section className="py-20 lg:py-28 bg-blue-50" ref={ref}>
//       <div className="container mx-auto px-4">
//         <SectionHeading
//           title="What Our Users Say"
//           subtitle="Hear from project managers and teams who've found clarity with SimplifyWork."
//         />
//         {inView && (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <TestimonialCard
//               quote="We moved from spreadsheets to this tool and never looked back. Project delivery is smoother, and billing is more transparent."
//               author="Alex T."
//               role="Operations Director"
//               delay={0}
//             />
//             <TestimonialCard
//               quote="Finally a tool that balances simplicity with power. Our team collaboration has never been this effective."
//               author="Jane D."
//               role="Project Manager"
//               delay={0.1}
//             />
//             <TestimonialCard
//               quote="SimplifyWork has transformed how we manage client projects. The feedback system is a game-changer!"
//               author="Mark R."
//               role="Agency Owner"
//               delay={0.2}
//             />
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;


'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../../ui/SectionHeading';
import Card from '../../ui/Card';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  // delay: number; // No longer directly used for continuous animation, but can be for initial staggered appearance
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, role }) => {
  return (
    // motion.div here for initial fade-in, but the continuous scroll is on the parent
    // flex-shrink-0: prevents the card from shrinking in the flex container
    // w-full md:w-1/2 lg:w-1/3: defines the width of each card responsively, so multiple cards can be visible
    <motion.div
      // You can keep an initial animation for each card as it enters the view for the first time
      // initial={{ opacity: 0, scale: 0.9 }}
      // animate={{ opacity: 1, scale: 1 }}
      // transition={{ duration: 0.6, delay: delay, ease: 'easeOut' }} // Delay is now managed by the map index
      className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4 py-2 box-border" // Added px-4 py-2 for padding around the card itself
    >
      <Card className="flex flex-col justify-between h-full hover:shadow-lg hover:border-blue-300 transition-all duration-300 ease-in-out">
     
        <p className="text-lg text-gray-700 italic mb-6 break-words whitespace-pre-wrap w-full">
  &ldquo;{quote}&rdquo;
</p>
        <div>
          <p className="font-semibold text-gray-900">{author}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </Card>
    </motion.div>
  );
};

const TestimonialsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger initial card animation once
    threshold: 0.1,    // Trigger when 10% of the element is in view
  });

  // Define your testimonials data
  const testimonials = [
    {
      quote: "We moved from spreadsheets to this tool and never looked back. Project delivery is smoother, and billing is more transparent.",
      author: "Alex T.",
      role: "Operations Director",
    },
    {
      quote: "Finally a tool that balances simplicity with power. Our team collaboration has never been this effective.",
      author: "Jane D.",
      role: "Project Manager",
    },
    {
      quote: "SimplifyWork has transformed how we manage client projects. The feedback system is a game-changer!",
      author: "Mark R.",
      role: "Agency Owner",
    },
    {
      quote: "The intuitive interface makes daily task management a breeze, saving us hours every week.",
      author: "Sarah L.",
      role: "Team Lead",
    },
    {
      quote: "Client communication is streamlined, and project updates are clear and concise. Highly recommend!",
      author: "David K.",
      role: "Freelance Consultant",
    },
    {
      quote: "Our team's productivity has significantly increased since we started using SimplifyWork. It's a lifesaver!",
      author: "Emily C.",
      role: "Marketing Manager",
    },
  ];

  // Duplicate the testimonials to create a seamless infinite scroll effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 lg:py-28 bg-blue-50 relative overflow-hidden" ref={ref}> {/* Added relative and overflow-hidden */}
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          title="What Our Users Say"
          subtitle="Hear from project managers and teams who've found clarity with SimplifyWork."
        />
      </div>

      {inView && ( // Only render the scrolling part when in view for performance
        <div className="relative w-full overflow-hidden mt-12"> {/* Outer container for the scrolling track */}
          <motion.div
            initial={{ x: 0 }} // Start at 0
            animate={{ x: '-50%' }} // Animate to -50% to loop the duplicated content
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40, // Match the duration from tailwind.config.js (40s)
                ease: "linear",
              },
            }}
            // You can also use the Tailwind animation class here if you prefer
            // className="flex whitespace-nowrap gap-x-8 animate-scroll-left-slow"
            // For a mix of Framer Motion for initial effects and CSS for continuous,
            // we'll explicitly use Framer Motion for the continuous loop here
            className="flex whitespace-nowrap gap-x-8"
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index} // Using index as key here because data is duplicated. In a real app, use unique IDs.
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                // Initial stagger effect for the entire set of cards as they first appear
                // This delay is only for the initial render, not the continuous scroll
                // delay={index * 0.05} // Smaller stagger for a smoother initial appearance
              />
            ))}
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default TestimonialsSection;
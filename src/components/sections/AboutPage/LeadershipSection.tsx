'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../../ui/SectionHeading';
import LeaderCard from '../../ui/LeaderCard'; // Import the new LeaderCard component

const LeadershipSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const leaders = [
    {
      name: ' Mr. Pratik Modi ',
      title: 'Chief Executive Officer (CEO)',
      imageSrc: 'https://media.licdn.com/dms/image/v2/C4D03AQGFBfPM9Wvufg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1601975289970?e=2147483647&v=beta&t=Y1FemezMqDhT3bTMRFWe0GBubYsC_zqJgeyA8kV58iM', // Placeholder image for CEO
      imageAlt: 'Dr. Anya Sharma, CEO',
      quote: 'Innovation is not just about new features; it’s about simplifying complexity to empower every user.',
    },
    {
      name: 'Mr. Paras Shah',
      title: 'Chief Technology Officer (CTO)',
      imageSrc: 'https://placehold.co/200x200/818cf8/ffffff?text=CTO', // Placeholder image for CTO
      imageAlt: 'Mr. Rohan Kapoor, CTO',
      quote: 'Our technology is built on a foundation of reliability and scalability, ensuring our users can always depend on us.',
    },
    // Add more leaders if needed
    // {
    //   name: 'Ms. Priya Singh',
    //   title: 'Head of Product',
    //   imageSrc: 'https://placehold.co/200x200/fcd34d/ffffff?text=Product',
    //   imageAlt: 'Ms. Priya Singh, Head of Product',
    //   quote: 'User experience is at the heart of everything we build. It must be intuitive and delightful.',
    // },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Meet Our Leadership"
          subtitle="Guiding Fristine Infotech with expertise, vision, and dedication."
        />
        {inView && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 justify-center">
            {leaders.map((leader, index) => (
              <LeaderCard
                key={leader.name}
                name={leader.name}
                title={leader.title}
                imageSrc={leader.imageSrc}
                imageAlt={leader.imageAlt}
                quote={leader.quote}
                delay={index * 0.15} // Staggered animation
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default LeadershipSection;
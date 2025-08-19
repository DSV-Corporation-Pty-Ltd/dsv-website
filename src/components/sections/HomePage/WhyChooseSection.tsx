'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../../ui/SectionHeading'; // Reusing existing SectionHeading
import WhyChooseCard from '../../ui/WhyChooseCard'; // Import the new WhyChooseCard

const WhyChooseSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animates once when scrolled into view
    threshold: 0.1,    // Trigger when 10% of the component is visible
  });

  const reasons = [
    {
      number: 1,
      title: "Plan, organize, track all your projects in one place",
      description: "Manage projects, track time, collaborate with your team, and keep clients in the loop—all in one clean, easy-to-use workspace.",
      bgColor: "bg-orange-300",
      rotation: -3,
      translateX: -10,
    },
    {
      number: 2,
      title: "Get a visibility over individual tasks in the form of kanban boards",
      description: "Assign tasks, set priorities, and manage deadlines across teams. Use Kanban or list views to stay on top of work.",
      bgColor: "bg-green-300",
      rotation: 2,
      translateX: 5,
    },
    {
      number: 3,
      title: "Track the project schedule using gantt chart and calendar view",
      description: "Visual timelines, progress tracking, and real-time updates help keep everything on schedule.",
      bgColor: "bg-red-300",
      rotation: -5,
      translateX: -15,
    },
    {
      number: 4,
      title: "Create advanced workflows with powerful automations",
      description: "Automate repetitive tasks, set up notifications, and streamline approvals for efficient project delivery.",
      bgColor: "bg-teal-300",
      rotation: 3,
      translateX: 10,
    },
    {
      number: 5,
      title: "Track employee activities, and working hours using built-in time tracking software, Clockly",
      description: "Log hours effortlessly and categorize them as billable or non-billable. Generate timesheets for invoicing or payroll.",
      bgColor: "bg-purple-300",
      rotation: -2,
      translateX: -5,
    },
    {
      number: 6,
      title: "Monitor activities using screen recorder on Windows, Mac and Linux devices",
      description: "Gain insights into team activity and optimize productivity with discreet screen recording capabilities.",
      bgColor: "bg-purple-400", // Slightly different shade for variety
      rotation: 4,
      translateX: 12,
    },
    {
      number: 7,
      title: "Set S.M.A.R.T goals and achieve results",
      description: "Define Specific, Measurable, Achievable, Relevant, and Time-bound goals for clear objectives.",
      bgColor: "bg-orange-400",
      rotation: -4,
      translateX: -8,
    },
    {
      number: 8,
      title: "Share files and collaborate with team through discussion boards",
      description: "Centralize communication and ensure no input is missed with integrated feedback and discussion tools.",
      bgColor: "bg-blue-400",
      rotation: 1,
      translateX: 3,
    },
    {
      number: 9,
      title: "Unbelievable pricing - the lowest you will ever find",
      description: "Simple, transparent pricing plans designed to fit teams of all sizes without hidden fees.",
      bgColor: "bg-pink-400",
      rotation: -3,
      translateX: -10,
    },
    {
      number: 10,
      title: "Everything your business needs - 50+ apps, 24/5 support and 99.95% uptime",
      description: "Get comprehensive tools, reliable support, and guaranteed uptime to keep your operations running smoothly.",
      bgColor: "bg-yellow-400",
      rotation: 2,
      translateX: 7,
    },
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Why Choose DSV360 for Your Project Management?"
          subtitle="Top 10 reasons why your business should use Project Manager and 50+ other apps from 500apps"
        />
        {inView && ( // Only render and animate if in view
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12 mt-12 relative">
            {reasons.map((reason, index) => (
              <WhyChooseCard
                key={reason.number}
                number={reason.number}
                title={reason.title}
                description={reason.description}
                bgColor={reason.bgColor}
                initialRotation={reason.rotation}
                initialTranslateX={reason.translateX}
                delay={index * 0.05} // Staggered initial animation for each card
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default WhyChooseSection;
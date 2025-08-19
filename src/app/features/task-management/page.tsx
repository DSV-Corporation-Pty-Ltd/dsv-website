import React from 'react';
import FeatureIntroSection from '../../../components/sections/FeaturePages/FeatureIntroSection';
import FeatureBenefitsSection from '../../../components/sections/FeaturePages/FeatureBenefitsSection';
import FeatureCtaSection from '../../../components/sections/FeaturePages/FeatureCtaSection';

// You can use a specific icon for this page, or even an SVG animationconst ProjectManagementIcon = (props: any) => (

const ProjectManagementIcon = (props: any) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

export default function TaskManagementPage() {
  return (
    <>
      <FeatureIntroSection
        title="Manage Tasks Like a Pro"
        subtitle="Track tasks through every stage—from To-Do to Done. Collaborate, comment, and complete work faster."
        imageUrl="/images/Task.png" // Placeholder image
        imageAlt="Task Management Dashboard"
      >
        <div className="bg-blue-200 rounded-full p-4 inline-flex mb-4">
            <ProjectManagementIcon className="h-12 w-12 text-blue-700" />
        </div>
      </FeatureIntroSection>

      <FeatureBenefitsSection
        headline="Create Task in Seconds"
        benefits={[
          "Task lists & Kanban board",
          "Subtasks & priorities.",
          "Deadlines and status tracking.",
          "Comments & file attachments",
        ]}
        imageUrl="/images/task2.png" // Placeholder image
        imageAlt="Task Dashboard Screenshot"
      />

      <FeatureBenefitsSection
        headline="Collaborate Seamlessly"
        benefits={[
          "Real-time updates keep everyone in the loop.",
          "Centralized communication for all Task discussions.",
          // "Attach files and documents directly to projects.",
          "Generate comprehensive reports for stakeholders.",
        ]}
        imageUrl="/images/task3.png" // Placeholder image
        imageAlt="Team Collaboration Interface"
        reverse={true} // Reverse layout for this section
      />

      {/* You can add more sections here like use cases, specific features etc. */}

      <FeatureCtaSection
        title="Ready to master your Tasks?"
        buttonText="Try Project Management"
        buttonLink="/auth/signup"
      />
    </>
  );
}
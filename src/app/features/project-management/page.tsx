import React from 'react';
import FeatureIntroSection from '../../../components/sections/FeaturePages/FeatureIntroSection';
import FeatureBenefitsSection from '../../../components/sections/FeaturePages/FeatureBenefitsSection';
import FeatureCtaSection from '../../../components/sections/FeaturePages/FeatureCtaSection';
import { SVGProps } from 'react';

// You can use a specific icon for this page, or even an SVG animation
const ProjectManagementIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.234 8.234L15 14.25m2.25 2.25l-1.5-1.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

export default function ProjectManagementPage() {
  return (
    <>
      <FeatureIntroSection
        title="Best Project Management"
        subtitle="Plan, monitor, and complete projects without chaos. Get a clear overview of every milestone, task, and deadline."
        imageUrl="/images/Dashboard.png" // Placeholder image
        imageAlt="Project Management Dashboard"
      >
        <div className="bg-blue-200 rounded-full p-4 inline-flex mb-4">
            <ProjectManagementIcon className="h-12 w-12 text-blue-700" />
        </div>
      </FeatureIntroSection>

      <FeatureBenefitsSection
        headline="Create Projects in Seconds"
        benefits={[
          "Quickly spin up new projects and assign owners.",
          "Visualize progress, status, and timelines in one place.",
          "Set key goals and keep your team aligned with milestones.",
          "Control access with role-based visibility and permissions.",
        ]}
        imageUrl="/images/project1.png" // Placeholder image
        imageAlt="Project Dashboard Screenshot"
      />

      <FeatureBenefitsSection
        headline="Collaborate Seamlessly"
        benefits={[
          "Real-time updates keep everyone in the loop.",
          "Centralized communication for all project discussions.",
          "Attach files and documents directly to projects.",
          "Generate comprehensive reports for stakeholders.",
        ]}
        imageUrl="/images/project.png" // Placeholder image
        imageAlt="Team Collaboration Interface"
        reverse={true} // Reverse layout for this section
      />

      {/* You can add more sections here like use cases, specific features etc. */}

      <FeatureCtaSection
        title="Ready to master your projects?"
        buttonText="Try Project Management"
        buttonLink="/auth/signup"
      />
    </>
  );
}
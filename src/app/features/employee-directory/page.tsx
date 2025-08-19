import React from 'react';
import FeatureIntroSection from '../../../components/sections/FeaturePages/FeatureIntroSection';
import FeatureBenefitsSection from '../../../components/sections/FeaturePages/FeatureBenefitsSection';
import FeatureCtaSection from '../../../components/sections/FeaturePages/FeatureCtaSection';

// You can use a specific icon for this page, or even an SVG animationconst ProjectManagementIcon = (props: any) => (
import { SVGProps } from 'react';

const ProjectManagementIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
    </svg>
);

export default function EmployeeManagementPage() {
  return (
    <>
      <FeatureIntroSection
        title="Know Who’s On Your Organization"
        subtitle="See everyone in your organization, their roles, current tasks, and how they fit into projects."
        imageUrl="/images/employee1.png" // Placeholder image
        imageAlt="Employee Management Dashboard"
      >
        <div className="bg-blue-200 rounded-full p-4 inline-flex mb-4">
            <ProjectManagementIcon className="h-12 w-12 text-blue-700" />
        </div>
      </FeatureIntroSection>

      <FeatureBenefitsSection
        headline="Create Employee Accounts in Seconds"
        benefits={[
          "Add new employees by entering basic details.",
          "Send a verification email automatically.",
          "Let employees set their password to verify their account.",
          "Give access to the employee portal after verification.",
        ]}
        imageUrl="/images/employee2.png" // Placeholder image
        imageAlt="Task Dashboard Screenshot"
      />

      <FeatureBenefitsSection
        headline="Detailed Every Employee in one place"
        benefits={[
          "Store full profile details in one place.",
          "Track each employee's assigned projects and tasks.",
          // "Attach files and documents directly to projects.",
          "Easily access and manage all employee data from a central dashboard.",
        ]}
        imageUrl="/images/employee3.png" // Placeholder image
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
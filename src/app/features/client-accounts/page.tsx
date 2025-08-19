import React from 'react';
import FeatureIntroSection from '../../../components/sections/FeaturePages/FeatureIntroSection';
import FeatureBenefitsSection from '../../../components/sections/FeaturePages/FeatureBenefitsSection';
import FeatureCtaSection from '../../../components/sections/FeaturePages/FeatureCtaSection';
import { SVGProps } from 'react';

// You can use a specific icon for this page, or even an SVG animationconst ProjectManagementIcon = (props: any) => (

const ProjectManagementIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.75c0 .621-.504 1.125-1.125 1.125H5.625c-.621 0-1.125-.504-1.125-1.125V9.75M18 18.75V9.75m0 9.003L15.375 12M18 12.75l-2.625-2.625M5.232 10.617 10 6" />
    </svg>
);

export default function AccountsManagementPage() {
  return (
    <>
      <FeatureIntroSection
        title="Everything You Need to Manage Clients"
        subtitle="Each client has a dedicated profile with project details, billing, and communication logs—all in one place."
        imageUrl="/images/accounts1.png" // Placeholder image
        imageAlt="Task Management Dashboard"
      >
        <div className="bg-blue-200 rounded-full p-4 inline-flex mb-4">
            <ProjectManagementIcon className="h-12 w-12 text-blue-700" />
        </div>
      </FeatureIntroSection>

      <FeatureBenefitsSection
        headline="Create Client Accounts in Seconds"
        benefits={[
          "Add new clients with just enters some basic details",
          "keep all client info in one place.",
          "Invite clients Contacts to view projects or invoices right away.",
          "Keep safe client Data",
        ]}
        imageUrl="/images/accounts2.png" // Placeholder image
        imageAlt="Task Dashboard Screenshot"
      />

      <FeatureBenefitsSection
        headline="Manage Clients Contacts"
        benefits={[
          "Create 2-3 Client-Contacts for keep track the client project.",
          "Feedback & approval history",
          // "Attach files and documents directly to projects.",
          "Raising the issues, if they found in thier project",
        ]}
        imageUrl="/images/accounts3.png" // Placeholder image
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
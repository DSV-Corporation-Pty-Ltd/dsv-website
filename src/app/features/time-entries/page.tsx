import React from 'react';
import FeatureIntroSection from '../../../components/sections/FeaturePages/FeatureIntroSection';
import FeatureBenefitsSection from '../../../components/sections/FeaturePages/FeatureBenefitsSection';
import FeatureCtaSection from '../../../components/sections/FeaturePages/FeatureCtaSection';
import { SVGProps } from 'react';

// You can use a specific icon for this page, or even an SVG animationconst ProjectManagementIcon = (props: any) => (

const ProjectManagementIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

export default function TimeEntryManagementPage() {
  return (
    <>
      <FeatureIntroSection
        title="Billable Time? Logged. Tracked. Paid"
        subtitle="Log time manually or with a timer, tag it as billable or non-billable, and use timesheets to generate invoices or payroll reports."
        imageUrl="/images/Timeentry.png" // Placeholder image
        imageAlt="Task Management Dashboard"
      >
        <div className="bg-blue-200 rounded-full p-4 inline-flex mb-4">
            <ProjectManagementIcon className="h-12 w-12 text-blue-700" />
        </div>
      </FeatureIntroSection>

      <FeatureBenefitsSection
        headline="Log your Time Entries in Seconds"
        benefits={[
          "Timer or manual logging",
          "Billable vs. non-billable tags",
          "generate accurate reports for payouts.",
          "every minute logged, tracked, and accounted for",
        ]}
        imageUrl="/images/AddTimeentry.png" // Placeholder image
        imageAlt="Task Dashboard Screenshot"
      />

      <FeatureBenefitsSection
        headline="Collaborate Seamlessly"
        benefits={[
          "Weekly team timesheets",
          "Export to PDF or CSV",
          // "Attach files and documents directly to projects.",
          "Easily Track the Billable and non-Billale Hours.",
        ]}
        imageUrl="/images/timenentry11.jpeg" // Placeholder image
        imageAlt="Team Collaboration Interface"
        reverse={true} // Reverse layout for this section
      />

      {/* You can add more sections here like use cases, specific features etc. */}

      <FeatureCtaSection
        title="Ready to master your Time ?"
        buttonText="Try Project Management"
        buttonLink="/auth/signup"
      />
    </>
  );
}
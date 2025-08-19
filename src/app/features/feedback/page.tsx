import React from 'react';
import FeatureIntroSection from '../../../components/sections/FeaturePages/FeatureIntroSection';
import FeatureBenefitsSection from '../../../components/sections/FeaturePages/FeatureBenefitsSection';
import FeatureCtaSection from '../../../components/sections/FeaturePages/FeatureCtaSection';

// You can use a specific icon for this page, or even an SVG animationconst ProjectManagementIcon = (props: any) => (

const ProjectManagementIcon = (props: any) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
    </svg>
);

export default function FeedbackManagementPage() {
  return (
    <>
      <FeatureIntroSection
        title="Keep Feedback Where Work Happens"
        subtitle="Simplify reviews and approvals by collecting feedback within tasks or projects."
        imageUrl="/images/feedback1.png" // Placeholder image
        imageAlt="Feedback Management Dashboard"
      >
        <div className="bg-blue-200 rounded-full p-4 inline-flex mb-4">
            <ProjectManagementIcon className="h-12 w-12 text-blue-700" />
        </div>
      </FeatureIntroSection>

      <FeatureBenefitsSection
        headline="Users Add their Feedbacks"
        benefits={[
          "Let users submit feedback about issues or improvements.",
          "Allow users to describe difficulty levels they face.",
          "Users can upload images or files for better clarity.",
          "Our team reviews feedback and works on fixing the issues.",
        ]}
        imageUrl="/images/feedback3.png" // Placeholder image
        imageAlt="Task Dashboard Screenshot"
      />

      <FeatureBenefitsSection
        headline="Diffrent Views For better Understanding"
        benefits={[
          "Here We provide different views so users experience better understanding.",
          "Easily Visible and try to resolve feedback as soon as possible.",
          // "Attach files and documents directly to projects.",
          "After fix the feedback it makeds as Fixed",
        ]}
        imageUrl="/images/feedback2.png" // Placeholder image
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
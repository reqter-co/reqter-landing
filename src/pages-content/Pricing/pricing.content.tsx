import { theme } from "twin.macro";
import FreePlan from "./FreePlan/freePlan.component";
import Section from "@Shared/components/Section";
import Plans from "./Plans/plans.component";
import FAQ from "./FAQ/faq.component";
const PricingContent = () => {
  return (
    <>
      <FreePlan />
      <Section
        bgColor={theme`colors.transparent`}
        title="Ready to take your content distribution to the next level?"
        description="All our paid plans come with additional features, and generous resources for teams of all sizes. Additionally our custom Enterprise plans can be configured to include more users, environments, locales, user roles, advanced security measures, dedicated infrastructures, and custom performance and support SLAs."
      />
      <Plans />
      <FAQ />
    </>
  );
};
export default PricingContent;

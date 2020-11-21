import { Wrapper, FaqContainer } from "./faq.style";
import Item from "./faq.item";
const PlansFAQ = () => {
  const plans = [
    {
      title: "Is my credit card information needed to sign up for ReqterCMS?",
      description:
        "Not at all! Sign up for the Developer plan, our free forever plan that comes with generous feature limits to build out personal projects or MVPs. All you need is to sign up with your email address or via social profiles (GitHub, Facebook, or Google).",
    },
    {
      title: "What are Content Records?",
      description: `Any single piece of content that is stored in ReqterCMS counts as a record, regardless if it contains one field or many. If you have a schema for "landing page", then every "landing page" content entry counts as a single record, not each field within it.`,
    },
    {
      title: "What are assets?",
      description:
        "Assets are any digital files that are uploaded to ReqterCMS's Digital Asset Manager, or DAM (e.g. images, PDF files, or videos). They are stored in ReqterCMS and served via a global content delivery network (CDN).",
    },
    {
      title: "What if I need more content locales, users, or stages?",
      description:
        "Feel free to reach out to our Sales Team if you have any specific questions regarding plan customization or upgrading! We are happy to work with you on a case by case basis to make sure your plan supports your needs.",
    },
    {
      title: "How do I purchase more API Operations and Asset Traffic?",
      description:
        "In case you are on a paid plan and reach your API Operations and Asset Traffic limits, additional usage will be charged automatically from your credit card at the end of your billing cycle. Overages (every 10.000 API Operations and 1 GB of Asset Traffic) cost USD 10 cents each. If this happens on a free developer plan, usage will be blocked until the next billing period. You can monitor your usage statistics on your project dashboard.",
    },
    {
      title: "What are my payment options?",
      description:
        "We accept credit cards from all major credit card providers. Enterprise plans can be paid by bank transfer as well.",
    },
    {
      title: "Does ReqterCMS use USD for all transactions?",
      description:
        "In most cases, we charge USD. European based customers can also be charged in EUR.",
    },
    {
      title:
        "Do you charge extra API Operations and Asset Traffic immediately?",
      description:
        "No, the additional usage will be charged at the end of a billing period.",
    },
    {
      title: "Are there custom pricing options available?",
      description:
        "Yes! We understand that every business has different needs. Our goal is to provide you with the tools that can help you achieve your vision for your projects. The ReqterCMS Sales Team will work with you to find the best solution for your company.",
    },
    {
      title: "How do I receive a Service Level Agreement?",
      description:
        "Service Level Agreements are available in our Enterprise Plans but feel free to reach out to our ReqterCMS Sales Team about your specific requests and we will see how we can best meet your needs.",
    },
    {
      title:
        "If I don’t pay for a Service Level Agreement, are there other options for support?",
      description:
        "There are many other options for support with all of your ReqterCMS needs! Reach out to us in our Slack Channel, on Intercom (our on-site or in-app chat), or email us at sales@ReqterCMS.com. We also have an extensive collection of documents available on our website that can help you through the onboarding of ReqterCMS.",
    },
    {
      title: "Are there any other fees that I should know about?",
      description:
        "No, all prices for our self-service plans are listed on our website in the Pricing section. There are no hidden fees or additional charges on top, with the exception of API-operation and Asset overages, as highlighted before.",
    },
    ,
    {
      title:
        "Do you offer special pricing options for students, non-profits, and open source projects?",
      description:
        "Yes! We'd love to accommodate your requests for special projects. Get in touch with us to discuss your project, and we'd be more than happy to talk about how we can support you.",
    },
  ];
  return (
    <Wrapper
      title="Frequently Asked Questions"
      description="All paid plans come with generous resources. Paid plans can go over-limit with reasonable charges outlined below."
    >
      <FaqContainer>
        {plans?.map((f, index) => (
          <Item key={index} data={f} />
        ))}
      </FaqContainer>
    </Wrapper>
  );
};
export default PlansFAQ;

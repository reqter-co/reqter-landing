import PageWrapper from "@Shared/components/PublicPagesWrapper/wrapper.component";
import Card from "@Shared/components/PS-Card/ps-card.component";
import { CardsContainer } from "./product.style";
const ProductContent = () => {
  const list = [
    {
      header: "What is a Headless CMS?",
      title:
        "ReqterCMS doesn’t stand in the way of you delivering digital experiences",
      description:
        "A good CMS lets you focus on creating and delivering the content without struggling with complex dependencies, hard-coded text, or over-engineered monoliths. Put the fun back into building web based projects with ReqterCMS.",
    },
    {
      header: "Why ReqterCMS?",
      title: "Engage with your customers on the go with ReqterCMS.",
      description:
        "Go to market faster and experience higher developer efficiency with ReqterCMS. Deploy personalised content across locales to your users on the move, and forget about stitching together clunky APIs to deliver content natively.",
    },
    {
      header: "Features",
      title:
        "Create seamless handoffs between devices, controlled from a singular codebase.",
      description:
        "Securely serve fresh content to your customers and reduce maintenance overheads with scalable PWAs.",
    },
    {
      header: "Compare Headless CMS",
      title: "Unify all your content needs within a single content hub.",
      description:
        "ReqterCMS offers you Content as a Service (CaaS) - securely and scalable in the cloud, keeping all your content at your fingertips within a single repository.",
    },
    {
      header: "Implementation Partners",
      title:
        "Marketers and editors get all the tools they need to deliver digital experiences globally.",
      description:
        "The possibilities of creation are endless - from landing pages, banners, and microsites, to ads, personalisation, and custom targeting based content - all from one content repository.",
    },
    {
      header: "Technology Ecosystem",
      title:
        "Accelerate your capacity to focus on selling with an orchestrated shopping experience for your buyers.",
      description:
        "Control all your product and campaign content from a single source of truth, and bring all your favourite APIs to the party - PIMs, personalisation, eCommerce microservices, fulfilment, you name it.",
    },
    {
      header: "For High Growth Companies",
      title:
        "Future proof your reach to your customers in the ways they prefer.",
      description:
        "Query your content from custom content models and deliver them to watches, glasses, and more, in the format wearers are most used to.",
    },
    {
      header: "For Modernizing Companies",
      title: "Engage with your customers and enhance your CX.",
      description:
        "Build an endless database of conversational responses to answer your users, and be voice-ready - the options are endless.",
    },
    {
      header: "For Enterprize",
      title: "Build immersive experiences to captivate your audiences.",
      description:
        "Allow your users and customers to interact with the content you create, and multiply the wow factor.",
    },
    {
      header: "Security & Compliance",
      title:
        "Captivate your audiences with next-generation digital experiences.",
      description:
        "Create delightful experiences that wow your audiences digitally and enhance your positioning.",
    },
  ];
  return (
    <PageWrapper
      title="ReqterCMS Product"
      description="Empower your development and editorial teams' workflows and bring your digital projects to life with ReqterCMS.Deliver the perfect Customer Experience with a scalable and secure Enterprise Headless CMS that seamlessly fits in to your ideal Digital Experience Platform"
    >
      <CardsContainer>
        {list?.map((item, index) => (
          <Card key={index} isReverse={index % 2 === 0} data={item} />
        ))}
      </CardsContainer>
    </PageWrapper>
  );
};
export default ProductContent;

import { theme } from "twin.macro";
import useLanding from "@Hooks/useLanding";
import useDataPath from "@Hooks/useDataPath";
import Tabs from "./Tabs/tabs.component";
import TabsContent from "./TabsContent/content.component";
import { Wrapper, Container, MobileContent } from "./styles";
import { useState } from "react";
const menu = [
  {
    id: 1,
    title: "Modern Websites",
  },
  {
    id: 2,
    title: "Global Marketers",
  },
  {
    id: 3,
    title: "Content Hub",
  },
  {
    id: 4,
    title: "Mobile Apps",
  },
  {
    id: 5,
    title: "eCommerce",
  },
];
const content = [
  {
    id: 1,
    title:
      "Build immersive digital experiences with ReqterCMS, and engage with your customers.",
    description:
      "ReqterCMS provides your content and development teams complete flexibility, so you can focus on building exceptional websites without the overheads of maintaining multiple services.",
    image:
      "https://media.graphcms.com/resize=w:1200,fit:crop/quality=value:75/output=format:webp/compress/kr4jWOoQLOghTlhdDVUp",
  },
  {
    id: 2,
    title:
      "Rapidly enhance your content delivery with localized content from a single content hub.",
    description:
      "Deliver native experiences to your customers on the move - without the compromise of app re-submits and frustrating over adapting content.",
    image:
      "https://media.graphcms.com/resize=w:1200,fit:crop/quality=value:75/output=format:webp/compress/kr4jWOoQLOghTlhdDVUp",
  },
  {
    id: 3,
    title:
      "Maintain a single content repository to manage and organize your content, and distribute it across platforms and geographies.",
    description:
      "GraphCMS houses all your content in a singular hub, available from a single GraphQL endpoint. Easily maintain your omni-channel content for all platforms in one single source of truth.",
    image:
      "https://media.graphcms.com/resize=w:1200,fit:crop/quality=value:75/output=format:webp/compress/kr4jWOoQLOghTlhdDVUp",
  },
  {
    id: 4,
    title:
      "Manage and create all pages, microsites, campaigns, and assets for all locales, from a single content repository.",
    description:
      "GraphCMS gives content teams complete control over how and where content can be distributed. Deliver global campaigns at scale with complete localization and powerful SEO capabilities out of the box..",
    image:
      "https://media.graphcms.com/resize=w:1200,fit:crop/quality=value:75/output=format:webp/compress/kr4jWOoQLOghTlhdDVUp",
  },
  {
    id: 5,
    title:
      "Seamlessly integrate with all ECommerce PIMs and APIs to scale and personalise online shopping experiences across devices.",

    description:
      "Provide your customers with better shopping experiences, every single time. GraphCMS supports you in delivering unparalleled eCommerce experiences. Take a look at our open source shop project.",
    image:
      "https://media.graphcms.com/resize=w:1200,fit:crop/quality=value:75/output=format:webp/compress/kr4jWOoQLOghTlhdDVUp",
  },
];
const Needs = () => {
  const { landingPage } = useLanding();
  const { getKeyValue } = useDataPath();
  const [selected, setSelected] = useState(content[0]);

  function handleSelectTab(tabItem: any) {
    setSelected(content[tabItem.id - 1]);
  }
  return (
    <Wrapper
      bgColor={theme`colors.white`}
      title={getKeyValue(
        landingPage,
        "infosectiontitle",
        "Reqter scales with your content needs"
      )}
    >
      <Container>
        <Tabs menu={menu} onSelectTab={handleSelectTab} selected={selected} />
        <TabsContent isHiddenMobileSize={true} selected={selected} />
        <MobileContent>
          {content.map((item) => (
            <TabsContent
              isHiddenMobileSize={false}
              key={item.id}
              selected={item}
            />
          ))}
        </MobileContent>
      </Container>
    </Wrapper>
  );
};

export default Needs;

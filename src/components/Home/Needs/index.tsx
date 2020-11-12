import { theme } from "twin.macro";
import useLanding from "@Hooks/useLanding";
import useDataPath from "@Hooks/useDataPath";
import { Wrapper, Container } from "./styles";
import Item from "./Item";
const data = [
  {
    logoBgColor: "bg-primary-light-color",
    title: "BUILD MODERN WEBSITES",
    description:
      "From massive amounts of content scattered across multiple CMSes, to a single source of truth. Unified content anywhere!",
    isReverse: false,
  },
  {
    logoBgColor: "bg-secondary-dark-color",
    title: "GLOBAL MARKETERS - MARK YOUR MARKET",
    description:
      "Global Marketers is a research hub to meet the syndicate, custom and consulting research needs. Our company excels in catering to the research requirements of commercial, industrial and all other business enterprises.",
    isReverse: true,
  },
  {
    logoBgColor: "bg-primary-light-color",
    title: "CONTENT HUB - MANAGING CONTENT OPERATIONS",
    description:
      "create and modify websites. They analyze user needs to implement website content, graphics, capacity and monitor website traffic and performance.",
    isReverse: false,
  },
  {
    logoBgColor: "bg-secondary-dark-color",
    title: "MOBILE APPS - TOUCH MOVE FAST",
    description:
      "create and modify websites. They analyze user needs to implement website content, graphics, capacity and monitor website traffic and performance.",
    isReverse: true,
  },
  {
    logoBgColor: "bg-primary-light-color",
    title: "E-COMMERCE - CREATE YOUR E-COMMERCE STORE",
    description:
      "create and modify websites. They analyze user needs to implement website content, graphics, capacity and monitor website traffic and performance.",
    isReverse: false,
  },
];

const Needs = () => {
  const { landingPage } = useLanding();
  const { getKeyValue } = useDataPath();
  return (
    <Wrapper
      bgColor={theme`colors.white`}
      title={getKeyValue(
        landingPage,
        "infosectiontitle",
        "Reqter scales with your content needs"
      )}
      description={getKeyValue(
        landingPage,
        "infosectiontitle",
        "We have provided lots of amazing features which they will be useful for a developer who wants to make everything easily and fast"
      )}
    >
      <Container>
        {data &&
          data.map((item, index) => (
            <Item
              key={index}
              number={index + 1}
              logoBgColor={item.logoBgColor}
              title={item.title}
              description={item.description}
              isReverse={item.isReverse}
            />
          ))}
      </Container>
    </Wrapper>
  );
};

export default Needs;

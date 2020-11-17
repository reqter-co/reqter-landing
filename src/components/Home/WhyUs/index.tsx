import { theme } from "twin.macro";
import { Wrapper, Container } from "./styles";
import Item from "./Item";
import Icon from "@Shared/components/Icon";
const WhyUs = () => {
  return (
    <Wrapper
      bgColor={theme`colors.gray.100`}
      title="Why ReqterCMS?"
      description="Build your digital experiences API-first the way you envisioned them. No templates, no restrictions, no boundaries"
    >
      <Container>
        <Item
          bgColor={theme`colors.secondary-dark-color`}
          icon={<Icon name="legal" />}
          title="Restful & Developer Efficiency"
          description="GraphQL native and front-end agnostic - seamlessly complementing all frameworks, like React, Gatsby and Vue."
        />
        <Item
          bgColor={theme`colors.black-light`}
          icon={<Icon name="legal" />}
          title="Omnichannel Distribution"
          description="Manage all your content from a single content hub and distribute natively across platforms at scale."
        />
        <Item
          bgColor={theme`colors.primary-light-color`}
          icon={<Icon name="legal" />}
          title="Enterprise Grade"
          description="Deliver exceptional projects using a Headless CMS as a Digital Experience Platform, securely and built to scale."
        />
      </Container>
    </Wrapper>
  );
};

export default WhyUs;

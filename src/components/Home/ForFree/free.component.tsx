import tw, { theme } from "twin.macro";
import { Wrapper, Container, Title, Description } from "./free.style";
import Button from "@Shared/components/Button";
const StartFree = () => {
  return (
    <Wrapper bgColor={theme`colors.black-light`}>
      <Container>
        <Title>Start for free, and scale as you go</Title>
        <Description>
          Get started in minutes with the fully hosted GraphQL Headless CMS. No
          credit card or upfront commitments required
        </Description>
        <Button secondary selected size="lg" cls={tw`mt-16`}>
          Let's get started
        </Button>
      </Container>
    </Wrapper>
  );
};

export default StartFree;

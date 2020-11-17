import {
  Wrapper,
  Section,
  Left,
  Title,
  Description,
  Actions,
  Button,
  Right,
  Image,
} from "./hero.style";
import useLanding from "@Hooks/useLanding";
import useDataPath from "@Hooks/useDataPath";

const Hero = () => {
  const { landingPage } = useLanding();
  const { getKeyValue } = useDataPath();

  return (
    <Wrapper>
      <Section>
        <Left>
          <Title>
            {getKeyValue(
              landingPage,
              "herotitle1",
              "Headless CMS with analytical approach"
            )}
          </Title>
          <Description>
            {getKeyValue(landingPage, "herodescription")}
          </Description>
          <Actions>
            <Button>Create a free account</Button>
            <Button>Video Demo</Button>
          </Actions>
        </Left>
        <Right>
          <Image src="/hero.png" />
        </Right>
      </Section>
    </Wrapper>
  );
};

export default Hero;

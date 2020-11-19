import {
  Wrapper,
  Section,
  Left,
  Title,
  Description,
  Actions,
  Right,
  Image,
} from "./hero.style";
import useLanding from "@Hooks/useLanding";
import useDataPath from "@Hooks/useDataPath";
import Link from "@Shared/components/Link";
import Button from "@Shared/components/Button";
import tw from "twin.macro";

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
            <Button
              primary
              size="md"
              cls={tw`bg-white text-black shadow hover:bg-white hover:shadow-lg py-3`}
            >
              <Link href="/signup">Create a free account</Link>
            </Button>
            <Button primary size="md">
              Video Demo
            </Button>
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

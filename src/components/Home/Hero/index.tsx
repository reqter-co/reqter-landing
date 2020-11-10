import {
  Wrapper,
  Section,
  Content,
  Title,
  Description,
  Actions,
  Button,
} from "./styles";
import useLanding from "@Hooks/useLanding";
import useLanguage from "@Hooks/useLanguage";
import useDataPath from "@Hooks/useDataPath";
import useMediaUtils from "@Hooks/useMediaUtils";

const Hero = () => {
  const { landingPage } = useLanding();
  const { direction } = useLanguage();
  const { getKeyValue } = useDataPath();
  const { getMediaValue } = useMediaUtils();

  return (
    <Wrapper
      img={getMediaValue(getKeyValue(landingPage, "heroimage"), "image")}
      direction={direction}
    >
      <Section>
        <Content>
          <Title>{getKeyValue(landingPage, "herotitle")}</Title>
          <Description>
            {getKeyValue(landingPage, "herodescription")}
          </Description>
          <Actions>
            <Button>Create a free account</Button>
            <Button>Video Demo</Button>
          </Actions>
        </Content>
      </Section>
    </Wrapper>
  );
};

export default Hero;

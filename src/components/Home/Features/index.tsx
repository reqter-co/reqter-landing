import useIsInViewport from "use-is-in-viewport";
import { theme } from "twin.macro";
import useLanding from "@Hooks/useLanding";
import useDataPath from "@Hooks/useDataPath";
import { Wrapper, Title, Container } from "./styles";
import Skill, { ISkillItem } from "./Item";
import Wave from "@Shared/components/Wave";
import dataList from "./data";

const Features = () => {
  const [isInViewport, targetRef] = useIsInViewport();
  const { landingPage } = useLanding();
  const { getKeyValue } = useDataPath();
  return (
    <>
      <Wave />
      <Wrapper bgColor={theme`colors.white`} ref={targetRef}>
        <h1 className="text-4xl font-semibold text-center text-black-color">
          So, what makes Reqter so special?
        </h1>
        <span className="max-w-2xl m-auto mt-3 text-base font-semibold text-center text-primary-color xs:px-4">
          We have provided lots of amazing features which they will be useful
          for a developer who wants to make everything easily and fast
        </span>
        <Container>
          {dataList.map(
            (item: ISkillItem, index: number): JSX.Element => (
              <Skill
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            )
          )}
        </Container>
      </Wrapper>
    </>
  );
};
export default Features;

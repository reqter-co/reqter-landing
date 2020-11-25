// import useIsInViewport from "use-is-in-viewport";
import { theme } from "twin.macro";
// import useLanding from "@Hooks/useLanding";
// import useDataPath from "@Hooks/useDataPath";
import { Wrapper, Container } from "./features.style";
import Skill, { ISkillItem } from "./Item";
import Wave from "@Shared/components/Wave";
import dataList from "./data";

const Features = () => {
  // const [isInViewport, targetRef] = useIsInViewport();
  // const { landingPage } = useLanding();
  // const { getKeyValue } = useDataPath();
  return (
    <>
      <Wave />
      <Wrapper
        bgColor={theme`colors.white`}
        title="So, what makes Reqter so special?"
        description="We have provided lots of amazing features which they will be useful for a developer who wants to make everything easily and fast"
      >
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

import { theme } from "twin.macro";
import useLanding from "@Hooks/useLanding";
import useDataPath from "@Hooks/useDataPath";
import { Wrapper, Title, Container } from "./styles";
import Skill, { ISkillItem } from "./Item";
import dataList from "./data";

const Features = () => {
  const { landingPage } = useLanding();
  const { getKeyValue } = useDataPath();
  return (
    <Wrapper bgColor={theme`colors.gray.100`}>
      <h1 className="text-4xl font-semibold text-center text-black-color">
        Our Features –how we can help
      </h1>
      <span className="max-w-2xl m-auto mt-3 text-base font-semibold text-center text-primary-color xs:px-4">
        We have provided lots of amazing features which they will be useful to a
        developer to make everything he wants easily and fast
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
  );
};
export default Features;

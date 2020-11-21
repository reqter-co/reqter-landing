import { Wrapper } from "./wrapper.style";
import Title from "../Title/title.component";
import Description from "../Description/description.component";
const PageWrapper: React.FC<{ title: string; description: string }> = ({
  title,
  description,
  children,
}) => {
  return (
    <Wrapper>
      <Title text={title} />
      <Description text={description} />
      {children}
    </Wrapper>
  );
};
export default PageWrapper;

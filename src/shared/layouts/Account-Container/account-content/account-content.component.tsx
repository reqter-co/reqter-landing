import { Wrapper, Title } from "./account-content.style";
const ContentContainer: React.FunctionComponent<{ title: string }> = ({
  title,
  children,
}) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
};
export default ContentContainer;

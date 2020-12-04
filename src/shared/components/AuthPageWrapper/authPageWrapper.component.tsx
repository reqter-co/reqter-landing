import {
  Wrapper,
  Title,
  Description,
  Content,
  Children,
} from "./authPageWrapper.style";
interface IProps {
  title: string;
  description: string;
}
const AuthPageWrapper: React.FC<IProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <Wrapper>
      <Content>
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
        <Children>{children}</Children>
      </Content>
    </Wrapper>
  );
};
export default AuthPageWrapper;

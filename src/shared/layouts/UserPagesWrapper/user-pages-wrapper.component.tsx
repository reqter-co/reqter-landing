import { Wrapper, Title, Content, Children } from "./user-pages-wrapper.style";
interface IProps {
  title: string;
  description: string;
}
const UserPagesWrapper: React.FC<IProps> = ({ title, children }) => {
  return (
    <Wrapper>
      <Content>
        <Title>{title}</Title>
        {/* {description && <Description>{description}</Description>} */}
        <Children>{children}</Children>
      </Content>
    </Wrapper>
  );
};

export default UserPagesWrapper;

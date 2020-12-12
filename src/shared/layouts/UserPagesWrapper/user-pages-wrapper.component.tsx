import {
  Wrapper,
  Header,
  Title,
  Content,
  Children,
} from "./user-pages-wrapper.style";
interface IProps {
  title: string;
  description: string;
  actions?: () => JSX.Element;
}
const UserPagesWrapper: React.FC<IProps> = ({ title, actions, children }) => {
  return (
    <Wrapper>
      <Content>
        <Header>
          <Title>{title}</Title>
          {actions ? actions() : null}
        </Header>
        {/* {description && <Description>{description}</Description>} */}
        <Children>{children}</Children>
      </Content>
    </Wrapper>
  );
};

export default UserPagesWrapper;

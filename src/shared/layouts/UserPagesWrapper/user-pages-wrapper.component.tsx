import {
  Wrapper,
  Title,
  Description,
  Content,
  Children,
} from "./user-pages-wrapper.style";
interface IProps {
  title: string;
  description: string;
}
const UserPagesWrapper: React.FC<IProps> = ({
  title,
  description,
  children,
}) => {
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

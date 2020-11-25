import { Wrapper, Content } from "./authPageWrapper.style";
const AuthPageWrapper: React.FunctionComponent = ({ children }) => {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
};
export default AuthPageWrapper;

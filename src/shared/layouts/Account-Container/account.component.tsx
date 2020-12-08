import SideBar from "./account-sidebar";
import { Wrapper, Content } from "./account.style";
const AccountContainer: React.FunctionComponent = ({ children }) => {
  return (
    <Wrapper>
      <SideBar />
      <Content>{children}</Content>
    </Wrapper>
  );
};
export default AccountContainer;

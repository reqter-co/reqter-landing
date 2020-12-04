import SideBar from "./account-sidebar";
import Content from "./account-content";
import { Wrapper } from "./account.style";
const AccountContainer: React.FunctionComponent<{ title: string }> = ({
  title,
  children,
}) => {
  return (
    <Wrapper>
      <SideBar />
      <Content title={title}>{children}</Content>
    </Wrapper>
  );
};
export default AccountContainer;

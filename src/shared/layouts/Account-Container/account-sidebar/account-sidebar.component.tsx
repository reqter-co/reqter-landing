import Link from "@Shared/components/Link";
import { SidebarContainer, Menu } from "./account-sidebar.style";
import useAccount from "@Hooks/useAccount";
import tw from "twin.macro";
import useRouter from "@Hooks/useRouter";

const AccountSideBar = () => {
  const { sidebarMenu } = useAccount();
  const { currentRoute } = useRouter();
  return (
    <SidebarContainer>
      {sidebarMenu?.map((item: any) => (
        <Menu
          key={item.id}
          css={[item.href === currentRoute ? tw`font-bold` : ""]}
        >
          <Link href={item.href}>{item.title}</Link>
        </Menu>
      ))}
    </SidebarContainer>
  );
};
export default AccountSideBar;

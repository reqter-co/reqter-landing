import Link from "@Shared/components/Link";
import { SidebarContainer, Menu } from "./account-sidebar.style";
import useAccount from "@Hooks/useAccount";
import tw from "twin.macro";
import useLanguage from "@Hooks/useLanguage";
import useRouter from "@Hooks/useRouter";

const ProfileSideBar = () => {
  const { sidebarMenu } = useAccount();
  const { direction } = useLanguage();
  const { currentRoute } = useRouter();
  return (
    <SidebarContainer>
      {sidebarMenu?.map((item: any) => (
        <Menu
          key={item.id}
          css={[
            item.href === currentRoute
              ? direction === "rtl"
                ? tw`border-r-4 border-primary-light-color bg-gray-100`
                : tw`border-l-4 border-primary-light-color bg-gray-100`
              : "",
          ]}
        >
          <Link href={item.href}>{item.title}</Link>
        </Menu>
      ))}
    </SidebarContainer>
  );
};
export default ProfileSideBar;

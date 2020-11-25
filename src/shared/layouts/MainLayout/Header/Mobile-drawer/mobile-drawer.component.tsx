import Icon from "@Shared/components/Icon";
import {
  Wrapper,
  Header,
  CloseIcon,
  LoginBox,
  LoginSwitcherContainer,
  UserIcon,
  UserImage,
  Name,
  LogoutLink,
  Menu,
  MenuItem,
} from "./mobile-drawer.style";
import Logo from "../logo";
import LoginButton from "@Shared/components/Button";
import Link from "@Shared/components/Link";
import useDataPath from "@Hooks/useDataPath";
import useRouter from "@Hooks/useRouter";
import useUser from "@Hooks/useUser";
import {
  MOBILE_MENU_ITEMS,
  LOGOUT_MENU_ITEM,
} from "@Shared/site-settings/site-navigation";
import tw from "twin.macro";
import useLanguage from "@Hooks/useLanguage";
import useAuth from "@Hooks/useAuth";

const Drawer = ({ onClose }: { onClose: () => void }) => {
  const { user, clearUser } = useUser({});
  const { currentRoute } = useRouter();
  const { getKeyValue } = useDataPath();
  const { logout } = useAuth();
  const { push } = useRouter();
  const { direction } = useLanguage();
  const avatar = getKeyValue(user, "profile.avatar");

  function handleLogout() {
    onClose();
    logout();
    push("/home");
    clearUser();
  }

  return (
    <Wrapper>
      <Header>
        <Logo />
        <CloseIcon onClick={onClose}>
          <Icon name="close" />
        </CloseIcon>
      </Header>
      <LoginBox>
        {!user ? (
          <LoginButton primary size="md" link href="/login">
            Login
          </LoginButton>
        ) : (
          <LoginSwitcherContainer>
            {avatar ? (
              <UserImage
                src={avatar
                  .toString()
                  .replace(
                    "https://app-spanel.herokuapp.com",
                    "https://assets.reqter.com"
                  )}
              />
            ) : (
              <UserIcon>
                <Icon name="user" />
              </UserIcon>
            )}
            <Name>
              {(!user?.profile?.first_name ||
                user?.profile?.first_name.length === 0) &&
              (!user?.profile?.last_name || user?.profile?.last_name.length)
                ? "Your Name"
                : user?.profile?.first_name + " " + user?.profile?.last_name}
            </Name>
            <LogoutLink onClick={handleLogout}>
              {LOGOUT_MENU_ITEM.defaultName}
            </LogoutLink>
          </LoginSwitcherContainer>
        )}
      </LoginBox>
      <Menu>
        {MOBILE_MENU_ITEMS.map((menu) => {
          return menu.needsLogin ? (
            user ? (
              <MenuItem
                key={menu.id}
                css={[
                  currentRoute === menu.href
                    ? direction === "ltr"
                      ? tw`border-l-4 border-secondary-dark-color`
                      : tw`border-r-4 border-secondary-dark-color`
                    : "",
                ]}
              >
                <Link href={menu.href}>
                  {getKeyValue({}, menu.id, menu.defaultName)}
                </Link>
              </MenuItem>
            ) : null
          ) : (
            <MenuItem
              key={menu.id}
              css={[
                currentRoute === menu.href
                  ? direction === "ltr"
                    ? tw`border-l-4 border-secondary-dark-color`
                    : tw`border-r-4 border-secondary-dark-color`
                  : "",
              ]}
            >
              <Link href={menu.href}>
                {getKeyValue({}, menu.id, menu.defaultName)}
              </Link>
            </MenuItem>
          );
        })}
      </Menu>
    </Wrapper>
  );
};
export default Drawer;

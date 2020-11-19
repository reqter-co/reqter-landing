import tw from "twin.macro";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "@Shared/components/Link";
import {
  Wrapper,
  Content,
  Logo,
  Menu,
  MenuItem,
  Actions,
  NavBarIcon,
} from "./header.style";
import useDataPath from "@Hooks/useDataPath";
import useUser from "@Hooks/useUser";
import { IHeader } from "@Interfaces/header";
import UserMenu from "@Shared/components/UserMenu";
import AppLogo from "@Shared/components/AppLogo/logo.component";
import Button from "@Shared/components/Button";
// import { ThemeContext } from "@Contexts/theme";
import { IUser } from "@Interfaces/user";
import Icon from "@Shared/components/Icon";

interface IProps {
  data: IHeader;
}

const HeaderMenu = ({ data }: IProps): JSX.Element => {
  // const { theme, toggleTheme } = useContext(ThemeContext);
  const { user } = useUser({});
  const { getKeyValue } = useDataPath();
  const [isSticky, setSticky] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset < 45) setSticky(false);
      else setSticky(true);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const checkIsTransparent = (): boolean => {
    return router.pathname === `/`;
  };
  return (
    <>
      <Wrapper
        css={[(isSticky || !checkIsTransparent()) && tw`shadow-lg`]}
        isSticky={isSticky}
        isTransparent={checkIsTransparent()}
      >
        <Content>
          <Logo>
            <AppLogo />
          </Logo>
          <Menu>
            <MenuItem>{getKeyValue(data, "link2title--", "Products")}</MenuItem>
            <MenuItem>
              {getKeyValue(data, "link1title--", "Solutions")}
            </MenuItem>
            <MenuItem>{getKeyValue(data, "link2title--", "Learn")}</MenuItem>
            <MenuItem>{getKeyValue(data, "link1title--", "Pricing")}</MenuItem>
            <MenuItem>{getKeyValue(data, "link2title--", "Blog")}</MenuItem>
          </Menu>
          <Actions className="tab-port:hidden">
            {!user ? (
              <Button primary size="md">
                <Link href="/login">{getKeyValue(data, "link3title")}</Link>
              </Button>
            ) : (
              <UserMenu user={user as IUser} />
            )}
          </Actions>
          <Actions>
            <NavBarIcon>
              <Icon name="align-right" />
            </NavBarIcon>
          </Actions>
        </Content>
      </Wrapper>
    </>
  );
};

export default HeaderMenu;

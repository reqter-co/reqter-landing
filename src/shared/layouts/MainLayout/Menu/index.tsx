import tw from "twin.macro";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import Link from "@Shared/components/Link";
import { Wrapper, Content, Logo, Menu, MenuItem } from "./styles";
import useDataPath from "@Hooks/useDataPath";
import useAuth from "@Hooks/useAuth";
import useUser from "@Hooks/useUser";
import { IHeader } from "@Interfaces/header";
import UserMenu from "@Shared/components/UserMenu";
import { ThemeContext } from "@Contexts/theme";

interface IProps {
  data: IHeader;
}

const HeaderMenu = ({ data }: IProps): JSX.Element => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { isAuthenticated } = useAuth();
  const { user } = useUser();
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
        css={[(isSticky || !checkIsTransparent()) && tw`shadow-md`]}
        isSticky={isSticky}
        isTransparent={checkIsTransparent()}
      >
        <Content className="dark:bg-gray-900">
          <Logo>{getKeyValue(data, "logotitle")}</Logo>
          <Menu>
            <MenuItem>
              {!isAuthenticated && !user ? (
                <Link href="/login">{getKeyValue(data, "link3title")}</Link>
              ) : (
                <UserMenu userName={user?.name as string} />
              )}
            </MenuItem>
            <MenuItem tw="phone:hidden" onClick={() => toggleTheme()}>
              {getKeyValue(data, "link2title")}
            </MenuItem>
            <MenuItem tw="phone:hidden">
              {getKeyValue(data, "link1title")}
            </MenuItem>
          </Menu>
        </Content>
      </Wrapper>
    </>
  );
};

export default HeaderMenu;

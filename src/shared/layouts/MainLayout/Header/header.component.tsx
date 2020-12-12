import tw from "twin.macro";
import { useEffect, useState } from "react";
import { Wrapper, Content } from "./header.style";
import useRouter from "@Hooks/useRouter";
import { IHeader } from "@Interfaces/header";
import DesktopMenu from "./desktop-menu";
import Logo from "./logo";
import HeaderLogin from "./header-login";
import UserMenu from "./header-user-menu";
import ToggleButton from "./nav-toggle-button";
import useApp from "@Hooks/useApp";
import { isUserPages } from "@Shared/site-settings/site-navigation";

const HeaderMenu = (): JSX.Element => {
  const { headerData } = useApp();
  const data = headerData as IHeader;
  const { currentRoute } = useRouter();
  const [isSticky, setSticky] = useState<boolean>(false);

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

  const _isUserPages = isUserPages(currentRoute);

  return (
    <>
      <Wrapper css={[(isSticky || _isUserPages) && tw`shadow`]}>
        <Content>
          <Logo />
          {!_isUserPages ? <DesktopMenu data={data} /> : null}
          {_isUserPages ? <UserMenu /> : null}
          <HeaderLogin data={data} />
          <ToggleButton />
        </Content>
      </Wrapper>
    </>
  );
};

export default HeaderMenu;

import tw from "twin.macro";
import { useEffect, useState } from "react";
import { Wrapper, Content } from "./header.style";
import useRouter from "@Hooks/useRouter";
import { IHeader } from "@Interfaces/header";
import DesktopMenu from "./desktop-menu";
import Logo from "./logo";
import HeaderLogin from "./header-login";
import ToggleButton from "./nav-toggle-button";

interface IProps {
  data: IHeader;
}

const HeaderMenu = ({ data }: IProps): JSX.Element => {
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

  const checkIsTransparent = (): boolean => {
    return currentRoute === `/spaces` || currentRoute === `/account`;
  };
  return (
    <>
      <Wrapper css={[(isSticky || checkIsTransparent()) && tw`shadow`]}>
        <Content>
          <Logo />
          <DesktopMenu data={data} />
          <HeaderLogin data={data} />
          <ToggleButton />
        </Content>
      </Wrapper>
    </>
  );
};

export default HeaderMenu;

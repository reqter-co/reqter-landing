import { Logo } from "./header.style";
import useRouter from "@Hooks/useRouter";
import AppLogo from "@Shared/components/AppLogo/logo.component";

const HeaderLogo = () => {
  const { push } = useRouter();

  return (
    <Logo onClick={() => push("/")}>
      <AppLogo />
    </Logo>
  );
};

export default HeaderLogo;

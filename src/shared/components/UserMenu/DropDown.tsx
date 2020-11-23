import { useRef } from "react";
import { MenuWrapper, MenuIcon, MenuItem } from "./styles";
import useLanguage from "@Hooks/useLanguage";
import useClickOutside from "@Hooks/useClickOutside";
import useRouter from "@Hooks/useRouter";
import useUser from "@Hooks/useUser";
import Icon from "@Shared/components/Icon";
import Link from "@Shared/components/Link";
import useAuth from "@Hooks/useAuth";

const UserMenu = ({
  onClickOutside,
}: {
  onClickOutside: () => void;
}): JSX.Element => {
  const { mutateUser } = useUser({});
  const { logout } = useAuth();
  const { push } = useRouter();
  const { direction } = useLanguage();
  const menuRef = useRef<HTMLUListElement>(null);
  useClickOutside(menuRef, () => {
    onClickOutside();
  });

  function handleLogout() {
    onClickOutside();
    logout();
    push("/home");
    mutateUser(null);
  }

  return (
    <MenuWrapper direction={direction} ref={menuRef}>
      <Link href="/spaces">
        <MenuItem>
          <MenuIcon>
            <Icon name="health" />
          </MenuIcon>
          My Spaces
        </MenuItem>
      </Link>
      <Link href="/account">
        <MenuItem>
          <MenuIcon>
            <Icon name="math" />
          </MenuIcon>
          Account
        </MenuItem>
      </Link>
      <MenuItem onClick={handleLogout}>
        <MenuIcon>
          <Icon name="sign-out" />
        </MenuIcon>
        Logout
      </MenuItem>
    </MenuWrapper>
  );
};

export default UserMenu;

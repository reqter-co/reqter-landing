import { useRef } from "react";
import {
  USER_DROPDOWN_MENU_ITEMS,
  LOGOUT_PAGE,
} from "@Shared/site-settings/site-navigation";
import { MenuWrapper, MenuIcon, MenuItem } from "./styles";
import useLanguage from "@Hooks/useLanguage";
import useClickOutside from "@Hooks/useClickOutside";
import useRouter from "@Hooks/useRouter";
import Icon from "@Shared/components/Icon";
import Link from "@Shared/components/Link";
import useUser from "@Hooks/useUser";
import useAuth from "@Hooks/useAuth";

const UserMenu = ({
  onClickOutside,
}: {
  onClickOutside: () => void;
}): JSX.Element => {
  const { clearUser } = useUser({});
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
    clearUser();
  }

  return (
    <MenuWrapper direction={direction} ref={menuRef}>
      {USER_DROPDOWN_MENU_ITEMS.map((nav) => {
        if (nav.href === LOGOUT_PAGE) {
          return (
            <MenuItem onClick={handleLogout}>
              <MenuIcon>
                <Icon name={nav.icon} />
              </MenuIcon>
              {nav.defaultName}
            </MenuItem>
          );
        }
        return (
          <Link href={nav.href}>
            <MenuItem onClick={() => onClickOutside()}>
              <MenuIcon>
                <Icon name={nav.icon} />
              </MenuIcon>
              {nav.defaultName}
            </MenuItem>
          </Link>
        );
      })}
    </MenuWrapper>
  );
};

export default UserMenu;

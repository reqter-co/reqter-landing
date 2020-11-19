import { useRef } from "react";
import { MenuWrapper, MenuIcon, MenuItem } from "./styles";
import useLanguage from "@Hooks/useLanguage";
import useClickOutside from "@Hooks/useClickOutside";
import useRouter from "@Hooks/useRouter";
import Icon from "@Shared/components/Icon";
import Link from "@Shared/components/Link";
import storage from "src/services/storage";

const UserMenu = ({
  onClickOutside,
}: {
  onClickOutside: () => void;
}): JSX.Element => {
  const { push } = useRouter();
  const { direction } = useLanguage();
  const menuRef = useRef<HTMLUListElement>(null);
  useClickOutside(menuRef, () => {
    onClickOutside();
  });

  async function handleLogout() {
    storage.removeItem("@caaser-token");
    onClickOutside();
    push("/home");
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
      <Link href="/profile">
        <MenuItem>
          <MenuIcon>
            <Icon name="math" />
          </MenuIcon>
          Profile
        </MenuItem>
      </Link>
      <MenuItem onClick={handleLogout}>
        <MenuIcon>
          <Icon name="time" />
        </MenuIcon>
        Logout
      </MenuItem>
    </MenuWrapper>
  );
};

export default UserMenu;

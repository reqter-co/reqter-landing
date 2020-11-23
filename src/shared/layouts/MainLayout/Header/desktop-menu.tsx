import tw from "twin.macro";
import Link from "@Shared/components/Link";
import { Menu, MenuItem } from "./header.style";
import useDataPath from "@Hooks/useDataPath";
import useRouter from "@Hooks/useRouter";
import { IHeader } from "@Interfaces/header";
import { DESKTOP_MENU_ITEMS } from "@Shared/site-settings/site-navigation";

interface IProps {
  data?: IHeader;
}

const DesktopMenu = ({ data }: IProps): JSX.Element => {
  const { currentRoute } = useRouter();
  const { getKeyValue } = useDataPath();

  return (
    <Menu>
      {DESKTOP_MENU_ITEMS.map((menu) => (
        <MenuItem
          css={[currentRoute === menu.href && tw`text-secondary-dark-color`]}
        >
          <Link href={menu.href}>
            {getKeyValue(data, menu.id, menu.defaultName)}
          </Link>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default DesktopMenu;

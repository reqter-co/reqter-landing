import { Actions, NavBarIcon } from "./header.style";
import { useState } from "react";
import Icon from "@Shared/components/Icon";
import Drawer from "./Mobile-drawer";
const NavToggle = () => {
  const [isOpen, toggleMenu] = useState(false);
  return (
    <Actions>
      <NavBarIcon onClick={() => toggleMenu((prev) => !prev)}>
        <Icon name="align-right" />
      </NavBarIcon>
      {isOpen && <Drawer onClose={() => toggleMenu((prev) => !prev)} />}
    </Actions>
  );
};

export default NavToggle;

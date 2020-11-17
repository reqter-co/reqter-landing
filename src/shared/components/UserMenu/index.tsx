import { useState } from "react";
import { Wrapper, MenuContainer, UserIcon, UserImage, Name } from "./styles";
import Icon from "@Shared/components/Icon";
import DropDown from "./DropDown";
import { IUser } from "@Interfaces/user";
import useDataPath from "@Hooks/useDataPath";

const UserMenu = ({ user }: { user: IUser }): JSX.Element => {
  const { getKeyValue } = useDataPath();
  const [isOpenMenu, toggleUserMenu] = useState(false);
  function handleClick() {
    toggleUserMenu((prev) => !prev);
  }

  const avatar = getKeyValue(user, "profile.avatar");
  return (
    <>
      <Wrapper>
        <MenuContainer onClick={handleClick}>
          <Name>
            {(!user?.profile?.first_name ||
              user?.profile?.first_name.length === 0) &&
            (!user?.profile?.last_name || user?.profile?.last_name.length)
              ? "Your Name"
              : user?.profile?.first_name + " " + user?.profile?.last_name}
            <span className="text-lgs">
              <Icon name="caret-down" />
            </span>
          </Name>
          {avatar ? (
            <UserImage
              src={avatar
                .toString()
                .replace(
                  "https://app-spanel.herokuapp.com",
                  "https://assets.reqter.com"
                )}
            />
          ) : (
            <UserIcon>
              <Icon name="user" />
            </UserIcon>
          )}
        </MenuContainer>
      </Wrapper>
      {isOpenMenu && <DropDown onClickOutside={handleClick} />}
    </>
  );
};

export default UserMenu;

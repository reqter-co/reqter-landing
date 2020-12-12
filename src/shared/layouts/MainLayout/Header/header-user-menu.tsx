import Link from "@Shared/components/Link";
import Icon from "@Shared/components/Icon";
import { UserMenuContainer, UserMenuItem, Text, Value } from "./header.style";

const UserMenu = (): JSX.Element => {
  return (
    <UserMenuContainer>
      <UserMenuItem>
        <Link href="/account/billing">
          <Icon name="bank-card" />
          <Text>Credit:</Text>
          <Value>2,000$</Value>
        </Link>
      </UserMenuItem>
      <UserMenuItem>
        <Link href="/tickets">
          <Icon name="legal" />
          <Text>Tickets</Text>
        </Link>
      </UserMenuItem>
      <UserMenuItem>
        <Link href="/account/billing">
          <Icon name="tests" />
          <Text>Help</Text>
        </Link>
      </UserMenuItem>
    </UserMenuContainer>
  );
};

export default UserMenu;

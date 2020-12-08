import Link from "@Shared/components/Link";
import { Actions } from "./header.style";
import useDataPath from "@Hooks/useDataPath";
import useUser from "@Hooks/useUser";
import { IHeader } from "@Interfaces/header";
import UserMenu from "@Shared/components/UserMenu";
import Button from "@Shared/components/Button";
import { IUser } from "@Interfaces/user";

interface IProps {
  data: IHeader;
}

const HeaderLogin = ({ data }: IProps): JSX.Element => {
  const { user } = useUser({});
  const { getKeyValue } = useDataPath();

  return (
    <Actions className="tab-port:hidden">
      {!user ? (
        <Button primary size="md">
          <Link href="/login">{getKeyValue(data, "link3title", "Login")}</Link>
        </Button>
      ) : (
        <UserMenu user={user as IUser} />
      )}
    </Actions>
  );
};

export default HeaderLogin;

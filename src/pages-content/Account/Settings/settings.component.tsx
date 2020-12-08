import { useState } from "react";
import Button from "@Shared/components/Button";
import Switch from "@Shared/components/Switch";
import { Wrapper, Title } from "./settings.style";
import Row from "./Row";
import tw from "twin.macro";
import useAuth from "@Hooks/useAuth";
import useUser from "@Hooks/useUser";
const AccountSettingsContainer = () => {
  const { user, setUser } = useUser({});
  const { _toggleNotification } = useAuth();
  const [notification, toggleNotify] = useState(user?.profile?.notification);
  function handleNotifyChanged(e: React.FormEvent<HTMLInputElement>) {
    toggleNotify((prev) => !prev);
    _toggleNotification(
      e.currentTarget.checked,
      (user) => {
        if (user) {
          setUser(user);
        }
      },
      () => {
        toggleNotify((prev) => !prev);
      }
    );
  }
  return (
    <>
      <Wrapper>
        <Title>Settings</Title>
        <Row
          className="phone:flex-col"
          title="Verify Registration Email"
          description="Verify your email to better protect your account. It will be used for notifications and sign-in."
          isXsFullWidth={true}
          renderActions={() => {
            return (
              <Button size="sm" cls={tw`phone:mt-5 w-32 phone:w-full`}>
                Confirm
              </Button>
            );
          }}
        />
        <Row
          title="Activities Email Notification"
          description="Receive email notifications for comments, activities."
          renderActions={() => {
            return (
              <Switch
                id="notifyEmail"
                checked={notification}
                onChange={handleNotifyChanged}
              />
            );
          }}
        />
      </Wrapper>
      <Wrapper className="mt-5">
        <Title>Drop Zone</Title>
        <Row
          className="phone:flex-col"
          title="Delete Account"
          description="Permanently delete your account.You will no longer have access to your account."
          isXsFullWidth={true}
          renderActions={() => {
            return (
              <Button size="sm" cls={tw`bg-red-500 phone:mt-5 phone:w-full`}>
                Delete Account
              </Button>
            );
          }}
        />
      </Wrapper>
    </>
  );
};
export default AccountSettingsContainer;

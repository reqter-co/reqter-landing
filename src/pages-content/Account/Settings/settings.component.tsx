import { useEffect, useState } from "react";
import Button from "@Shared/components/Button";
import Switch from "@Shared/components/Switch";
import { Wrapper, Title } from "./settings.style";
import Row from "./Row";
import tw from "twin.macro";
import useAuth from "@Hooks/useAuth";
import useUser from "@Hooks/useUser";
import useNotify from "@Hooks/useNotify";
import useRouter from "@Hooks/useRouter";
import useAlert from "@Hooks/useAlert";

const AccountSettingsContainer = () => {
  const { user, setUser, clearUser } = useUser({});
  const { push } = useRouter();
  const [notification, toggleNotify] = useState(user?.profile?.notification);
  const { showNotify } = useNotify();
  const { showAlert, closeAlert } = useAlert();
  const {
    logout,
    _toggleNotification,
    _sendEmailConfirmation,
    _deleteAccount,
  } = useAuth();

  useEffect(() => {
    toggleNotify(user?.profile?.notification);
  }, [user]);

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
  function handleConfirmEmail() {
    _sendEmailConfirmation(
      () => {
        showNotify({
          type: "success",
          description: "Confirmation link sent to your email.",
        });
      },
      () => {
        showNotify({
          type: "error",
          description: "Failed in sending confirmation email.",
        });
      }
    );
  }
  function handleDeleteAccount() {
    showAlert({
      title: "Delete Account",
      description: "Are you sure to delete?",
      okButtonText: "Delete",
      cancelButtonText: "Dismiss",
      isApiCallOKButton: true,
      onOk: () => {
        _deleteAccount(
          () => {
            closeAlert();
            logout();
            push("/home");
            clearUser();
          },
          () => {
            closeAlert();
            showNotify({
              type: "error",
              description: "Failed in deleting your account.",
            });
          }
        );
      },
    });
  }
  return (
    <>
      <Wrapper>
        <Title>Settings</Title>
        <Row
          className="phone:flex-col"
          title="Confirm Registration Email"
          description="Verify your email to better protect your account. It will be used for notifications and sign-in."
          isXsFullWidth={true}
          renderActions={() => {
            return !user?.emailConfirmed ? (
              <Button
                size="sm"
                cls={tw`phone:mt-5 phone:w-full`}
                onClick={handleConfirmEmail}
              >
                Send Confirmation
              </Button>
            ) : (
              <span tw="text-green-500 font-bold">Confirmed</span>
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
              <Button
                size="sm"
                cls={tw`phone:mt-5 phone:w-full`}
                onClick={handleDeleteAccount}
              >
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

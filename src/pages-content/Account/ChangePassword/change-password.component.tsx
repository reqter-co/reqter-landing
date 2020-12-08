import tw from "twin.macro";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "@Shared/components/Form/Password/password.component";
import useDataPath from "@Hooks/useDataPath";
import Submit from "@Shared/components/Button";
import useNotify from "@Hooks/useNotify";
import useAuth from "@Hooks/useAuth";
import {
  Wrapper,
  Title,
  FormContainer,
  Info,
  Row,
} from "./change-password.style";
type IFormProps = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};
const AccountChangePassword = () => {
  const { showNotify } = useNotify();
  const { _changePassword } = useAuth();
  const { register, errors, handleSubmit, watch, reset } = useForm<IFormProps>({
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });
  const { getKeyValue } = useDataPath();
  const [loading, toggleLoading] = useState(false);

  const onSubmit = ({ currentPassword, newPassword }: IFormProps) => {
    if (!loading) {
      toggleLoading(true);
      _changePassword(
        currentPassword,
        newPassword,
        () => {
          reset();
          toggleLoading(false);
          showNotify({
            type: "success",
            description: "Your password changed successfully.",
          });
        },
        (error) => {
          toggleLoading(false);
          showNotify({
            type: "error",
            description: error,
          });
        }
      );
    }
  };
  return (
    <Wrapper>
      <Title>Change Password</Title>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <Info>
          <li>
            Your password must be between 8 and 30 characters at least one
            uppercase and lowercase letter
          </li>
          <li>Your password must contain at least one number digit</li>
          <li>
            Your password must contain at least one special character -for
            example: $, #, @, !,%,^,&,*,(,)
          </li>
        </Info>
        <Input
          placeholder={getKeyValue(
            {},
            "emailplaceholder",
            "Your current password"
          )}
          name="currentPassword"
          ref={register({
            required: true,
            minLength: 6,
          })}
          hasError={errors.currentPassword ? true : false}
        />
        <Row>
          <Input
            placeholder={getKeyValue(
              {},
              "passwordplaceholder",
              "Enter your new password"
            )}
            name="newPassword"
            ref={register({
              required: true,
              minLength: 6,
            })}
            hasError={errors.newPassword ? true : false}
          />
          <Input
            placeholder={getKeyValue(
              {},
              "passwordplaceholder",
              "Confirm your new password"
            )}
            name="confirmPassword"
            ref={register({
              required: true,
              minLength: 6,
              validate: (value) => value === watch("newPassword"),
            })}
            hasError={errors.confirmPassword ? true : false}
          />
        </Row>
        <Submit
          type="submit"
          primary
          size="sm"
          cls={tw`mt-6 self-end`}
          loading={loading}
        >
          {getKeyValue({}, "submittext", "Change my password")}
        </Submit>
      </FormContainer>
    </Wrapper>
  );
};
export default AccountChangePassword;

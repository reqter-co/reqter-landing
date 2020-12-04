import tw from "twin.macro";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "@Shared/components/Form/Input";
import useDataPath from "@Hooks/useDataPath";
import { emailPattern } from "@Shared/helper/patterns";
import Submit from "@Shared/components/Button";
// import useNotify from "@Hooks/useNotify";
import { FormContainer } from "./profile.style";
import useUser from "@Hooks/useUser";

type IFormProps = {
  firstName: string;
  lastName: string;
};

const ProfileUserForm = () => {
  const { user } = useUser({});
  // const { showNotify } = useNotify();
  const { register, errors, handleSubmit } = useForm<IFormProps>({
    defaultValues: {
      firstName: user?.profile?.first_name || "",
      lastName: user?.profile?.last_name || "",
    },
  });
  const { getKeyValue } = useDataPath();
  const [loading, toggleLoading] = useState(false);

  const onSubmit = () => {
    if (!loading) {
      toggleLoading(true);
    }
  };
  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)} className="fade-in">
      <Input
        autoFocus
        placeholder={getKeyValue({}, "emailplaceholder", "Your first name")}
        name="firstName"
        ref={register({
          required: true,
          pattern: emailPattern,
        })}
        hasError={errors.firstName ? true : false}
      />
      <Input
        placeholder={getKeyValue({}, "passwordplaceholder", "Your last name")}
        name="lastName"
        ref={register({
          required: true,
          minLength: 6,
        })}
        hasError={errors.lastName ? true : false}
      />
      <Submit
        type="submit"
        primary
        size="sm"
        cls={tw`mt-6 self-end`}
        loading={loading}
      >
        {getKeyValue({}, "submittext", "Update Profile")}
      </Submit>
    </FormContainer>
  );
};
export default ProfileUserForm;

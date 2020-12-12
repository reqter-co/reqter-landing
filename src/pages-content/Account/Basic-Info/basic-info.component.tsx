import { Wrapper, Title } from "./basic-info.style";
import Avatar from "./basic-info.avatar";
import Form from "./basic-info-userinfo.form";
const BasicInfoContainer = () => {
  return (
    <Wrapper>
      <Title>Basic Information</Title>
      <Avatar />
      <Form />
    </Wrapper>
  );
};
export default BasicInfoContainer;

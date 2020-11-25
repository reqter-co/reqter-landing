import {
  Wrapper,
  Left,
  Title,
  Price,
  Info,
  Right,
  FeatureItem,
  IconBox,
  Text,
} from "./freePlan.style";
import Button from "@Shared/components/Button";
import Icon from "@Shared/components/Icon";
import tw from "twin.macro";
const FreePlan = () => {
  const features = [
    "Unlimited projects per user",
    "Trigger custom logic with webhooks",
    "2,500 content entries per project",
    "Up to 3 users and 2 content stages per project",
    "Free 15 day trial on our growth plan",
  ];
  return (
    <Wrapper>
      <Left>
        <Title>Free Developer Plan</Title>
        <Price>$0</Price>
        <Info>
          Enjoy ReqterCMS's free forever developer plan for personal or
          small-scale projects.
        </Info>
        <Button secondary selected link href="/signup" size="md" cls={tw`self-start mt-5 phone:self-stretch`}>
          Sign up for free
        </Button>
      </Left>
      <Right>
        {features.map((f, index) => (
          <FeatureItem key={index}>
            <IconBox>
              <Icon name="circle-checked" />
            </IconBox>
            <Text>{f}</Text>
          </FeatureItem>
        ))}
      </Right>
    </Wrapper>
  );
};
export default FreePlan;

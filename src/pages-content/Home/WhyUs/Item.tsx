import {
  ItemWrapper,
  Icon,
  TextContainer,
  ItemTitle,
  Description,
} from "./styles";
import Button from "@Shared/components/Button";
import tw from "twin.macro";
type Props = {
  bgColor: string;
  icon: any;
  title: string;
  description: string;
};
const HighlightItem = ({ bgColor, icon, title, description }: Props) => {
  return (
    <ItemWrapper bgColor={bgColor}>
      <Icon>{icon}</Icon>
      <TextContainer>
        <ItemTitle>{title}</ItemTitle>
        <Description>{description}</Description>
        <Button
          secondary
          size="md"
          cls={tw`bg-transparent text-white w-full border-2 border-white hover:bg-transparent p-2`}
        >
          Lean More
        </Button>
      </TextContainer>
    </ItemWrapper>
  );
};

export default HighlightItem;

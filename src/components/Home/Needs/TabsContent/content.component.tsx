import Button from "@Shared/components/Button";
import tw from "twin.macro";
import {
  ContentWrapper,
  Left,
  Title,
  Info,
  Right,
  Image,
} from "./content.styles";
const TabsContent = ({
  isHiddenMobileSize,
  selected,
}: {
  isHiddenMobileSize: boolean;
  selected: any;
}) => {
  return (
    <ContentWrapper isHiddenMobileSize={isHiddenMobileSize}>
      <Left>
        <Title>{selected?.title}</Title>
        <Info>{selected?.description}</Info>
        <Button secondary size="lg" cls={tw`mt-8 px-10`}>
          Learn More
        </Button>
      </Left>
      <Right>
        <Image src={selected?.image} />
      </Right>
    </ContentWrapper>
  );
};
export default TabsContent;

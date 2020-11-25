import Button from "@Shared/components/Button";
import tw from "twin.macro";
import {
  PlanItemWrapper,
  Title,
  Description,
  Price,
  Type,
  Properties,
  PropertiesRow,
  Key,
  Value,
} from "./plans.style";
const PlanItem = ({ data, priceType }: { data: any; priceType: string }) => {
  const { title, description, price, properties, isCustom } = data;
  return (
    <PlanItemWrapper
      css={[isCustom ? tw`bg-black text-white` : tw`bg-white text-black`]}
    >
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Price>{price[priceType]}</Price>
      {!isCustom && <Type>{`Billed ${priceType}`}</Type>}
      <Properties>
        {properties?.map((item: any, index: string) => (
          <PropertiesRow key={index}>
            <Key>{item.key}</Key>
            <Value>{item.value}</Value>
          </PropertiesRow>
        ))}
      </Properties>
      <Button secondary link href="/signup" size="md">
        Sign up
      </Button>
    </PlanItemWrapper>
  );
};
export default PlanItem;

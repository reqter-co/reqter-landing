import {
  Wrapper,
  PlansContainer,
  PriceTypeSwitcher,
  PriceTypeItem,
} from "./plans.style";
import Item from "./plans.item";
import { useState } from "react";
import tw, { theme } from "twin.macro";
enum PriceType {
  monthly = "monthly",
  annual = "annual",
}
const FreePlan = () => {
  const [priceType, setPriceType] = useState(PriceType.monthly);
  const plans = [
    {
      title: "Essential",
      description: "Perfect for individual projects",
      price: {
        monthly: "$39",
        annual: "$29",
      },
      properties: [
        {
          key: "Locales",
          value: "2",
        },
        {
          key: "Users",
          value: "10",
        },
        {
          key: "Roles",
          value: "1",
        },
        {
          key: "Environments",
          value: "1",
        },
        {
          key: "Entries",
          value: "5,000",
        },
        {
          key: "Version Retention",
          value: "30 days",
        },
      ],
    },
    {
      title: "Team",
      description: "Perfect for working on smaller projects",
      price: {
        monthly: "$159",
        annual: "$129",
      },
      properties: [
        {
          key: "Locales",
          value: "2",
        },
        {
          key: "Users",
          value: "10",
        },
        {
          key: "Roles",
          value: "1",
        },
        {
          key: "Environments",
          value: "1",
        },
        {
          key: "Entries",
          value: "5,000",
        },
        {
          key: "Version Retention",
          value: "30 days",
        },
      ],
    },
    {
      title: "Growth",
      description: "Perfect for teams ready to scale their product",
      price: {
        monthly: "$799",
        annual: "$699",
      },
      properties: [
        {
          key: "Locales",
          value: "2",
        },
        {
          key: "Users",
          value: "10",
        },
        {
          key: "Roles",
          value: "1",
        },
        {
          key: "Environments",
          value: "1",
        },
        {
          key: "Entries",
          value: "5,000",
        },
        {
          key: "Version Retention",
          value: "30 days",
        },
      ],
    },
    {
      title: "Enterprise",
      description: "Custom plans tailored to your needs",
      isCustom: true,
      price: {
        monthly: "Custom",
        annual: "Custom",
      },
      properties: [
        {
          key: "Locales",
          value: "Custom",
        },
        {
          key: "Users",
          value: "Custom",
        },
        {
          key: "Roles",
          value: "Custom",
        },
        {
          key: "Environments",
          value: "Custom",
        },
        {
          key: "Entries",
          value: "Custom",
        },
        {
          key: "Version Retention",
          value: "Custom",
        },
      ],
    },
  ];
  return (
    <Wrapper bgColor={theme`colors.gray.100`}>
      <PriceTypeSwitcher>
        <PriceTypeItem
          css={[
            priceType === PriceType.monthly &&
              tw`bg-primary-light-color text-white`,
          ]}
          onClick={() => setPriceType(PriceType.monthly)}
        >
          Monthly
        </PriceTypeItem>
        <PriceTypeItem
          css={[
            priceType === PriceType.annual &&
              tw`bg-primary-light-color text-white`,
          ]}
          onClick={() => setPriceType(PriceType.annual)}
        >
          Annual
        </PriceTypeItem>
      </PriceTypeSwitcher>
      <PlansContainer>
        {plans?.map((p, index) => (
          <Item key={index} data={p} priceType={priceType} />
        ))}
      </PlansContainer>
    </Wrapper>
  );
};
export default FreePlan;

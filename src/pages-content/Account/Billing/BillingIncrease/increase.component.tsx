import Input from "@Shared/components/Form/Input";
import Button from "@Shared/components/Button";
import { Wrapper, Title, PricesList, Form, PayTitle } from "./increase.style";
import Per from "./Per";
import tw from "twin.macro";
const BillingIncrease = () => {
  return (
    <Wrapper>
      <Title>Your current services prices</Title>
      <PricesList>
        <Per title="Per Hour" value="713" />
        <Per title="Daily" value="17,113" />
        <Per title="Monthly" value="513,360" />
        <Per title="Annual" value="6,150,120" />
      </PricesList>
      <Form>
        <div className="flex flex-col pr-5 flex-1">
          <PayTitle>Choose a price</PayTitle>
          <Input type="number" placeholder="for example 100$" />
        </div>
        <Button size="md" cls={tw`mt-4 py-2 h-12`}>
          Pay the price
        </Button>
      </Form>
    </Wrapper>
  );
};
export default BillingIncrease;

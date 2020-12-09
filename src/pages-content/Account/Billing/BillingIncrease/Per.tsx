import { PerContainer, PerTitle, PerValue } from "./increase.style";
const BillingPer = ({ title, value }: { title: string; value: string }) => {
  return (
    <PerContainer>
      <PerTitle>{title}</PerTitle>
      <PerValue>{value} $</PerValue>
    </PerContainer>
  );
};
export default BillingPer;

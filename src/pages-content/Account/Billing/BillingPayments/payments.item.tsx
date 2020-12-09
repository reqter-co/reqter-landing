import { ItemContainer, Date, Price, Status, Number } from "./payments.style";

const BillingPayments = ({ data }: { data: any }) => {
  console.log(data)
  return (
    <ItemContainer>
      <Number>2</Number>
      <Date>Sunday, 13 may 20</Date>
      <Price>1480$</Price>
      <Status>
        <span>Success</span>
      </Status>
    </ItemContainer>
  );
};
export default BillingPayments;

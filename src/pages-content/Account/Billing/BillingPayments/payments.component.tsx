import { Wrapper, Sum, List } from "./payments.style";
import Item from "./payments.item";
const BillingPayments = () => {
  const data = [
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
  ];
  return (
    <Wrapper>
      <Sum>
        Total Paid :<span className="font-semibold px-2">2,500$</span>
      </Sum>
      <List>
        {data?.map((x, index) => (
          <Item key={index} data={x} />
        ))}
      </List>
    </Wrapper>
  );
};
export default BillingPayments;

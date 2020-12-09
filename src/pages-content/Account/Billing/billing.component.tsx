import { useState } from "react";
import { Wrapper, Header, Tabs, TabItem } from "./billing.style";
import Increase from "./BillingIncrease/increase.component";
import Payments from "./BillingPayments/payments.component";

const AccountPaymentContainer = () => {
  const [tab, changeTab] = useState(1);
  return (
    <Wrapper>
      <Header>
        <Tabs>
          <TabItem onClick={() => changeTab(1)} selected={tab === 1}>
            Increase Credit
          </TabItem>
          <TabItem onClick={() => changeTab(2)} selected={tab === 2}>
            Payments
          </TabItem>
        </Tabs>
      </Header>
      {tab === 1 ? <Increase /> : <Payments />}
    </Wrapper>
  );
};
export default AccountPaymentContainer;

import Icon from "@Shared/components/Icon";
import {
  PerContainer,
  IconBox,
  Values,
  PerTitle,
  PerValue,
} from "./increase.style";
const BillingPer = ({ title, value }: { title: string; value: string }) => {
  return (
    <PerContainer>
      <IconBox>
        <Icon name={"financial"} />
      </IconBox>
      <Values>
        <PerTitle>{title}</PerTitle>
        <PerValue>{value} $</PerValue>
      </Values>
    </PerContainer>
  );
};
export default BillingPer;

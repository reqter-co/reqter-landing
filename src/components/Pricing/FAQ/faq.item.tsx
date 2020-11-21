import { FAQItemWrapper, Title, Description } from "./faq.style";
const PlanItem = ({ data }: { data: any }) => {
  const { title, description } = data;
  return (
    <FAQItemWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </FAQItemWrapper>
  );
};
export default PlanItem;

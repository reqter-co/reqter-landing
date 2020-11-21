import {
  Wrapper,
  Content,
  Header,
  Title,
  Description,
  Left,
  Right,
  Image,
  Row,
} from "./card,style";
import Button from "@Shared/components/Button";
import tw from "twin.macro";
interface IProps {
  data: {
    title: string;
    header: string;
    description: string;
    image?: string;
  };
  isReverse: boolean;
}
const Card: React.FC<IProps> = ({ data, isReverse }) => {
  const { header, title, description } = data;
  return (
    <Wrapper>
      <Content>
        <Header>{header}</Header>
        <Row css={[!isReverse ? tw`flex-row tab-port:flex-col` : tw`flex-row-reverse tab-port:flex-col`]}>
          <Left>
            <Image src="https://media.graphcms.com/resize=w:1200,fit:crop/quality=value:75/output=format:webp/compress/kr4jWOoQLOghTlhdDVUp" />
          </Left>
          <Right>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Button secondary cls={tw`self-start phone:self-stretch`} size="lg">
              Learn More
            </Button>
          </Right>
        </Row>
      </Content>
    </Wrapper>
  );
};
export default Card;

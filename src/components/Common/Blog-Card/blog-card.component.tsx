import {
  Wrapper,
  ImageBox,
  Image,
  Title,
  Description,
  Tags,
  TagItem,
  Footer,
  Date,
} from "./blog-card.style";
import Button from "@Shared/components/Button";
import tw from "twin.macro";
import { Link } from "@Shared/components/Footer/footer.style";
interface IProps {
  data: {
    title: string;
    tags: any;
    description: string;
    image?: string;
    slug: string;
  };
}
const Card: React.FC<IProps> = ({ data }) => {
  const { title, description, tags, slug, image } = data;
  return (
    <Wrapper>
      <Link href={`/blog/${slug}`}>
        <ImageBox>
          <Image src={image} />
        </ImageBox>
        <Title>{title}</Title>
        <Tags>
          {tags?.map((item: any, index: string) => (
            <TagItem key={index}>{item.text}</TagItem>
          ))}
        </Tags>
        <Description>{description}</Description>
        <Footer>
          <Button secondary cls={tw`self-start phone:self-stretch`} size="sm">
            Read Detail
          </Button>
          <Date></Date>
        </Footer>
      </Link>
    </Wrapper>
  );
};
export default Card;

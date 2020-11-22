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
import Link from "@Shared/components/Link";
import { IBlog } from "@Interfaces/blog";
interface IProps {
  data: IBlog;
  sender: "learn" | "blog";
}
const Card = ({ data, sender }: IProps) => {
  const { name, slug, thumbnail, publishdate, shortdescription, tags } = data;
  return (
    <Link href={`/${sender}/${slug}`}>
      <Wrapper>
        <ImageBox>
          <Image src={thumbnail} />
        </ImageBox>
        <Title>{name}</Title>
        <Tags>
          {tags?.map((item: any, index: string) => (
            <TagItem key={index}>{item.text}</TagItem>
          ))}
        </Tags>
        <Description>{shortdescription}</Description>
        <Footer>
          <Button
            secondary
            link
            href={`/blog/${slug}`}
            cls={tw`self-start phone:self-stretch`}
            size="sm"
          >
            Read Detail
          </Button>
          <Date>{publishdate}</Date>
        </Footer>
      </Wrapper>
    </Link>
  );
};
export default Card;

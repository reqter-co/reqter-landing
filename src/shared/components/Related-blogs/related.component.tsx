import Card from "src/pages-content/Common/Blog-Card/blog-card.component";
import { Wrapper, Container } from "./related.style";
import { IBlog } from "@Interfaces/blog";
import useRouter from "@Hooks/useRouter";
import { theme } from "twin.macro";
interface IProps {
  data: IBlog[];
}
const RelateItems = ({ data }: IProps) => {
  const { currentRoute } = useRouter();
  const isBlog = currentRoute.includes("blog");
  return (
    <Wrapper bgColor={theme`colors.gray.100`} title="Related Items">
      <Container>
        {data?.map((item: IBlog) => (
          <Card key={item._id} sender={isBlog ? "blog" : "learn"} data={item} />
        ))}
      </Container>
    </Wrapper>
  );
};
export default RelateItems;

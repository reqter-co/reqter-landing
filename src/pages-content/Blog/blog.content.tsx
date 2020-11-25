import Card from "src/pages-content/Common/Blog-Card/blog-card.component";
import { BlogContainer } from "./blog.style";
import Section from "@Shared/components/Section";
import { IBlog } from "@Interfaces/blog";
const BlogContent = ({ data }: { data: IBlog[] }) => {
  return (
    <Section>
      <BlogContainer>
        {data?.map((item: IBlog) => (
          <Card key={item._id} sender="blog" data={item} />
        ))}
      </BlogContainer>
    </Section>
  );
};
export default BlogContent;

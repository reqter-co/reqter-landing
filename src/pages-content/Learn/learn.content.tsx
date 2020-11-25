import Card from "src/pages-content/Common/Blog-Card/blog-card.component";
import { LearnContainer } from "./learn.style";
import Section from "@Shared/components/Section";
import { IBlog } from "@Interfaces/blog";

const LearnContent = ({ data }: { data: IBlog[] }) => {
  return (
    <Section>
      <LearnContainer>
        {data?.map((item, index) => (
          <Card key={index} sender="learn" data={item} />
        ))}
      </LearnContainer>
    </Section>
  );
};
export default LearnContent;

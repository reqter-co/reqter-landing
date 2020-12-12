import Section from "@Shared/components/Section";
import Tags from "@Shared/components/Tags";
import { IBlog } from "@Interfaces/blog";
import { BlogDetailContainer, Date, Image } from "./blog-detail.style";

const BlogDetailContent = ({ data }: { data: IBlog }) => {
  const { tags, publishdate, thumbnail } = data;
  return (
    <Section>
      <BlogDetailContainer>
        <Date>{publishdate}</Date>
        <Tags data={tags} size="lg" center />
        <Image src={thumbnail} />
        <p className="max-w-4xl mt-10 mx-auto leading-7 tab-port:px-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic natus,
          nemo aut beatae corrupti fuga atque eveniet fugit velit? Voluptatibus
          cum necessitatibus explicabo exercitationem expedita dolorem quia
          doloremque commodi eos. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Hic natus, nemo aut beatae corrupti fuga atque
          eveniet fugit velit? Voluptatibus cum necessitatibus explicabo
          exercitationem expedita dolorem quia doloremque commodi eos. Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Hic natus, nemo
          aut beatae corrupti fuga atque eveniet fugit velit? Voluptatibus cum
          necessitatibus explicabo exercitationem expedita dolorem quia
          doloremque commodi eos. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Hic natus, nemo aut beatae corrupti fuga atque
          eveniet fugit velit? Voluptatibus cum necessitatibus explicabo
          exercitationem expedita dolorem quia doloremque commodi eos. Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Hic natus, nemo
          aut beatae corrupti fuga atque eveniet fugit velit? Voluptatibus cum
          necessitatibus explicabo exercitationem expedita dolorem quia
          doloremque commodi eos. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Hic natus, nemo aut beatae corrupti fuga atque
          eveniet fugit velit? Voluptatibus cum necessitatibus explicabo
          exercitationem expedita dolorem quia doloremque commodi eos.
        </p>
        <h1 className="text-2xl font-bold mt-5 tab-port:px-5">
          it amet consectetur adipisicing elit
        </h1>
        <p className="max-w-4xl mt-10 mx-auto leading-7 tab-port:px-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic natus,
          nemo aut beatae corrupti fuga atque eveniet fugit velit? Voluptatibus
          cum necessitatibus explicabo exercitationem expedita dolorem quia
          doloremque commodi eos. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Hic natus, nemo aut beatae corrupti fuga atque
          eveniet fugit velit? Voluptatibus cum necessitatibus explicabo
          exercitationem expedita dolorem quia doloremque commodi eos. Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Hic natus, nemo
          aut beatae corrupti fuga atque eveniet fugit velit? Voluptatibus cum
          necessitatibus explicabo exercitationem expedita dolorem quia
          doloremque commodi eos. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Hic natus, nemo aut beatae corrupti fuga atque
          eveniet fugit velit? Voluptatibus cum necessitatibus explicabo
          exercitationem expedita dolorem quia doloremque commodi eos. Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Hic natus, nemo
          aut beatae corrupti fuga atque eveniet fugit velit? Voluptatibus cum
          necessitatibus explicabo exercitationem expedita dolorem quia
          doloremque commodi eos. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Hic natus, nemo aut beatae corrupti fuga atque
          eveniet fugit velit? Voluptatibus cum necessitatibus explicabo
          exercitationem expedita dolorem quia doloremque commodi eos.
        </p>
      </BlogDetailContainer>
    </Section>
  );
};
export default BlogDetailContent;

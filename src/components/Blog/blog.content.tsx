import Card from "@Components/Common/Blog-Card/blog-card.component";
import { BlogContainer } from "./blog.style";
import Section from "@Shared/components/Section";
const BlogContent = () => {
  const list = [
    {
      image:
        "https://media.graphcms.com/resize=w:2560,h:1440,fit:crop/quality=value:75/output=format:webp/compress/g9qwQooOSRSXmWzDZzXl",
      title: "Announcing the official ReqterCMS integration for Netlify!",
      description:
        "We've just rolled out the native ReqterCMS - Netlify integration, with more integrations on the way!",
      tags: [
        {
          text: "Product Update",
        },
        {
          text: "Headless CMS",
        },
        {
          text: "Announcements",
        },
      ],
      date: "November 13, 2020",
      slug: "reqtercms-netlify-integration",
    },
    {
      image:
        "https://media.graphcms.com/resize=w:2560,h:1440,fit:crop/quality=value:75/output=format:webp/compress/g9qwQooOSRSXmWzDZzXl",
      title: "Product Update December 2020",
      description:
        "We've just rolled out the native ReqterCMS - Netlify integration, with more integrations on the way!",
      tags: [
        {
          text: "Product Update",
        },
        {
          text: "Headless CMS",
        },
      ],
      date: "November 13, 2020",
      slug: "reqtercms-netlify-integration",
    },
    {
      image:
        "https://media.graphcms.com/resize=w:2560,h:1440,fit:crop/quality=value:75/output=format:webp/compress/g9qwQooOSRSXmWzDZzXl",
      title: "Product Update December 2020",
      description:
        "We've just rolled out the native ReqterCMS - Netlify integration, with more integrations on the way!",
      tags: [
        {
          text: "Product Update",
        },
        {
          text: "Headless CMS",
        },
      ],
      date: "November 13, 2020",
      slug: "reqtercms-netlify-integration",
    },
    {
      image:
        "https://media.graphcms.com/resize=w:2560,h:1440,fit:crop/quality=value:75/output=format:webp/compress/g9qwQooOSRSXmWzDZzXl",
      title: "Product Update December 2020",
      description:
        "We've just rolled out the native ReqterCMS - Netlify integration, with more integrations on the way!",
      tags: [
        {
          text: "Product Update",
        },
        {
          text: "Headless CMS",
        },
      ],
      date: "November 13, 2020",
      slug: "reqtercms-netlify-integration",
    },
  ];
  return (
    <Section>
      <BlogContainer>
        {list?.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </BlogContainer>
    </Section>
  );
};
export default BlogContent;

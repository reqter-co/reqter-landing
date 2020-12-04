import React from "react";
import { GetStaticProps, NextPage } from "next";
import { defaultMetaTags } from "@Core/constants";
import { getLayout } from "@Shared/layouts/MainLayout";
import SEO from "@Shared/components/SEO";
import { getLandingPageData } from "@Core/api";
import PageWrapper from "@Shared/layouts/PublicPagesWrapper/wrapper.component";
import Content from "src/pages-content/Blog/blog.content";
import { IBlog } from "@Interfaces/blog";
import { getAllBlogs } from "@Core/api/common-api";
interface IProps {
  blogs: IBlog[];
}

const Blog: NextPage<IProps> & { getLayout: any } = ({ blogs }) => {
  return (
    <>
      <SEO tags={defaultMetaTags} />
      <PageWrapper
        title="ReqterCMS Blog"
        description="Read the latest news and stories from the ReqterCMS team, covering announcements, product releases, and updates."
      >
        <Content data={blogs} />
      </PageWrapper>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const [{ headerData, footerData }, blogs] = await Promise.all([
    getLandingPageData(),
    getAllBlogs(),
  ]);

  return {
    props: {
      headerData,
      footerData,
      blogs,
    },
    revalidate: 60,
  };
};

Blog.getLayout = getLayout;
export default Blog;

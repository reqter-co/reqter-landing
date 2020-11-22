import React from "react";
import { GetStaticProps, NextPage } from "next";
import { defaultMetaTags } from "@Core/constants";
import Layout from "@Shared/layouts/MainLayout";
import { getLandingPageData } from "@Core/api";
import PageWrapper from "@Components/Common/Wrapper/wrapper.component";
import Content from "@Components/Blog/blog.content";
import { IBlog } from "@Interfaces/blog";
import { getAllBlogs } from "@Core/api/common-api";
interface IProps {
  headerData: any;
  footerData: any;
  blogs: IBlog[];
}

const Blog: NextPage<IProps, any> = ({ headerData, footerData, blogs }) => {
  return (
    <Layout
      metaTags={defaultMetaTags}
      footerData={footerData}
      headerData={headerData}
    >
      <PageWrapper
        title="ReqterCMS Blog"
        description="Read the latest news and stories from the ReqterCMS team, covering announcements, product releases, and updates."
      >
        <Content data={blogs} />
      </PageWrapper>
    </Layout>
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

export default Blog;

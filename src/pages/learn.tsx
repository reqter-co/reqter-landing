import React from "react";
import { GetStaticProps, NextPage } from "next";
import { defaultMetaTags } from "@Core/constants";
import Layout from "@Shared/layouts/MainLayout";
import { getLandingPageData } from "@Core/api";
import PageWrapper from "src/pages-content/Common/Wrapper/wrapper.component";
import Content from "src/pages-content/Learn/learn.content";
import { IBlog } from "@Interfaces/blog";
import { getAllBlogs } from "@Core/api/common-api";
interface IProps {
  headerData: any;
  footerData: any;
  learns: IBlog[];
}

const LearnPage: NextPage<IProps, any> = ({
  headerData,
  footerData,
  learns,
}) => {
  return (
    <Layout
      metaTags={defaultMetaTags}
      footerData={footerData}
      headerData={headerData}
    >
      <PageWrapper
        title="ReqterCMS Academy"
        description={`Answer your questions around "What is a Headless CMS?", "What is GraphQL?", "What is a DXP?", and more, with our ReqterCMS Knowledge Hub.`}
      >
        <Content data={learns} />
      </PageWrapper>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const [{ headerData, footerData }, learns] = await Promise.all([
    getLandingPageData(),
    getAllBlogs(),
  ]);

  return {
    props: {
      headerData,
      footerData,
      learns,
    },
    revalidate: 60,
  };
};

export default LearnPage;

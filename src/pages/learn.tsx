import React from "react";
import { GetStaticProps, NextPage } from "next";
import { defaultMetaTags } from "@Core/constants";
import Layout from "@Shared/layouts/MainLayout";
import { getLandingPageData } from "@Core/api";
import PageWrapper from "@Components/Common/Wrapper/wrapper.component";
import Content from "@Components/Learn/learn.content";

interface IProps {
  headerData: any;
  footerData: any;
}

const Blog: NextPage<IProps, any> = ({ headerData, footerData }) => {
  return (
    <Layout
      metaTags={defaultMetaTags}
      footerData={footerData}
      headerData={headerData}
    >
      <PageWrapper
        title="ReqterCMS Learn"
        description={`Answer your questions around "What is a Headless CMS?", "What is GraphQL?", "What is a DXP?", and more, with our ReqterCMS Knowledge Hub.`}
      >
        <Content />
      </PageWrapper>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { headerData, footerData } = await getLandingPageData();

  return {
    props: {
      headerData,
      footerData,
    },
    revalidate: 60,
  };
};

export default Blog;

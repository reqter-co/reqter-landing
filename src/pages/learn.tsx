import React from "react";
import { GetStaticProps, NextPage } from "next";
import { defaultMetaTags } from "@Core/constants";
import SEO from "@Shared/components/SEO";
import { getLayout } from "@Shared/layouts/MainLayout";
import { getLandingPageData } from "@Core/api";
import PageWrapper from "@Shared/layouts/PublicPagesWrapper";
import Content from "src/pages-content/Learn/learn.content";
import { IBlog } from "@Interfaces/blog";
import { getAllBlogs } from "@Core/api/common-api";
interface IProps {
  learns: IBlog[];
}

const LearnPage: NextPage<IProps, any> & { getLayout: any } = ({ learns }) => {
  return (
    <>
      <SEO tags={defaultMetaTags} />
      <PageWrapper
        title="ReqterCMS Academy"
        description={`Answer your questions around "What is a Headless CMS?", "What is GraphQL?", "What is a DXP?", and more, with our ReqterCMS Knowledge Hub.`}
      >
        <Content data={learns} />
      </PageWrapper>
    </>
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

LearnPage.getLayout = getLayout;
export default LearnPage;

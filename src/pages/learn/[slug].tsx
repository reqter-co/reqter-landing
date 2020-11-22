import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { defaultMetaTags } from "@Core/constants";
import Layout from "@Shared/layouts/MainLayout";
import { getLandingPageData } from "@Core/api";
import PageWrapper from "@Components/Common/Wrapper/wrapper.component";
import { getAllBlogs, getBlogBySlug } from "@Core/api/common-api";
import { IBlog } from "@Interfaces/blog";

interface IProps {
  headerData: any;
  footerData: any;
  blogData: IBlog;
}

const LearnDetail: NextPage<IProps, any> = ({
  headerData,
  footerData,
  blogData,
}) => {
  return (
    <Layout
      metaTags={defaultMetaTags}
      footerData={footerData}
      headerData={headerData}
    >
      <PageWrapper
        title={blogData?.name}
        description={blogData?.shortdescription}
      ></PageWrapper>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  // get slug param and fetch blog detail by slug
  const { slug } = params;
  const [data, blogData] = await Promise.all([
    getLandingPageData(),
    getBlogBySlug(slug),
  ]);
  const { headerData, footerData } = data;
  return {
    props: {
      headerData,
      footerData,
      blogData,
    },
    revalidate: 1,
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  // get all blogs and return all path
  const allBlog = await getAllBlogs();
  if (allBlog) {
    return {
      paths: allBlog.map((blog: any) => ({
        params: {
          slug: blog.slug,
        },
      })),
      fallback: "blocking",
    };
  }
  return {
    paths: [],
    fallback: false,
  };
};

export default LearnDetail;

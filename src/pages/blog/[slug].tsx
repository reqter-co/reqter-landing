import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { defaultMetaTags } from "@Core/constants";
import Layout from "@Shared/layouts/MainLayout";
import { getLandingPageData } from "@Core/api";
import PageWrapper from "@Components/Common/Wrapper/wrapper.component";
import {
  getAllBlogs,
  getBlogBySlug,
  getRelatedItemsByCategory,
} from "@Core/api/common-api";
import { IBlog } from "@Interfaces/blog";
import Content from "@Components/BlogDetail";
import RelatedItems from "@Shared/components/Related-blogs";
interface IProps {
  headerData: any;
  footerData: any;
  blogData: IBlog;
  relatedItems: IBlog[];
}

const BlogDetail: NextPage<IProps, any> = ({
  headerData,
  footerData,
  blogData,
  relatedItems,
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
      >
        <Content data={blogData} />
        {relatedItems && relatedItems.length && (
          <RelatedItems data={relatedItems} />
        )}
      </PageWrapper>
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
  const relatedItems: any = blogData
    ? await getRelatedItemsByCategory(blogData.category)
    : null;
  const { headerData, footerData } = data;
  return {
    props: {
      headerData,
      footerData,
      blogData,
      relatedItems: relatedItems
        ? relatedItems.filter((item: any) => item.slug !== slug)
        : null,
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

export default BlogDetail;

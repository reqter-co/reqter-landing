import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { defaultMetaTags } from "@Core/constants";
import { getLayout } from "@Shared/layouts/MainLayout";
import SEO from "@Shared/components/SEO";
import { getLandingPageData } from "@Core/api";
import PageWrapper from "@Shared/layouts/PublicPagesWrapper/wrapper.component";
import RelatedItems from "@Shared/components/Related-blogs";
import {
  getAllBlogs,
  getBlogBySlug,
  getRelatedItemsByCategory,
} from "@Core/api/common-api";
import { IBlog } from "@Interfaces/blog";
import Content from "src/pages-content/BlogDetail";
interface IProps {
  blogData: IBlog;
  relatedItems: IBlog[];
}

const LearnDetail: NextPage<IProps> & { getLayout: any } = ({
  blogData,
  relatedItems,
}) => {
  return (
    <>
      <SEO tags={defaultMetaTags} />
      <PageWrapper
        title={blogData?.name}
        description={blogData?.shortdescription}
      >
        <Content data={blogData} />
        {relatedItems && relatedItems.length && (
          <RelatedItems data={relatedItems} />
        )}
      </PageWrapper>
    </>
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

LearnDetail.getLayout = getLayout;
export default LearnDetail;

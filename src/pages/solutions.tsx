import React from "react";
import { GetStaticProps, NextPage } from "next";
import PageWrapper from "@Shared/layouts/PublicPagesWrapper/wrapper.component";
import { defaultMetaTags } from "@Core/constants";
import { getLayout } from "@Shared/layouts/MainLayout";
import SEO from "@Shared/components/SEO";
import { getLandingPageData } from "@Core/api";
import Content from "src/pages-content/Solutions/solutions.content";

const Product: NextPage & { getLayout: any } = () => {
  return (
    <>
      <SEO tags={defaultMetaTags} />
      <PageWrapper
        title="ReqterCMS empowers you to do your best"
        description="Build better digital experiences with market-leading APIs. Innovative teams of all sizes use ReqterCMS to scale their technologies and build ambitious market-leading applications."
      >
        <Content />
      </PageWrapper>
    </>
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
Product.getLayout = getLayout;

export default Product;

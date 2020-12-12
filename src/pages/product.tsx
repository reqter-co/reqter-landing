import React from "react";
import { GetStaticProps, NextPage } from "next";
import { defaultMetaTags } from "@Core/constants";
import { getLayout } from "@Shared/layouts/MainLayout";
import SEO from "@Shared/components/SEO";
import PageWrapper from "@Shared/layouts/PublicPagesWrapper/wrapper.component";
import { getLandingPageData } from "@Core/api";
import ProductContent from "src/pages-content/Product/product.content";

const Product: NextPage & { getLayout: any } = () => {
  return (
    <>
      <SEO tags={defaultMetaTags} />
      <PageWrapper
        title="ReqterCMS Product"
        description="Empower your development and editorial teams' workflows and bring your digital projects to life with ReqterCMS.Deliver the perfect Customer Experience with a scalable and secure Enterprise Headless CMS that seamlessly fits in to your ideal Digital Experience Platform"
      >
        <ProductContent />
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

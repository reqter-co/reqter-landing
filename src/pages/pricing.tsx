import React from "react";
import { GetStaticProps, NextPage } from "next";
import { defaultMetaTags } from "@Core/constants";
import SEO from "@Shared/components/SEO";
import { getLayout } from "@Shared/layouts/MainLayout";
import PageWrapper from "@Shared/layouts/PublicPagesWrapper";
import { getLandingPageData } from "@Core/api";
import PricingContent from "src/pages-content/Pricing/pricing.content";

const Pricing: NextPage & { getLayout: any } = () => {
  return (
    <>
      <SEO tags={defaultMetaTags} />
      <PageWrapper
        title="ReqterCMS Pricing"
        description="From ambitious ideas to market-leading applications consumed by millions across the world, our plans scale with you based on your needs."
      >
        <PricingContent />
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

Pricing.getLayout = getLayout;

export default Pricing;

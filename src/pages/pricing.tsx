import React from "react";
import { GetStaticProps, NextPage } from "next";
import { defaultMetaTags } from "@Core/constants";
import Layout from "@Shared/layouts/MainLayout";
import { getLandingPageData } from "@Core/api";
import PricingContent from "@Components/Pricing/pricing.content";

interface IProps {
  headerData: any;
  footerData: any;
}

const Pricing: NextPage<IProps, any> = ({ headerData, footerData }) => {
  return (
    <Layout
      metaTags={defaultMetaTags}
      footerData={footerData}
      headerData={headerData}
    >
      <PricingContent />
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

export default Pricing;

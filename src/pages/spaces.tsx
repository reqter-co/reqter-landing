import React from "react";
import { GetStaticProps, NextPage } from "next";
import { defaultMetaTags } from "@Core/constants";
import Layout from "@Shared/layouts/MainLayout";
import withLogin from "../hoc/withLogin";
import { getLandingPageData } from "@Core/api";
import Content from "@Components/Spaces/space.content";
interface IProps {
  headerData: any;
  footerData: any;
}

const Spaces: NextPage<IProps> = ({ headerData, footerData }) => {
  return (
    <Layout
      metaTags={defaultMetaTags}
      footerData={footerData}
      headerData={headerData}
    >
      <Content />
    </Layout>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const {
    headerData,
    footerData,
    landingPageResponse,
  } = await getLandingPageData();

  return {
    props: {
      headerData,
      footerData,
      landingPage: landingPageResponse,
    },
    revalidate: 60,
  };
};

export default withLogin(Spaces);

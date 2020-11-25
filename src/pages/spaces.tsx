import React from "react";
import { GetStaticProps, NextPage } from "next";
import { defaultMetaTags } from "@Core/constants";
import { getLandingPageData } from "@Core/api";
import Layout from "@Shared/layouts/MainLayout";
import PageWrapper from "@Shared/components/AuthPageWrapper";
import Content from "src/pages-content/Spaces/space.content";
import useUser from "@Hooks/useUser";
interface IProps {
  headerData: any;
  footerData: any;
}

const Spaces: NextPage<IProps> = ({ headerData, footerData }) => {
  const { user } = useUser({ redirectTo: "/login" });

  return (
    <Layout
      metaTags={defaultMetaTags}
      footerData={footerData}
      headerData={headerData}
    >
      <PageWrapper>{user && <Content />}</PageWrapper>
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

export default Spaces;

import React from "react";
import { GetStaticProps, NextPage } from "next";
import { defaultMetaTags } from "@Core/constants";
import Layout from "@Shared/layouts/MainLayout";
import Hero from "@Components/Home/Hero/hero.component";
import Needs from "@Components/Home/Needs";
import StartFree from "@Components/Home/ForFree/free.component";
import WhyUs from "@Components/Home/WhyUs";
import Features from "@Components/Home/Features";
import { getLandingPageData } from "@Core/api";
import { LandingProvider } from "@Contexts/landing/landing.provider";

interface IProps {
  headerData: any;
  footerData: any;
  landingPage: any;
}

const Home: NextPage<IProps, any> = ({
  headerData,
  footerData,
  landingPage,
}) => {
  return (
    <Layout
      metaTags={defaultMetaTags}
      footerData={footerData}
      headerData={headerData}
    >
      <LandingProvider data={{ landingPage }}>
        <Hero />
        <Needs />
        <WhyUs />
        <Features />
        <StartFree />
      </LandingProvider>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const {
    appLocales,
    headerData,
    footerData,
    landingPageResponse,
  } = await getLandingPageData();

  return {
    props: {
      appLocales,
      headerData,
      footerData,
      landingPage: landingPageResponse,
    },
    revalidate: 60,
  };
};

export default Home;

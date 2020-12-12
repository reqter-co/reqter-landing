import React from "react";
import { GetStaticProps, NextPage } from "next";
import { defaultMetaTags } from "@Core/constants";
import SEO from "@Shared/components/SEO";
import { getLayout } from "@Shared/layouts/MainLayout";
import Hero from "src/pages-content/Home/Hero/hero.component";
import Needs from "src/pages-content/Home/Needs";
import StartFree from "src/pages-content/Home/ForFree/free.component";
import WhyUs from "src/pages-content/Home/WhyUs";
import Features from "src/pages-content/Home/Features";
import { getLandingPageData } from "@Core/api";
import { LandingProvider } from "@Contexts/landing/landing.provider";

interface IProps {
  landingPage: any;
}

const Home: NextPage<IProps, any> & { getLayout: any } = ({ landingPage }) => {
  return (
    <>
      <SEO tags={defaultMetaTags} />
      <LandingProvider data={{ landingPage }}>
        <Hero />
        <Needs />
        <WhyUs />
        <Features />
        <StartFree />
      </LandingProvider>
    </>
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

Home.getLayout = getLayout;
export default Home;

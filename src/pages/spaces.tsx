import React from "react";
import { GetStaticProps, NextPage } from "next";
import { defaultMetaTags } from "@Core/constants";
import SEO from "@Shared/components/SEO";
import { getLandingPageData } from "@Core/api";
import { getLayout as getUserLayout } from "@Shared/layouts/UserPagesWrapper";
import Content from "src/pages-content/Spaces/space.content";
import useUser from "@Hooks/useUser";

const Spaces: NextPage & { getLayout: any } = () => {
  const { user } = useUser({ redirectTo: "/login" });

  return (
    <>
      <SEO tags={defaultMetaTags} />
      {user && <Content />}
    </>
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
// , pageProps: any
Spaces.getLayout = (page: any) => {
  // console.log(pageProps);
  return getUserLayout(
    page,
    "Spaces List",
    "Create new one and open on of your spaces to edit"
  );
};
export default Spaces;

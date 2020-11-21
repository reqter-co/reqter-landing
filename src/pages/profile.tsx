import React from "react";
import { GetStaticProps, NextPage } from "next";
import { defaultMetaTags } from "@Core/constants";
import Layout from "@Shared/layouts/MainLayout";
import { getLandingPageData } from "@Core/api";
import useUser from "@Hooks/useUser";
interface IProps {
  headerData: any;
  footerData: any;
}

const Profile: NextPage<IProps> = ({ headerData, footerData }) => {
  const { user } = useUser({ redirectTo: "/login" });

  return (
    <Layout
      metaTags={defaultMetaTags}
      footerData={footerData}
      headerData={headerData}
    >
      {!user ? (
        <div className="mt-32 h-64 max-w-6xl m-auto">Loading...</div>
      ) : (
        <div className="mt-32 h-64 max-w-6xl m-auto">Profile</div>
      )}
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

export default Profile;

import React from "react";
import { GetStaticProps, NextPage } from "next";
import { defaultMetaTags } from "@Core/constants";
import SEO from "@Shared/components/SEO";
import { getLayout as getUserLayout } from "@Shared/layouts/UserPagesWrapper";
import AccountContainer from "@Shared/layouts/Account-Container";
import Content from "@PagesContent/Account/Profile";
import { getLandingPageData } from "@Core/api";
import useUser from "@Hooks/useUser";
import { AccountProvider } from "@Contexts/account/account.provider";

const Profile: NextPage & { getLayout: any } = () => {
  const { user } = useUser({ redirectTo: "/login" });

  return (
    <>
      <SEO tags={defaultMetaTags} />
      <AccountContainer title="Profile">
        {user && (
          <AccountProvider data={{ user }}>
            <Content />
          </AccountProvider>
        )}
      </AccountContainer>
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

Profile.getLayout = (page: any, pageProps: any) => {
  console.log(pageProps);
  return getUserLayout(
    page,
    "User Account",
    "Manage your account to have a great opportunities"
  );
};
export default Profile;

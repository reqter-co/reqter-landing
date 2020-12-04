import React from "react";
import { GetStaticProps, NextPage } from "next";
import { defaultMetaTags } from "@Core/constants";
import Layout from "@Shared/layouts/MainLayout";
import PageWrapper from "@Shared/components/AuthPageWrapper";
import AccountContainer from "@Shared/components/Account-Container";
import Content from "@PagesContent/Account/Settings";
import { getLandingPageData } from "@Core/api";
import useUser from "@Hooks/useUser";
import { AccountProvider } from "@Contexts/account/account.provider";
interface IProps {
  headerData: any;
  footerData: any;
}

const Settings: NextPage<IProps> = ({ headerData, footerData }) => {
  const { user } = useUser({ redirectTo: "/login" });

  return (
    <Layout
      metaTags={defaultMetaTags}
      footerData={footerData}
      headerData={headerData}
    >
      <PageWrapper
        title="User Account"
        description="Manage your account to have a great opportunities"
      >
        <AccountContainer title="Settings">
          {user && (
            <AccountProvider data={{ user }}>
              <Content />
            </AccountProvider>
          )}
        </AccountContainer>
      </PageWrapper>
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

export default Settings;

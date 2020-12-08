import React from "react";
import { GetStaticProps, NextPage } from "next";
import { defaultMetaTags } from "@Core/constants";
import { getLayout as getUserLayout } from "@Shared/layouts/UserPagesWrapper";
import SEO from "@Shared/components/SEO";
import AccountContainer from "@Shared/layouts/Account-Container";
import Content from "@PagesContent/Account/Billing";
import { getLandingPageData } from "@Core/api";
import useUser from "@Hooks/useUser";
import { AccountProvider } from "@Contexts/account/account.provider";

const Payment: NextPage & { getLayout: any } = () => {
  const { user } = useUser({ redirectTo: "/login" });

  return (
    <>
      <SEO tags={defaultMetaTags} />
      <AccountContainer>
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
// , pageProps: any
Payment.getLayout = (page: any) => {
  // console.log(pageProps);
  return getUserLayout(
    page,
    "Account",
    "Manage your account to have a great opportunities"
  );
};
export default Payment;

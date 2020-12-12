import React from "react";
import { GetStaticProps, NextPage } from "next";
import { defaultMetaTags } from "@Core/constants";
import SEO from "@Shared/components/SEO";
import { getLandingPageData } from "@Core/api";
import { getLayout as getUserLayout } from "@Shared/layouts/UserPagesWrapper";
import Content from "src/pages-content/Tickets/tickets.content";
import useUser from "@Hooks/useUser";
import Button from "@Shared/components/Button";

const Tickets: NextPage & { getLayout: any } = () => {
  useUser({ redirectTo: "/login" });
  return (
    <>
      <SEO tags={defaultMetaTags} />
      <Content />
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
Tickets.getLayout = (page: any) => {
  // console.log(pageProps);
  const Actions = () => <Button size="sm">New Ticket</Button>;
  return getUserLayout(page, "Tickets", "", Actions);
};
export default Tickets;

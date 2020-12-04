import React from "react";
import Header from "./Header/header.component";
import Footer from "@Shared/components/Footer";
import { Main, Content } from "./styles";

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <Main>
      <Header />
      <Content>{children}</Content>
      <Footer />
      {/* <Modal /> */}
    </Main>
  );
};
export const getLayout = (page: any) => <Layout>{page}</Layout>;
export default Layout;

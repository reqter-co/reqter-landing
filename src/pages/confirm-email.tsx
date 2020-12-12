import { useMemo } from "react";
import { NextPage, GetServerSideProps, GetServerSidePropsContext } from "next";
import AuthLayout from "@Shared/layouts/AuthLayout";
import ConfirmEmailContent from "src/pages-content/ConfirmEmail/confirmEmail.content";
import { MetaTags, PageType, RobotsContent } from "@Interfaces/meta-tags";
import { concatenateStrings } from "@Shared/helper";
import { getLoginPageData } from "@Core/api";
import { ILogin } from "@Interfaces/login";
import useDataPath from "@Hooks/useDataPath";
import useMediaUtils from "@Hooks/useMediaUtils";
import { confirmEmail } from "@Core/api/auth";

interface ILoginPageProps {
  loginPage: ILogin;
  confirmResult: any;
}
interface IContext extends GetServerSidePropsContext {
  query: {
    [key in string]: any;
  };
}

const ConfirmEmail: NextPage<ILoginPageProps, any> = ({
  loginPage,
  confirmResult,
}) => {
  const { getKeyValue } = useDataPath();
  const { getMediaValue } = useMediaUtils();
  const metaTags: MetaTags = useMemo(() => {
    return {
      logo:
        "https://blog.mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png",
      canonical: `${process.env.DOMAIN_PUBLIC}`,
      title: getKeyValue(loginPage, "name"),
      description: getKeyValue(loginPage, "infodescripton"),
      image:
        "https://blog.mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png",
      robots: concatenateStrings(RobotsContent.index, RobotsContent.follow),
      type: PageType.website,
    };
  }, [loginPage]);

  return (
    <AuthLayout
      metaTags={metaTags}
      title={getKeyValue(loginPage, "infotitle")}
      description={getKeyValue(loginPage, "infodescripton")}
      image={getMediaValue(getKeyValue(loginPage, "infoimage"), "image")}
      formRender={() => <ConfirmEmailContent confirmResult={confirmResult} />}
    />
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: IContext
) => {
  const { query } = context;
  const [{ loginPage }, confirmResult] = await Promise.all([
    getLoginPageData(),
    confirmEmail(query.token),
  ]);
  return {
    props: {
      loginPage,
      confirmResult,
    },
  };
};

export default ConfirmEmail;

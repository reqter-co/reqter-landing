import type { AppProps } from "next/app";
import { AppProvider } from "@Contexts/app/app.provider";
import { AuthProvider } from "@Contexts/auth/auth.provider";
import { LanguageProvider } from "@Contexts/language/language.provider";
import "../assets/styles/main.css";
import { GlobalStyles } from "../assets/styles/global.styles";
import { Toast } from "@Shared/components/Toast/toast.component";
import { Alert } from "@Shared/components/Alert/alert.component";
import { NextPage } from "next";
interface IAppProps extends AppProps {
  Component: NextPage & { getLayout: any };
}
const ExtendedApp = ({ Component, pageProps }: IAppProps) => {
  const getLayout = Component.getLayout || null;
  return (
    <AppProvider
      data={{
        headerData: pageProps.headerData,
        footerData: pageProps.footerData,
      }}
    >
      <AuthProvider>
        <LanguageProvider data={{ appLocales: pageProps.appLocales }}>
          <GlobalStyles />
          {getLayout ? (
            getLayout(<Component {...pageProps} />, pageProps)
          ) : (
            <Component {...pageProps} />
          )}
          <Toast
            position="bottom-center"
            autoDelete={true}
            autoDeleteTime={3000}
          />
          <Alert />
        </LanguageProvider>
      </AuthProvider>
    </AppProvider>
  );
};

export default ExtendedApp;

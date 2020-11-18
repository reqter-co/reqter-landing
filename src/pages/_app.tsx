import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { AppProvider } from "@Contexts/app/app.provider";
import { AuthProvider } from "@Contexts/auth/auth.provider";
import { LanguageProvider } from "@Contexts/language/language.provider";
import "../assets/styles/main.css";
import { GlobalStyles } from "../assets/styles/global.styles";
import { ThemeProvider } from "./../contexts/theme";
import { Toast } from "@Shared/components/Toast/toast.component";

const ExtendedApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <AppProvider>
        <AuthProvider>
          <LanguageProvider data={{ appLocales: pageProps.appLocales }}>
            <GlobalStyles />
            <Toast
              position="bottom-center"
              autoDelete={true}
              autoDeleteTime={3000}
            />
            <Component {...pageProps} />
          </LanguageProvider>
        </AuthProvider>
      </AppProvider>
    </ThemeProvider>
  );
};

export default ExtendedApp;

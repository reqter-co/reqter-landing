import { PageType, RobotsContent, MetaTags } from "@Interfaces/meta-tags";
import { concatenateStrings } from "@Shared/helper";

export const defaultMetaTags: MetaTags = {
  logo:
    "https://blog.mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png",
  canonical: `${process.env.DOMAIN_PUBLIC}`,
  description: "",
  image:
    "https://blog.mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png",
  robots: concatenateStrings(RobotsContent.index, RobotsContent.follow),
  title: "REQTER",
  type: PageType.website,
};

export const clientid =
  process.env.NEXT_PUBLIC_CLIENT_ID || "03387475-3e13-4781-ab3d-d155515c7cb7";
export const TOKEN_KEY = "@reqter-token";
// ============================================================
const baseUrl = process.env.NEXT_PUBLIC_DATA_BASE_URL;
const authBaseUrl = process.env.NEXT_PUBLIC_AUTH_BASE_URL;
const listLeanUrl = "/api/v1/lists/lean";
export const urls = {
  assetsDownloadBaseUrl: "https://assets.reqter.com/asset/download/",
  imageDownloadBaseUrl: "https://assets.reqter.com/asset/image/download/",
  token: baseUrl + "/api/v1/auth/token",
  locales: baseUrl + "/api/v1/config/locales",
  header: baseUrl + listLeanUrl + "/5fa99c7d9d374e001a8582ec",
  footer: baseUrl + listLeanUrl + "/5f8aeb0b56b30d001a1fc5f0",
  landing: baseUrl + listLeanUrl + "/5fa99d009d374e001a8582ed",
  categories: baseUrl + listLeanUrl + "/5e858a10f0356f001334ba30",
  tools: baseUrl + listLeanUrl + "/5f85885c56b30d001a1fc5b8",
  login: authBaseUrl + "/auth/token",
  signUp: authBaseUrl + "/auth/register",
  loginPage: baseUrl + listLeanUrl + "/5f88864b56b30d001a1fc5e5",
  signUpPage: baseUrl + listLeanUrl + "/5f8d72fc56b30d001a1fc603",
  userInfo: authBaseUrl + "/auth/info",
  forgotPass_sendCode: authBaseUrl + "/auth/forgotpassword",
  forgotPass_verifyCode: authBaseUrl + "/auth/verifycode",
  forgotPass_resetPass: authBaseUrl + "/auth/resetpassword",
  confirmEmail: authBaseUrl + "/auth/confirmemail",
  allBlogs: "",
};

export const spaces_urls = {
  list: "https://jsonplaceholder.typicode.com/albums",
};
